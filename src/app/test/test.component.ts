import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test',
  template: `
    <h3>Test component</h3>
    <a routerLink="/main">Go to main</a>
    <ul>
        <li *ngFor="let item of data">{{ item.title }}</li>
    </ul>
  `
})
export class TestComponent implements OnInit {
  data: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.route.snapshot.data.placeholder;
  }
}
