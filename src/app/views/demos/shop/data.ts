const shop2 = '/images/shop/02.png';
const shop3 = '/images/shop/03.png';
const shop4 = '/images/shop/04.png';
const shop1 = '/images/shop/01.png';
const shop5 = '/images/shop/05.png';
const shop6 = '/images/shop/06.png';

const shop8 = '/images/shop/08.png';
const shop9 = '/images/shop/09.png';
const shop7 = '/images/shop/07.png';
const shop10 = '/images/shop/10.png';

const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client5 = '/images/client/05.svg';
const client6 = '/images/client/06.svg';
const client7 = '/images/client/07.svg';
const client8 = '/images/client/08.svg';

export type productType = {
  title: string;
  image: string;
  price: string;
  rating: number;
  badgeColor?: string;
  badge?: string;
  oldPrice?: string;
};

export const products: productType[] = [
  {
    title: 'Classic round neck t-shirt',
    image: shop2,
    price: '103.00',
    badge: 'Featured',
    badgeColor: 'dark',
    rating: 4.5,
  },
  {
    title: 'Premium cotton baseball cap',
    image: shop3,
    price: '98.00',
    rating: 4.5,
  },
  {
    title: 'High performance headphones with Noise cancellation',
    image: shop4,
    price: '150.00',
    oldPrice: '180.00',
    badge: '30% off',
    badgeColor: 'danger',
    rating: 4.5,
  },
  {
    title: 'Premium stainless steel water bottle',
    image: shop1,
    price: '40.00',
    rating: 4.5,
  },
  {
    title: 'The ultimate smartphone for modern lifestyles',
    image: shop5,
    price: '215.00',
    rating: 4.5,
  },
  {
    title: 'Vintage inspired bluetooth radio speaker',
    image: shop6,
    price: '142.00',
    rating: 4.5,
  },
];

export type featuresType = {
  icon: string;
  title: string;
  description: string;
  className: string;
  iconClassName: string;
};

export const features: featuresType[] = [
  {
    icon: 'zap',
    title: 'Fast and reliable delivery',
    description: 'Ensure timely and dependable delivery services to meet customer expectations.',
    className: 'bg-info/10',
    iconClassName: 'text-info fill-info',
  },
  {
    icon: 'radar',
    title: 'Package tracking',
    description:
      'Offer real-time tracking information, so customers can monitor the status of their shipments.',
    className: 'bg-warning/10',
    iconClassName: 'text-warning',
  },
  {
    icon: 'flame',
    title: 'Returns and exchanges',
    description:
      'Clearly outline your return and exchange policy, making it easy for customers to initiate returns.',
    className: 'bg-danger/10',
    iconClassName: 'text-danger fill-danger',
  },
  {
    icon: 'headset',
    title: 'Customer support',
    description:
      'Provide responsive customer support to address shipping-related queries and issues.',
    className: 'bg-primary/10',
    iconClassName: 'text-primary',
  },
];

export type ProductType = {
  image: string;
  rating: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  isFavorite?: boolean;
};

export const productData: ProductType[] = [
  {
    image: shop8,
    rating: 4.5,
    title: `Mizz mb-2"> tcon russell`,
    category: "Man's training shoes",
    price: "180.00",
    oldPrice: "130.00",
  },
  {
    image: shop9,
    rating: 4.5,
    title: `Air mb-2">x Pulse Roam`,
    category: "Woman's training shoes",
    price: "135.00",
    oldPrice: "160.00",
    isFavorite: true,
  },
  {
    image: shop7,
    rating: 4.5,
    title: `Air mb-2"> x Pulse Roam`,
    category: "Man's sports and casual wear",
    price: "245.00",
  },
  {
    image: shop10,
    rating: 4.5,
    title: `Jordan "> ctori once`,
    category: "Man's printed slides",
    price: "45.00",
    oldPrice: "86.00",
  },
];

export const brands: string[] = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
];
