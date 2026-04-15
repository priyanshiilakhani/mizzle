import { Route } from '@angular/router';
import { Center } from './center/center';
import { CenterDetail } from './center-detail/center-detail';

export const HELP_ROUTES: Route[] = [
  {
    path: 'center',
    component: Center,
    data: { title: 'Help Center' },
  },
  {
    path: 'detail',
    component: CenterDetail,
    data: { title: 'Help Detail' },
  },
];
