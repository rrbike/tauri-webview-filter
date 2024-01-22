import { Routes } from '@angular/router';

export const settingRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./component/setting.component').then((c) => c.SettingComponent),
  },
];