import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
}
