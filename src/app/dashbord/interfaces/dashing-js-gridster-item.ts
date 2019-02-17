import { GridsterItem } from 'angular-gridster2';

interface Widget {
  icon: string | null;
  class: string | null;
  component: any | null;
}
export interface DashingJsGridsterItem extends GridsterItem {
  widget: Widget;
}
