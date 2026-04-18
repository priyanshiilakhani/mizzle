import { Route } from '@angular/router';
import { Masonry } from './masonry/masonry';
import { Showcase } from './showcase/showcase';
import { List } from './list/list';
import { CaseStudyV1 } from './case-study-v1/case-study-v1';
import { CaseStudyV2 } from './case-study-v2/case-study-v2';

export const PORTFOLIO_ROUTE: Route[] = [
  {
    path: 'masonry',
    component: Masonry,
    data: { title: 'Portfolio Masonry' },
  },
  {
    path: 'showcase',
    component: Showcase,
    data: { title: 'Portfolio Showcase' },
  },
  {
    path: 'list',
    component: List,
    data: { title: 'Portfolio List' },
  },
  {
    path: 'case-study/v1',
    component: CaseStudyV1,
    data: { title: 'Case Study v.1' },
  },
  {
    path: 'case-study/v2',
    component: CaseStudyV2,
    data: { title: 'Case Study v.2' },
  },
];
