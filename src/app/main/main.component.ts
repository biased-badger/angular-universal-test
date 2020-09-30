import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <h3>Main component</h3>
    <a routerLink="/test">Go to test</a>
  `
})
export class MainComponent {
  constructor() {
  }
}
