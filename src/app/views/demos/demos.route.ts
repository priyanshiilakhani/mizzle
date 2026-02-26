import { Routes } from '@angular/router'
import { CreativeAgency } from './creative-agency/creative-agency'
import { Default } from './default/default'
import { DigitalAgency } from './digital-agency/digital-agency'
import { SeoAgency } from './seo-agency/seo-agency'
import { LandingProduct } from './landing-product/landing-product'
import { DesignAgency } from './design-agency/design-agency'
import { MobileShowCase } from './mobile-show-case/mobile-show-case'
import { Saas } from './saas/saas';
import { SaasV2 } from './saas-v2/saas-v2'
import { SaasV3 } from './saas-v3/saas-v3'
import { SaasV4 } from './saas-v4/saas-v4'
import { SaasV5 } from './saas-v5/saas-v5'
import { FinanceConsulting } from './finance-consulting/finance-consulting'
import { Shop } from './shop/shop'

export const DEMO_ROUTE: Routes = [
  {
    path: 'classic',
    component: Default,
    data: { title: 'Classic Default' },
  },
  {
    path: 'agency/creative',
    component: CreativeAgency,
    data: { title: 'Creative Agency' },
  },
  {
    path: 'agency/digital',
    component: DigitalAgency,
    data: { title: 'Digital Agency' },
  },
  {
    path: 'agency/design',
    component: DesignAgency,
    data: { title: 'Design Agency' },
  },
  {
    path: 'agency/seo',
    component: SeoAgency,
    data: { title: 'SEO Agency' },
  },
  {
    path: 'product-landing',
    component: LandingProduct,
    data: { title: 'Product Landing' },
  },
  {
    path: 'mobile-app',
    component: MobileShowCase,
    data: { title: 'Mobile Showcase' },
  },
  {
    path: 'saas',
    component: Saas,
    data: { title: 'SaaS v.1' },
  },
  {
    path: 'saas/v2',
    component: SaasV2,
    data: { title: 'SaaS v.2' },
  },
  {
    path: 'saas/v3',
    component: SaasV3,
    data: { title: 'SaaS v.3' },
  },
  {
    path: 'saas/v4',
    component: SaasV4,
    data: { title: 'SaaS v.2' },
  },
  {
    path: 'saas/v5',
    component: SaasV5,
    data: { title: 'SaaS v.5' },
  },
  {
    path: 'finance-consulting',
    component: FinanceConsulting,
    data: { title: 'Finance Consulting' },
  },
  {
    path:'index/shop',
    component: Shop,
    data: { title: 'index shop' },
  },
];
