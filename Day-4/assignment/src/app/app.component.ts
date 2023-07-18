import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-topbar/>
  <app-header/>
  <app-main/>
  <app-footer/>
  `
})
export class AppComponent {
  title = 'assignment';
}
