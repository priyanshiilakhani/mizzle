const client5 = '/images/client/05.svg';
const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client6 = '/images/client/06.svg';
const client7 = '/images/client/07.svg';

const usFlag = '/images/flags/us.svg';
const inFlag = '/images/flags/in.svg';

const webflow = '/images/elements/webflow.svg';
const tailwindcss = '/images/elements/tailwindcss.svg';
const github = '/images/elements/github.svg';

export const client: string[] = [client5, client1, client2, client3, client4, client6, client7];

export type socialLinkType = {
  icon: string;
  className?: string;
  iconClassName: string;
};

export const socialLinks: socialLinkType[] = [
  {
    icon: 'facebook',
    className: 'text-blue-700',
    iconClassName: 'fill-blue-600 text-blue-600 size-4',
  },
  {
    icon: 'instagram',
    iconClassName: 'text-pink-600 size-4',
  },
  {
    icon: 'dribbble',
    iconClassName: 'text-pink-400 size-4',
  },
  {
    icon: 'twitter',
    iconClassName: 'fill-sky-400 text-sky-400 size-4',
  },
  {
    icon: 'youtube',
    iconClassName: 'text-danger size-4',
  },
];

export type templateItemType = {
  title: string;
  description: string;
  image: string;
  imageHeight: string;
  ariaLabel: string;
};

export const templateItems: templateItemType[] = [
  {
    title: 'Webflow templates',
    description: 'The combination of my passion for design',
    image: webflow,
    imageHeight: 'h-12.5',
    ariaLabel: 'Open Webflow templates',
  },
  {
    title: 'TailwindCSS templates',
    description: 'It drew a hill from my the passion for design',
    image: tailwindcss,
    imageHeight: 'h-10.5',
    ariaLabel: 'Open TailwindCSS templates',
  },
  {
    title: 'Contribute on Github',
    description: 'Supposing so be resolving breakfast am or perfectly.',
    image: github,
    imageHeight: 'h-12.5',
    ariaLabel: 'Open Contribute on Github',
  },
];

export type LocationType = {
  country: string;
  image: string;
  address: string;
  phone: string;
};

export const locations: LocationType[] = [
  {
    country: 'United States',
    image: usFlag,
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    phone: '469-537-2410 (Toll-free)',
  },
  {
    country: 'India',
    image: inFlag,
    address: '55/123 Norman street, Banking road, Sydney NSW 5000',
    phone: '469-537-2410 (Toll-free)',
  },
];
