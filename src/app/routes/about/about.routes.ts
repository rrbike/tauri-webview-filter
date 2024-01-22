import { Routes } from '@angular/router';

export const aboutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/about.component').then((c) => c.AboutComponent),
  },
];
