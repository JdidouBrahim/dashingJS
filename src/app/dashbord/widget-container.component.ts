import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DashingJsGridsterItem } from './interfaces/dashing-js-gridster-item';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';

@Component({
  selector: 'app-widget-container',
  template: '<ng-template [appWidgetHost]="data"></ng-template>'
})
export class WidgetContainerComponent implements OnInit {
  @Input()
  data: DashingJsGridsterItem;

  @ViewChild(WidgetHostDirective) widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  private injectComponent(): void {
    if (this.data.widget.component === null) {
      return;
    } else {
      console.log('on the widget container');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
      console.log('hello world component' + componentFactory);
      const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = this.data;
    }
  }

  ngOnInit() {
    this.injectComponent();
  }
}
