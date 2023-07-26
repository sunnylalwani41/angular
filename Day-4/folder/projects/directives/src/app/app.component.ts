import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label for="toggle">Show Terms and Condition</label>
  <input id="toggle" type="checkbox" (change)="show=!show">
  <fieldset *ngIf="show">
    <legend>Terms and condition</legend>
    <p>1st condition</p>
    <p>2st condition</p>
    <p>3st condition</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odio nobis et sunt, mollitia commodi qui iste veniam maiores, ipsa, ipsum dolor rem a illo officiis explicabo enim consequuntur ad.</p>
  </fieldset>
  <hr>
  <ng-template [ngIf]="!show">
  {{title}}
  </ng-template>
  <p [hidden]="show">Hellow</p>
  <ol>
    <li *ngFor="let hero of avengers">{{hero}}</li>
  </ol>
  `,
  styles: []
})
export class AppComponent {
  title = 'directives';
  show=false;
  avengers = ["Dr.", "Hank", "Superman", "Captain America", "Antman"];
}
