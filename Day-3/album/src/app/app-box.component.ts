import { Component } from "@angular/core";

@Component({
    selector: "box",
    template: `
        <div class="cart">
            <div class= "detail">
                <div class="image">Thumbnail</div>
                <div class= "text-button">
                    <p>{{matter}}</p>
                    <div class= "button-time">
                        <div class= "button">
                            <button>View</button>
                            <button>Edit</button>
                        </div>
                        <p class="time">9 mins</p>
                    </div>
                </div>
            </div>
            <div class= "detail">
                <div class="image">Thumbnail</div>
                <div class= "text-button">
                    <p>{{matter}}</p>
                    <div class= "button-time">
                        <div class= "button">
                            <button>View</button>
                            <button>Edit</button>
                        </div>
                        <p class="time">9 mins</p>
                    </div>
                </div>
            </div>
            <div class= "detail">
                <div class="image">Thumbnail</div>
                <div class= "text-button">
                    <p>{{matter}}</p>
                    <div class= "button-time">
                        <div class= "button">
                            <button>View</button>
                            <button>Edit</button>
                        </div>
                        <p class="time">9 mins</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./app-box.component.css"]
})
export class Box{
    matter:string =  "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

}