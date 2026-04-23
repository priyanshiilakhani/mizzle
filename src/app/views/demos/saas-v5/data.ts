const client1 = 'assets/images/client/01.svg';
const client2 = 'assets/images/client/02.svg';
const client3 = 'assets/images/client/03.svg';
const client4 = 'assets/images/client/04.svg';
const client5 = 'assets/images/client/05.svg';
const client6 = 'assets/images/client/06.svg';
const client7 = 'assets/images/client/07.svg';

export const clientData: string[] = [
  client3,
  client7,
  client3,
  client5,
  client4,
  client1,
  client2,
  client3,
  client6,
];

export const pricingData: string[] = [
  'Up to 05 users monthly',
  'Free 5 host & domain',
  'Google Docs style editors',
  'Support for 30+ languages',
  '24/7 Dedicated Support',
];

export type BlogType = {
  type?: 'blog' | 'ad';
  category?: string;
  image?: string;
  title: string;
  author?: string;
  initials?: string;
  company?: string;
};

export const blogData: BlogType[] = [
  {
    type: 'blog',
    category: 'Technology',
    image: 'assets/images/blog/4by3/01.jpg',
    title: '10 things you need to know about Mizzle',
    author: 'By Bryan Knight',
  },
  {
    type: 'ad',
    title: 'Always wanted to become a coder? Here is a great chance for you to fulfill your dream.',
    initials: 'WP',
    company: 'Web poster',
  },
  {
    type: 'blog',
    category: 'Marketing',
    image: 'assets/images/blog/4by3/06.jpg',
    title: '5 investment doubts you should clarify',
    author: 'by Amanda Reed',
  },
  {
    type: 'blog',
    category: 'Technology',
    image: 'assets/images/blog/4by3/07.jpg',
    title: '10 things you need to know about Mizzle',
    author: 'By Bryan Knight',
  },
];