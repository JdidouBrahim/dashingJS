import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashbordRouteModule } from './dashbord.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashbordGridsterConfigService } from './dashbord-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';

@NgModule({
  declarations: [DashbordComponent, WidgetContainerComponent, WidgetHostDirective, HelloWorldComponent],
  imports: [CommonModule, DashbordRouteModule, GridsterModule],
  providers: [DashbordGridsterConfigService],
  entryComponents: [HelloWorldComponent]
})
export class DashbordModule {}
