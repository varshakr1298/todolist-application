import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
    <div class="app-title">
      Welcome to {{ title }}!
    </div>
  </div>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My To-Do List Application';
}