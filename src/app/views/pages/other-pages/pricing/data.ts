const client05 = '/images/client/05.svg';
const ciient04 = '/images/client/04.svg';
const client01 = '/images/client/01.svg';
const client02 = '/images/client/02.svg';
const client03 = '/images/client/03.svg';
const client06 = '/images/client/06.svg';

export type PricingFeature = {
  text: string;
}

export type PricingPlanType = {
  title: string;
  icon: string;
  priceMin: number;
  priceMax: number;
  priceLabel: string;
  description: string;
  highlight?: boolean;
  badge?: string;
  buttonClass: string;
  features: PricingFeature[];
}

export const pricingData: PricingPlanType[] = [
  {
    title: 'Basic plan',
    icon: 'zap',
    priceMin: 25,
    priceMax: 20,
    priceLabel: 'month',
    description: 'Basic feature for up to 10 users',
    buttonClass: 'bg-dark hover:bg-dark-hover text-white',
    features: [
      { text: 'Up to 05 users monthly' },
      { text: 'Free 5 host domain' },
      { text: 'Google docs style editors' },
      { text: 'Support for 30+ languages' }
    ]
  },
  {
    title: 'Basic plan',
    icon: 'rocket',
    priceMin: 59,
    priceMax: 45,
    priceLabel: 'month',
    description: 'Basic feature for up to 10 users',
    highlight: true,
    badge: 'Most popular',
    buttonClass: 'bg-primary hover:bg-primary-hover text-white',
    features: [
      { text: 'Up to 05 users monthly' },
      { text: 'Free 5 host domain' },
      { text: 'Google docs style editors' },
      { text: 'Support for 30+ languages' },
      { text: 'Landing pages Web widgets' },
      { text: 'Landing pages Web widgets' },
      { text: '24/7 dedicated Support' }
    ]
  },
  {
    title: 'Enterprise plan',
    icon: 'send',
    priceMin: 199,
    priceMax: 145,
    priceLabel: 'month',
    description: 'Basic feature for up to 10 users',
    buttonClass: 'bg-dark hover:bg-dark-hover text-white',
    features: [
      { text: 'Up to 05 users monthly' },
      { text: 'Free 5 host domain' },
      { text: 'Google docs style editors' },
      { text: 'Support for 30+ languages' }
    ]
  }
];

export type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export const featureData: FeatureType[] = [
  {
    icon: 'clock',
    title: 'Get started in a minutes',
    description: `We've made it effortless so you can focus on what matters most`,
  },
  {
    icon: 'chart-line',
    title: 'Optimize your revenue',
    description: `Experience power of revenue optimization to heights of success.`,
  },
  {
    icon: 'headset',
    title: '24/7 customer supports',
    description: `Our dedicated support team is your inquiries around the clock.`,
  },
];


export const pricing2Data = [
  {
    title: 'Storage space',
    values: ['40GB', '60GB', 'Unlimited'],
  },
  {
    title: 'Cloud connected',
    values: ['Yes', 'Yes', 'Yes'],
  },
  {
    title: 'Coding tools',
    values: [
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Advance debugging',
    values: [
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Mobile apps',
    values: [
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Web tools',
    values: [
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Version control',
    values: [
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-check', type: 'success' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Security',
    values: [
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
  {
    title: 'Team access',
    values: [
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-x', type: 'danger' },
      { icon: 'circle-check', type: 'success' },
    ],
  },
];

export const sliderData = [client05, ciient04, client01, client02, client03, client06];

export type faqsType = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
};

export const faqsData: faqsType[] = [
  {
    id: 'heading-1',
    question: 'How many items are there on this list?',
    answer: `Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.`,
    isOpen: true,
  },
  {
    id: 'heading-2',
    question: 'Can you describe Mizzle in just one sentence?',
    answer: `September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
    isOpen: false,
  },
  {
    id: 'heading-3',
    question: 'Can I use this theme for my client?',
    answer: `How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.`,
    isOpen: false,
  },
  {
    id: 'heading-4',
    question: 'Do you offer themes in other categories?',
    answer: `But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
    isOpen: false,
  },
  {
    id: 'heading-5',
    question: 'Do you offer themes in other categories?',
    answer: `But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
    isOpen: false,
  },
];
