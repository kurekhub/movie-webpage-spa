let { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let webpack = require("webpack");
let path = require("path");

let entryFilePath = path.resolve(__dirname, "src/main.ts");
let vendorPath = path.resolve(__dirname, "src/vendor.ts");

let buildPath = path.resolve(__dirname, "build")

let config = {
    entry: {
        app: entryFilePath,
        // vendor: vendorPath
    },
    output: {
        path: buildPath,
        publicPath: "http://localhost:8080",
        filename: "build.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "build"),
        historyApiFallback: true,
        stats: "verbose"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "./src/tsconfig.json"
                        },

                    },
                    {
                        loader: "angular2-template-loader"
                    }
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
            {
                test: /\,html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "raw-loader" },
                    { loader: "css-loader" }
                ],
                exclude: [
                    path.resolve(__dirname, "./build/")
                ]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new TsConfigPathsPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

module.exports = config;