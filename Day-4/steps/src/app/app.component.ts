import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> Main Component</h1>
      <app-child [quantity]=" count">
        <h3>Heading H3</h3>
        <h4> Heading H4</h4>
        <button>Click</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias repellat sunt, incidunt omnis minima maxime delectus et optio dignissimos, nam saepe nisi natus magnam aut ea culpa hic expedita.
        </p>
        <p class="box">
          class box
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias repellat sunt, incidunt omnis minima maxime delectus et optio dignissimos, nam saepe nisi natus magnam aut ea culpa hic expedita.
        </p>
        <div>{{title}}</div>
        <div id="apptitle">{{title}}</div>
        <div>{{title}}</div>

        <ul>
          <li class=".x">List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
        </ul>
        
      </app-child>
      <button (click)="count=count+1"> count Increasing {{count}}</button>
      
    </div>
  `
})
export class AppComponent {
  title = 'steps';
  count:number = 4;
}
