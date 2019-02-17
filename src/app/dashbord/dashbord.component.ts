import { Component, OnInit } from '@angular/core';
import { DashbordGridsterConfigService } from './dashbord-gridster-config.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { environment } from 'src/environments/environment';
import { DashingJsGridsterItem } from './interfaces/dashing-js-gridster-item';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  config: GridsterConfig;
  items: Array<DashingJsGridsterItem>;

  constructor(private dashbordGridsterConfigService: DashbordGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashbordGridsterConfigService.getConfig();
    this.items = environment.dashingJSConfig.items;
  }
}
