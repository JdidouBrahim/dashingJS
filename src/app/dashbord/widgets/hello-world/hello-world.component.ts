import { Component, OnInit, Input } from '@angular/core';
import { DashingJsGridsterItem } from '../../interfaces/dashing-js-gridster-item';

@Component({
  selector: 'app-hello-world',
  template: `
    <h4>Hello world</h4>
    c: {{ data.cols }} r : {{ data.rows }}
  `
})
export class HelloWorldComponent implements OnInit {
  @Input() data: DashingJsGridsterItem;
  constructor() {}

  ngOnInit() {}
}
