import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>
  </div>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My To-Do List Application';
}