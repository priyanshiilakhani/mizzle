import { Route } from '@angular/router'
import { ContactV1 } from './contact-v1/contact-v1'
import { ContactV2 } from './contact-v2/contact-v2'

export const CONTACT_ROUTES: Route[] = [
  {
    path: 'v1',
    component: ContactV1,
    data: { title: 'Contact v.1' },
  },
  {
    path: 'v2',
    component: ContactV2,
    data: { title: 'Contact v.2' },
  },
]
