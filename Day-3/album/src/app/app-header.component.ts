import { Component } from "@angular/core";

@Component({
    selector: "header",
    template: `
    <div id="head">
        <p id="heading">Album example</p>
        <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <div>
            <button>Main call to action</button>
            <button>Secondary action</button>
        </div>
    </div>
    `,
    styleUrls: ["./app-header.component.css"]
})
export class Header{

}