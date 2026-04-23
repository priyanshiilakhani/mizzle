const shop2 = 'assets/images/shop/02.png';
const shop8 = 'assets/images/shop/08.png';
const shop1 = 'assets/images/shop/01.png';
const shop4 = 'assets/images/shop/04.png';
const shop6 = 'assets/images/shop/06.png';
const shop9 = 'assets/images/shop/09.png';
const shop3 = 'assets/images/shop/03.png';
const shop7 = 'assets/images/shop/07.png';
const shopbg5 = 'assets/images/shop/bg/05.jpg';

export type CategoryType = { id: string; name: string; count: number };

export const categoryData: CategoryType[] = [
  { id: 'category1', name: 'Fashion', count: 215 },
  { id: 'category2', name: 'Electronics', count: 142 },
  { id: 'category3', name: 'Games', count: 25 },
  { id: 'category4', name: 'Books', count: 81 },
  { id: 'category5', name: 'Mobile', count: 354 },
  { id: 'category6', name: 'Bags', count: 41 },
  { id: 'category7', name: 'Beauty products', count: 35 },
  { id: 'category8', name: 'Grocery', count: 41 },
];

export type ShopItemType = {
  label?: string;
  labelClass?: string;
  image?: string;
  title: string;
  link: string;
  price?: string;
  rating?: number;
  oldPrice?: string;
  heartClass?: string;
  type?: string;
  bgImage?: string;
};

export const shopItemData: ShopItemType[] = [
  {
    label: 'Featured',
    labelClass: 'bg-dark text-white',
    image: shop2,
    title: 'Classic round neck t-shirt',
    link: '/shop/single',
    price: '$103.00',
    rating: 4.5,
  },
  {
    label: '20% off',
    labelClass: 'bg-danger text-white',
    image: shop8,
    title: "Man's training shoes",
    link: '/shop/single',
    price: '$180.00',
    oldPrice: '$130.00',
    rating: 4.5,
    heartClass: 'fill-danger text-danger',
  },
  {
    image: shop1,
    title: 'Premium stainless steel water bottle',
    link: '/shop/single',
    price: '$40.00',
    rating: 4.5,
  },
  {
    type: 'banner',
    bgImage: shopbg5,
    title: 'Checkout the newest smart watch product',
    link: '',
  },
  {
    label: '30% off',
    labelClass: 'bg-danger text-white',
    image: shop4,
    title: 'High performance headphones with Noise cancellation',
    link: '/shop/single',
    price: '$150.00',
    oldPrice: '$180.00',
    rating: 4.5,
  },
  {
    image: shop8,
    title: 'The ultimate smartphone for modern lifestyles',
    link: '/shop/single',
    price: '$215.00',
    rating: 4.5,
  },
  {
    image: shop6,
    title: 'Vintage inspired bluetooth radio speaker',
    link: '/shop/single',
    price: '$142.00',
    rating: 4.5,
  },
  {
    image: shop9,
    title: "Woman's training shoes",
    link: '/shop/single',
    price: '$215.00',
    rating: 4.5,
  },
  {
    image: shop3,
    title: 'Premium cotton baseball cap',
    link: '/shop/single',
    price: '$98.00',
    rating: 4.5,
    heartClass: 'fill-danger text-danger',
  },
  {
    image: shop7,
    title: 'Air Max Pulse Roam',
    link: '/shop/single',
    price: '$142.00',
    rating: 4.5,
  },
];
