import { Route } from '@angular/router'
import { Grid } from './grid/grid'
import { ListSidebar } from './list-sidebar/list-sidebar'
import { SingleV1 } from './single-v1/single-v1'
import { SingleV2 } from './single-v2/single-v2'

export const BLOG_ROUTES: Route[] = [
  {
    path: 'grid',
    component: Grid,
    data: { title: 'Blog Grid' },
  },
  {
    path: 'list-sidebar',
    component: ListSidebar,
    data: { title: 'Blog List Sidebar' },
  },
  {
    path: 'single/v1',
    component: SingleV1,
    data: { title: 'Blog Single v.1' },
  },
  {
    path: 'single/v2',
    component: SingleV2,
    data: { title: 'Blog Single v.2' },
  },
]
