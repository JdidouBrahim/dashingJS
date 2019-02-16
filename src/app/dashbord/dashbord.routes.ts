import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashbordComponent } from './dashbord.component';

const dashbordRoutes: Routes = [
  {
    path: 'dashbord',
    component: DashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashbordRoutes)],
  exports: [RouterModule]
})
export class DashbordRouteModule {}
