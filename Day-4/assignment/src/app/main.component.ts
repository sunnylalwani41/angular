import {Component} from "@angular/core";
@Component({
    selector: "app-main",
    template: 
    `
    <main>
      <app-banner/>
      <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
              <app-product/>
            </div>
          </div>
      </div>
    </main>
    `
})
export class MainComp{}