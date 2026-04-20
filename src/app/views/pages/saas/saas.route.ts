import { Route } from '@angular/router'
import { Features } from './features/features'
import { FeatureSingle } from './feature-single/feature-single'
import { Integrations } from './integrations/integrations'
import { IntegrationsSingle } from './integrations-single/integrations-single'

export const SAAS_ROUTES: Route[] = [
  {
    path: 'features',
    component: Features,
    data: { title: 'SaaS Features' },
  },
  {
    path: 'feature-single',
    component: FeatureSingle,
    data: { title: 'SaaS Feature Single' ,headerDark: true },
  },
  {
    path: 'integrations',
    component: Integrations,
    data: { title: 'SaaS Integration' },
  },
  {
    path: 'integration-single',
    component: IntegrationsSingle,
    data: { title: 'SaaS Integration Single' },
  },
]
