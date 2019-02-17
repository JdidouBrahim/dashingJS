import { DashingJSConfig } from 'src/app/dashbord/interfaces/dashing-jsconfig';
import { HelloWorldComponent } from 'src/app/dashbord/widgets/hello-world/hello-world.component';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const dashingJSConfig: DashingJSConfig = {
  items: [
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-magic', class: 'bg-primary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-google', class: 'bg-secondary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-success' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-warning' } },
    { x: 1, y: 1, cols: 1, rows: 1, widget: { component: null, icon: '', class: 'bg-info' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-light text-dark' } },
    {
      x: 1,
      y: 1,
      cols: 1,
      rows: 1,
      widget: { component: HelloWorldComponent, icon: 'fa fa-bitcoin', class: 'bg-dark' }
    },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 2, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-github', class: 'bg-primary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-light text-dark' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: false,
  dashingJSConfig: dashingJSConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
