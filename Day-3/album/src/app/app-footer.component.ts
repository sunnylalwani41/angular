import { Component } from "@angular/core";

@Component({
    selector: "footer",
    template: `
        <div id="licence">
            <div id="licence-detail">
                <label>
                Album example is © Bootstrap, but please download and customize it for yourself!
                <br>
                New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">getting started guide</a>.
                </label>
            </div>
            <a href="#">Back to top</a>
        </div>
    `,
    styleUrls: ["./app-footer.component.css"]

})
export class Footer{

}