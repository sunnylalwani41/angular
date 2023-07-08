import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> {{title}}</h1>
  <fieldset>
    <legend>
      <h2>Attribute Binding</h2>
      
    </legend>
   
    <h3 [innerHTML]="title"></h3>
    <h3 [innerText]="title"></h3>
    <h3 [textContent]="title"></h3>
    <h3 innerText="title"></h3>
  </fieldset>
  <fieldset>
    <legend>
      <h2>Property Binding</h2>
    </legend>
    <h3 bind-innerHTML="title"></h3>
    <h3 bind-innerText="title"></h3>
    <h3 bind-textContent="title"></h3>
  </fieldset>
  <fieldset>
    <legend>
      <h2> Value Binding</h2>
    </legend>
    <input type='text' [value]="title">
    <input [type]="type">
  </fieldset>
  <fieldset>
    <legend>
      <h2>Event Binding</h2>
    </legend>
    <input #t1 type="text">
    <button (click)="clickHandler(t1.value)">Click Here</button>
    <input #num type="number" [value]="count" (change)="count=num.value">
    <h1 bind-textContent="count"></h1>
  </fieldset>

  `
  
})
export class AppComponent {
  title = 'steps';
  type='color';
  count:any= 5;
  clickHandler(message:string){
    alert(message);
  }
}
