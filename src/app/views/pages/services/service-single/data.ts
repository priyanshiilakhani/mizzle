const avatar11 = '/images/avatar/11.jpg';
const avatar8 = '/images/avatar/08.jpg';
const avatar5 = '/images/avatar/05.jpg';

export const benefitsData = [
  "Reach a global audience and expand your brand's presence",
  'Real-time tracking and data-driven decision-making',
  'Improved Customer Engagement',
  'Drive conversions and boost revenue',
  'Create a loyal customer community',
  'Protect customer data and privacy',
];

export type StepType = {
  stepNumber: string;
  title: string;
  description: string;
};

export const stepData: StepType[] = [
  {
    stepNumber: '01',
    title: 'Understanding Client Goals',
    description:
      'The process begins with a thorough consultation with the client to understand their business goals.',
  },
  {
    stepNumber: '02',
    title: 'Market Research',
    description: `They also analyze the client's current online presence and marketing efforts.`,
  },
  {
    stepNumber: '03',
    title: 'Search Engine Optimization (SEO)',
    description: `For visibility, SEO strategies are employed to improve the client's website's search engine rankings.`,
  },
  {
    stepNumber: '04',
    title: 'Adapting to Industry Changes',
    description: `Digital marketing agencies stay up-to-date with industry trends and algorithm changes.`,
  },
];

export type pricingPlanType = {
  duration: string;
  price: number;
  features: string[];
};

export const pricingData: pricingPlanType[] = [
  {
    duration: 'Monthly',
    price: 199,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
  {
    duration: 'Annual',
    price: 159,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
];

export type testimonialType = {
  image: string;
  name: string;
  description: string;
};

export const testimonialData: testimonialType[] = [
  {
    image: avatar11,
    name: 'Emma Watson',
    description: `"Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."`,
  },
  {
    image: avatar8,
    name: 'Louis Ferguson',
    description: `"Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed."`,
  },
  {
    image: avatar5,
    name: 'Jacqueline Miller',
    description: `"Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."`,
  },
];
