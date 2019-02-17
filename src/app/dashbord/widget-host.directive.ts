import { Directive, Input, ViewContainerRef } from '@angular/core';
import { DashingJsGridsterItem } from './interfaces/dashing-js-gridster-item';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  private data: DashingJsGridsterItem;

  @Input('appWidgetHost') set appWidgetHost(data: DashingJsGridsterItem) {
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) {}
}
