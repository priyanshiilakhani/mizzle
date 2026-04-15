import { Route } from '@angular/router';
import { Career } from './career/career';
import { CareerSingle } from './career-single/career-single';

export const CAREER_ROUTES: Route[] = [
  {
    path: '',
    component: Career,
    data: { title: 'Career' },
  },
  {
    path: 'single',
    component: CareerSingle,
    data: { title: 'Career Single' },
  },
];
