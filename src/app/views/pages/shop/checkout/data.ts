const visa = 'assets/images/elements/visa.svg';
const mastercard = 'assets/images/elements/mastercard.svg';
const paypal = 'assets/images/elements/paypal.svg';
const shop2 = 'assets/images/shop/02.png';
const shop8 = 'assets/images/shop/08.png';

export type PaymentType = {
  title: string;
  subTitle: string;
  image?: string;
  icon?: string;
};

export const paymentData: PaymentType[] = [
  {
    title: 'Visa ending in 1245',
    subTitle: 'Expiry 08/2024',
    image: visa,
  },
  {
    title: 'Mastercard ending in 1245',
    subTitle: 'Expiry 06/2024',
    image: mastercard,
  },
  {
    title: 'Pay using PayPal',
    subTitle: 'Fast, easy and secure',
    image: paypal,
  },
  {
    title: 'Cash on delivery',
    subTitle: `You have to pay <b>$25</b> for delivery.`,
    icon: 'truck',
  },
];

export type OrderItemType = {
  image: string;
  title: string;
  itemNo: string;
  color?: string;
  size: string;
};

export const orderItemData: OrderItemType[] = [
  {
    image: shop2,
    title: 'Round neck cotton t-shirt',
    itemNo: '#2458644',
    color: 'Midblue',
    size: 'L',
  },
  {
    image: shop8,
    title: 'Mizz dunk low shoes',
    itemNo: '#2458644',
    size: '42',
  },
];
