"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let component = (config) => {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.power = config.power;
                this.selector = config.selector;
                this.template = config.template;
            }
        };
    };
};
let MyCom = class MyCom {
    constructor() {
        this.title = "Welcome to your life";
    }
};
MyCom = __decorate([
    component({
        power: 100,
        selector: "app-root",
        template: `
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li>List Item 1 </li>
            <li>List Item 2 </li>
            <li>List Item 3 </li>
        </ul>
        <h2>{{power}}</h2>
    </div>
    `
    })
], MyCom);
