import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashbordRouteModule } from './dashbord.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashbordGridsterConfigService } from './dashbord-gridster-config.service';

@NgModule({
  declarations: [DashbordComponent],
  imports: [CommonModule, DashbordRouteModule, GridsterModule],
  providers: [DashbordGridsterConfigService]
})
export class DashbordModule {}
