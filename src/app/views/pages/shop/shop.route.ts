import { Route } from '@angular/router'
import { Grid } from './grid/grid'
import { Single } from './single/single'
import { Cart } from './cart/cart'
import { EmptyCart } from './empty-cart/empty-cart'
import { Checkout } from './checkout/checkout'

export const SHOP_ROUTES: Route[] = [
  {
    path: 'grid',
    component: Grid,
    data: { title: 'Shop Grid' },
  },
  {
    path: 'single',
    component: Single,
    data: { title: 'Shop Single' },
  },
  {
    path: 'cart',
    component: Cart,
    data: { title: 'Shop Cart' },
  },
  {
    path: 'empty-cart',
    component: EmptyCart,
    data: { title: 'Empty Cart' },
  },
  {
    path: 'checkout',
    component: Checkout,
    data: { title: 'Shop Checkout' },
  }
]
