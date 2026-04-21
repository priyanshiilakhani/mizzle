import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ComingSoon } from './views/pages/other-pages/coming-soon/coming-soon';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'demos/classic',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./views/account/account.route').then((mod) => mod.ACCOUNT_ROUTES),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
      path: 'coming-soon',
      component: ComingSoon,
      data: { title: 'Comming Soon' },
  },
];
