export type  WishlistType = {
  id: number;
  image: string;
  title: string;
  stockText: string;
  details: string[];
  price: string;
  quantityOptions: number[];
}

export const wishlistData: WishlistType[] = [
  {
    id: 1,
    image: '/images/shop/02.png',
    title: 'Round neck cotton t-shirt',
    stockText: 'In Stock',
    details: ['Gender: Male', 'Color: Midblue', 'Size: XL, L, M, S'],
    price: '$103.00',
    quantityOptions: [1, 2, 3],
  },
  {
    id: 2,
    image: '/images/shop/01.png',
    title: 'Woman skincare drops',
    stockText: 'Available in 5 days',
    details: ['Gender: Female', 'Size: 100ml'],
    price: '$98.00',
    quantityOptions: [1, 2, 3],
  },
];
