const avatar1 = '/images/avatar/01.jpg';
const avatar2 = '/images/avatar/02.jpg';
const avatar3 = '/images/avatar/03.jpg';
const avatar4 = '/images/avatar/04.jpg';
const avatar5 = '/images/avatar/05.jpg';
const avatar7 = '/images/avatar/07.jpg';
const avatar8 = '/images/avatar/08.jpg';
const avatar10 = '/images/avatar/10.jpg';
const avatar11 = '/images/avatar/11.jpg';

export type StatType = {
  value: number;
  suffix: string;
  label: string;
};

export const statData: StatType[] = [
  {
    value: 15,
    suffix: 'M+',
    label: 'Total Downloads',
  },
  {
    value: 22,
    suffix: 'M+',
    label: 'Total Followers',
  },
  {
    value: 2300,
    suffix: '+',
    label: 'Total Reviews',
  },
  {
    value: 107,
    suffix: '+',
    label: 'Total Countries',
  },
];

export type PricingPlanType = {
  badge: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  buttonText: string;
};

export const pricingPlansData: PricingPlanType[] = [
  {
    badge: 'Boss mode',
    monthlyPrice: 59,
    yearlyPrice: 45,
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
      'Landing pages Web widgets',
      '24/7 dedicated Support',
    ],
    buttonText: 'Start a free 7-day trial',
  },
  {
    badge: 'Enterprise mode',
    monthlyPrice: 199,
    yearlyPrice: 175,
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
      'Landing pages Web widgets',
      '24/7 dedicated Support',
    ],
    buttonText: 'Start a free 7-day trial',
  },
];

export type TestimonialsType = {
  avatar: string;
  name: string;
  message: string;
  rating: number;
};

export const testimonialData: TestimonialsType[] = [
  {
    avatar: avatar1,
    name: 'Billy Vasquez',
    message: '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    avatar: avatar5,
    name: 'Carolyn Ortiz',
    message:
      '"The experience of using Mizzle was enjoyable and easy. Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    avatar: avatar8,
    name: 'Joan Wallace',
    message: '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    avatar: avatar2,
    name: 'Emma Watson',
    message:
      '"Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing we have just launched our 5th website! You guys rock!"',
    rating: 4.5,
  },
  {
    avatar: avatar10,
    name: 'Lori Stevens',
    message:
      '"I am really satisfied with my service. Thanks to service, we have just launched our 5th website! You guys rock!"',
    rating: 5,
  },
  {
    avatar: avatar4,
    name: 'Louis Ferguson',
    message:
      `"We have just launched our 5th website-they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock"`,
    rating: 4,
  },
  {
    avatar: avatar3,
    name: 'Larry Lawson',
    message: '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 3.5,
  },
  {
    avatar: avatar7,
    name: 'Dennis Barrett',
    message:
      `"I'm really happy with the Mizzle service. we've just launched our 5th website - they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock"`,
    rating: 5,
  },
  {
    avatar: avatar11,
    name: 'Jacqueline Miller',
    message: '"I am really satisfied with my service. You guys rock!"',
    rating: 3.5,
  },
];
