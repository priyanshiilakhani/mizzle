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
//   {
//     path: 'account',
//     component: AccountLayout,
//     canActivate: [
//       () => {
//         const currentUser = inject(AuthService).session
//         const router: Router = inject(Router)
//         console.log(router)
//         if (currentUser) return true
//         const urlTree: UrlTree = router.parseUrl('/auth/sign-in')
//         return new RedirectCommand(urlTree, { skipLocationChange: true })
//       },
//     ],
//     loadChildren: () =>
//       import('./views/account/account.route').then((mod) => mod.ACCOUNT_ROUTES),
//   },
]
