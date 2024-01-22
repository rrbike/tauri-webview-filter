import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    title: 'App 123 - About',
    loadChildren: () => import('./routes/about'),
  },
  {
    path: 'setting',
    title: 'App 123 - Setting',
    loadChildren: () => import('./routes/setting'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./component/home/home.component').then((c) => c.HomeComponent),
  },
];
