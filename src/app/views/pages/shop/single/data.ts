const review1 = 'assets/images/shop/review/01.jpg';
const review2 = 'assets/images/shop/review/02.jpg';
const review6 = 'assets/images/shop/review/06.jpg';
const review5 = 'assets/images/shop/review/05.jpg';
const review3 = 'assets/images/shop/review/03.jpg';
const review4 = 'assets/images/shop/review/04.jpg';

const avatar1 = 'assets/images/avatar/01.jpg';
const avatar2 = 'assets/images/avatar/02.jpg';

const shop2 ='assets/images/shop/02.png'
const shop3 ='assets/images/shop/03.png'
const shop4 ='assets/images/shop/04.png'
const shop1 ='assets/images/shop/01.png'


export const imageData: string[] = [review6, review2, review1, review5];

export type RatingType = {
  value: number;
  percent: number;
};

export const ratingData: RatingType[] = [
  { value: 5, percent: 95 },
  { value: 4, percent: 75 },
  { value: 3, percent: 55 },
  { value: 2, percent: 35 },
  { value: 1, percent: 25 },
];

export const reviewImageData: string[] = [review1, review2, review3, review4, review5];


export type ReviewType = {
  name: string;
  description: string;
  date: string;
  rating: number;
  image: string;
};

export const reviewData: ReviewType[] = [
  {
    name: 'Allen Smith',
    description:
      'Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 11, 2022, at 6:01 am',
    rating: 4.5,
    image: avatar1,
  },
  {
    name: 'Louis Ferguson',
    description:
      'Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 14, 2022, at 6:01 am',
    rating: 4.5,
    image: avatar2,
  },
];

export type ProductType = {
  title: string;
  image: string;
  price: number;
  rating: number;
  badge?: {
    text: string;
    color: string;
  };
  oldPrice?: number;
};

export const productData: ProductType[] = [
  {
    title: 'Classic round neck t-shirt',
    image: shop2,
    price: 103.0,
    rating: 4.5,
    badge: { text: 'Featured', color: 'bg-dark' },
  },
  {
    title: 'Premium cotton baseball cap',
    image: shop3,
    price: 98.0,
    rating: 4.5,
  },
  {
    title: 'High performance headphones with Noise cancellation',
    image: shop4,
    price: 150.0,
    oldPrice: 180.0,
    rating: 4.5,
    badge: { text: '30% off', color: 'bg-danger' },
  },
  {
    title: 'Premium stainless steel water bottle',
    image: shop1,
    price: 40.0,
    rating: 4.5,
  },
];
