import { Route } from "@angular/router";
import { Detail } from "./detail/detail";
import { Security } from "./security/security";
import { Notification } from "./notification/notification";
import { Projects } from "./projects/projects";
import { PaymentDetails } from "./payment-details/payment-details";
import { Order } from "./order/order";
import { Wishlist } from "./wishlist/wishlist";
import { Delete } from "./delete/delete";

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'detail',
    component: Detail,
    data: { title: 'Profile' },
  },
  {
    path: 'security',
    component: Security,
    data: { title: 'Security' },
  },
  {
    path: 'notification',
    component: Notification,
    data: { title: 'Notifications' },
  },
  {
    path: 'projects',
    component: Projects,
    data: { title: 'My Projects' },
  },
  {
    path: 'payment-details',
    component: PaymentDetails,
    data: { title: 'Payment Detail' },
  },
  {
    path: 'order',
    component: Order,
    data: { title: 'Order History' },
  },
  {
    path: 'wishlist',
    component: Wishlist,
    data: { title: 'Wishlist' },
  },
  {
    path: 'delete',
    component: Delete,
    data: { title: 'Delete Profile' },
  },
];