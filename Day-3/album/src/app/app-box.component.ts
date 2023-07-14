import { Component } from "@angular/core";

@Component({
    selector: "box",
    template: `
        <div class = "cart">
            <div class= "detail">
                <div class="image">Thumbnail</div>
                <div class= "text-button">
                    <p></p>
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
    `
})
export class Box{}