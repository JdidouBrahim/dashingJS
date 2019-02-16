import { Component, OnInit } from '@angular/core';
import { DashbordGridsterConfigService } from './dashbord-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  config: GridsterConfig;
  items: Array<GridsterItem>;

  constructor(private dashbordGridsterConfigService: DashbordGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashbordGridsterConfigService.getConfig();
    this.items = [
      { x: 1, y: 1, cols: 1, rows: 2 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 2, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 },
      { x: 1, y: 1, cols: 1, rows: 1 }
    ];
  }
}
