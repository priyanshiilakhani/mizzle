import { Route } from "@angular/router";
import { Team } from "./team/team";
import { Pricing } from "./pricing/pricing";
import { Faq } from "./faq/faq";
import { Error404 } from "./error-404/error-404";
import { ComingSoon } from "./coming-soon/coming-soon";
import { TermsAndCondition } from "./terms-and-condition/terms-and-condition";

export const OTHER_PAGE_ROUTES: Route[] = [
  {
    path: 'team',
    component: Team,
    data: { title: 'Team' },
  },
  {
    path: 'pricing',
    component: Pricing,
    data: { title: 'Pricing',headerDark: true  },
  },
  {
    path: 'faq',
    component: Faq,
    data: { title: 'FAQs' },
  },
  {
    path: 'error-404',
    component: Error404,
    data: { title: 'Page Not Found' },
  },
  {
    path: 'coming-soon',
    component: ComingSoon,
    data: { title: 'Comming Soon' },
  },
  {
    path: 'terms-conditions',
    component: TermsAndCondition,
    data: { title: 'Terms & Condition' },
  },
];