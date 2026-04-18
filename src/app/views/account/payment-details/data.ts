export type PaymentType = {
  id: number;
  image: string;
  cardName: string;
  number: string;
  type: string;
  expiry: string;
  isPrimary: boolean;
};

export const paymentData: PaymentType[] = [
  {
    id: 1,
    image: '/images/elements/mastercard.svg',
    cardName: 'MasterCard',
    number: '•••• 1569',
    type: 'Checking',
    expiry: '12/26',
    isPrimary: true,
  },
  {
    id: 2,
    image: '/images/elements/visa.svg',
    cardName: 'VisaCard',
    number: '•••• 5620',
    type: 'Checking',
    expiry: '02/35',
    isPrimary: false,
  },
];

export type TransitionType = {
  id: number;
  orderId: string;
  cardImage: string;
  cardNumber: string;
  status: string;
  statusClass: string;
  amount: string;
  date: string;
};

export const transitionData: TransitionType[] = [
  {
    id: 1,
    orderId: '#23458',
    cardImage: '/images/elements/mastercard.svg',
    cardNumber: '****4568',
    status: 'Pending',
    statusClass: 'bg-warning/15 text-warning',
    amount: '$215',
    date: '16/8/2023',
  },
  {
    id: 2,
    orderId: '#23458',
    cardImage: '/images/elements/mastercard.svg',
    cardNumber: '****4568',
    status: 'Cancel',
    statusClass: 'bg-danger/15 text-danger',
    amount: '$199',
    date: '21/7/2023',
  },
  {
    id: 3,
    orderId: '#3158',
    cardImage: '/images/elements/visa.svg',
    cardNumber: '****5620',
    status: 'paid',
    statusClass: 'bg-primary/15 text-primary',
    amount: '$380',
    date: '5/7/2023',
  },
];
