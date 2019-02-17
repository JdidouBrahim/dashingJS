import { DashingJSConfig } from 'src/app/dashbord/interfaces/dashing-jsconfig';

const dashingJSConfig: DashingJSConfig = {
  items: [
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-magic', class: 'bg-primary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-google', class: 'bg-secondary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-success' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-warning' } },
    { x: 1, y: 1, cols: 1, rows: 1, widget: { component: null, icon: '', class: 'bg-info' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-light text-dark' } },
    { x: 1, y: 1, cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 2, cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-github', class: 'bg-primary' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: '' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-light text-dark' } },
    { x: 1, y: 1, cols: 1, rows: 2, widget: { component: null, icon: '', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: true,
  dashingJSConfig: dashingJSConfig
};
