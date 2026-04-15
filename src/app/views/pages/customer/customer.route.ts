import { Route } from "@angular/router";
import { CustomerStories } from "./customer-stories/customer-stories";
import { CustomerStorySingle } from "./customer-story-single/customer-story-single";

export const CUSTOMER_ROUTES: Route[] = [
  {
    path: 'stories',
    component: CustomerStories,
    data: { title: 'Customer Stories' },
  },
  {
    path: 'story-single',
    component: CustomerStorySingle,
    data: { title: 'Customer Stories Single' },
  },
];