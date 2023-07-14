import { Component } from "@angular/core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "navbar",
    template: `
    <div id="title">
        <fa-icon [icon]="camera"></fa-icon>
        <h2>Album</h2>
    </div>
    <div id = "handBurger">
        <div></div>
        <div></div>
        <div></div>
    </div>
    `,
    styleUrls:["./app-navbar.component.css"]
})
export class Navbar{
    camera= faCamera
}
