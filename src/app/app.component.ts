import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
  <img width=10% src="https://i.gifer.com/Iknm.gif">
    <span class="app-title">
      Welcome to {{ title }}!
    </span>
  </div>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'My To-Do List Application';
}