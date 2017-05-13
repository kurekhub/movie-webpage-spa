import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: `
        <p>Hello world {{ test }}</p>
        <p>To jest test</p>
        <p>HURRA TO DZIALA, WOW</p>
        <p>Kolejny test</p>
        <p>W koncu sie udalo</p>
    `
})
export class AppComponent {
    public test: string = "test";
    constructor() {
        
    }
}