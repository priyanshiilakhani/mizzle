export type SidebarType = {
  label: string;
  icon: string;
  route: string;
  class?: string;
  isLogout?: boolean;
};

export const sidebarData: SidebarType[] = [
  {
    label: 'My profile',
    icon: 'user',
    route: '/account/detail',
  },
  {
    label: 'Security',
    icon: 'shield',
    route: '/account/security',
  },
  {
    label: 'Notification',
    icon: 'bell',
    route: '/account/notification',
  },
  {
    label: 'My projects',
    icon: 'briefcase-business',
    route: '/account/projects',
  },
  {
    label: 'Payment details',
    icon: 'credit-card',
    route: '/account/payment-details',
  },
  {
    label: 'Order history',
    icon: 'shopping-basket',
    route: '/account/order',
  },
  {
    label: 'Wishlist',
    icon: 'heart',
    route: '/account/wishlist',
  },
  {
    label: 'Delete profile',
    icon: 'trash-2',
    route: '/account/delete',
  },
  {
    label: 'Sign Out',
    icon: 'log-out',
    route: '',
    class: 'text-danger',
    isLogout: true,
  },
];