import { Route } from '@angular/router';
import { Servicev1 } from './servicev1/servicev1';
import { Servicev2 } from './servicev2/servicev2';
import { ServiceSingle } from './service-single/service-single';

export const SERVICE_ROUTES: Route[] = [
  {
    path: 'v1',
    component: Servicev1,
    data: { title: 'Services v.1' },
  },
  {
    path: 'v2',
    component: Servicev2,
    data: { title: 'Services v.2' },
  },
  {
    path: 'single',
    component: ServiceSingle,
    data: { title: 'Service Single' },
  },
];
