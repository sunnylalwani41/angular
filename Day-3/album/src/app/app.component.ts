import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <header></header>
    
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'album';
}
