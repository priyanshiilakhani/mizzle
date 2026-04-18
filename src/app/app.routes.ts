import { Routes } from '@angular/router'
import { inject } from '@angular/core'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demos/classic',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEW_ROUTES),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./views/account/account.route').then((mod) => mod.ACCOUNT_ROUTES),
  },
]
