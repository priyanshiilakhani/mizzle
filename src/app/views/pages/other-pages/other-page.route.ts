import { Route } from "@angular/router";
import { Team } from "./team/team";

export const OTHER_PAGE_ROUTES: Route[] = [
  {
    path: 'team',
    component: Team,
    data: { title: 'Team' },
  },
];