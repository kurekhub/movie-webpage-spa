import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: `
        <p>Hello world {{ test }}</p>
        <p>To jest test</p>
        <p>HURRA TO DZILA, WOW</p>
        <p>W koncu sie udalo</p>
    `
})
export class AppComponent {
    public test: string = "test";
    constructor() {
        
    }
}