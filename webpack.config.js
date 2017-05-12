let { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
let path = require("path");

let entryFilePath = "./src/index.ts"
let buildPath = path.resolve(__dirname, "build") // __dirname == W:\
let buildFilename = "build.js"

let config = {
    entry: entryFilePath,
    output: {
        path: buildPath,
        filename: buildFilename
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules")
               ],
               options: {
                   configFileName: "./src/tsconfig.json"
               }
            }
        ]
    },
    plugins: [
        new TsConfigPathsPlugin(),
        new CheckerPlugin()
    ]
};

module.exports = config;