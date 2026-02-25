const Client1 = '/images/client/01.svg';
const Client2 = '/images/client/02.svg';
const Client3 = '/images/client/03.svg';
const Client4 = '/images/client/04.svg';
const Client5 = '/images/client/05.svg';
const Client7 = '/images/client/07.svg';

export const clientData: string[] = [Client1, Client2, Client3, Client4, Client5, Client7];

export type StatType = {
  value: number;
  suffix: string;
  label: string;
};

export const statsData: StatType[] = [
  {
    value: 150,
    suffix: '+',
    label: 'Project management in a day',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Hour save for our customer',
  },
  {
    value: 10,
    suffix: 'M+',
    label: 'Positive user reviews',
  },
  {
    value: 600,
    suffix: '+',
    label: 'Happy customers',
  },
];

export type FaqType = {
  id: number;
  title: string;
  content: string;
  expanded: boolean;
};

export const faqData: FaqType[] = [
  {
    id: 1,
    title: 'Explaining the value of design',
    content: `It's the thoughtful arrangement of elements that not only enhances visual appeal but
    also improves functionality, usability, and user experience. Effective design
    communicates your brand's identity, cultivates trust, and can significantly impact
    conversion rates and customer loyalty.`,
    expanded: true,
  },
  {
    id: 2,
    title: 'Discover resources for color-accessible',
    content: `We provide a range of tools, guides, and best practices to help you create designs,
    websites, and content that are inclusive and accessible to all individuals,
    regardless of their visual abilities.`,
    expanded: false,
  },
  {
    id: 3,
    title: 'Checking interface contrast for accessibility standards',
    content: `This crucial process ensures that content is easily readable and perceivable by
    individuals with varying degrees of visual impairment. By adhering to accessibility
    standards, you create a more inclusive and user-friendly experience for all users,
    regardless of their visual abilities, and contribute to a more accessible digital
    environment.`,
    expanded: false,
  },
  {
    id: 4,
    title: 'Checking accessibility on browsers',
    content: `By evaluating how your digital content and features perform across different
    browsers, you can identify potential accessibility issues and make necessary
    adjustments to provide a seamless and accessible online experience for users
    regardless of their choice of browser.`,
    expanded: false,
  },
];

export type PricingType = {
  title: string;
  price: number;
  type: string;
  description: string;
  featuresTitle: string;
  features: string[];
};

export const pricingData: PricingType[] = [
  {
    title: 'Basic Plan',
    price: 25,
    type: 'light',
    description: 'Basic feature for up to 10 users',
    featuresTitle: 'Everything in basic plan',
    features: [
      'Access to basic feature',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each year',
      'Basic chat and email support',
      'Ongoing best practices and reviews',
    ],
  },
  {
    title: 'Business Plan',
    price: 50,
    type: 'dark',
    description: 'Basic feature for up to 10 users',
    featuresTitle: 'Everything in basic plan',
    features: [
      'Access to basic feature',
      'Basic reporting and analytics',
      'Up to 10 individual users',
      '20GB individual data each year',
      'Basic chat and email support',
      'Ongoing best practices and reviews',
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 85,
    type: 'light',
    description: 'Basic feature for up to 10 users',
    featuresTitle: 'Everything in business and',
    features: [
      'Advanced custom field',
      'Audit log and data history',
      'Ultimate individual users',
      '60GB individual data each year',
      'Basic chat and email support',
      'Ongoing best practices and reviews',
    ],
  },
];

export type BlogType = {
  title: string;
  author: string;
  date: string;
  link: string;
};

export const blogData: BlogType[] = [
  {
    title: 'TailwindCSS Made Easy - Customizing Your HTML theme Like a Pro',
    author: 'Jacqueline Miller',
    date: 'April 08, 2023',
    link: '/blog/single/v1',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    author: 'Allen Smith',
    date: 'April 13, 2023',
    link: '/blog/single/v1',
  },
  {
    title: 'Mastering HTML Website Templates - Unleash Your Creativity with TailwindCSS',
    author: 'Jacqueline Miller',
    date: 'April 15, 2023',
    link: '/blog/single/v1',
  },
];