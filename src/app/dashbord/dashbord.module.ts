import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashbordRouteModule } from './dashbord.routes';

@NgModule({
  declarations: [DashbordComponent],
  imports: [CommonModule, DashbordRouteModule]
})
export class DashbordModule {}
