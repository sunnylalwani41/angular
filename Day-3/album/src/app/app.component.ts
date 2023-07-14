import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <header></header>
    <box></box>
    <box></box>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'album';
}
