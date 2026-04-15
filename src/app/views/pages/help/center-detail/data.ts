export const featureData: string[] = [
  'Vite and Customization',
  'Color Scheme and Logo Settings',
  'Dark mode, RTL Version',
  'Updates and Support',
  'Describing your store',
];

export type SupportLinkType = {
  icon: string;
  title: string;
  description: string;
  email?: string;
};

export const supportLinkData: SupportLinkType[] = [
  {
    icon: 'headset',
    title: 'Contact Support',
    description: 'Not finding the help you need?',
  },
  {
    icon: 'ticket',
    title: 'Submit a Ticket',
    description: 'Prosperous impression had delay',
  },
  {
    icon: 'mail-open',
    title: 'Email us',
    description: 'Reach us at',
    email: 'example@gmail.com',
  },
];
