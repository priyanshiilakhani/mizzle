const portfolio1 = '/images/portfolio/list/01.jpg'
const portfolio2 = '/images/portfolio/list/02.jpg'
const portfolio3 = '/images/portfolio/list/03.jpg'
const portfolio4 = '/images/portfolio/list/04.jpg'
const client04 = '/images/client/04.svg'
const client02 = '/images/client/02.svg'
const client01 = '/images/client/01.svg'
const client05 = '/images/client/05.svg'

export type PortfolioListType = {
  image: string;
  clientLogo: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  link: string;
  reverse: boolean;
};

export const portfolioListData: PortfolioListType[] = [
  {
    image: portfolio2,
    clientLogo: client04,
    title: 'Bio Cosmetics',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: '2022',
    tags: ['Branding', 'Packaging', 'UI/UX design'],
    link: '/portfolio/case-study/v2',
    reverse: false,
  },
  {
    image: portfolio1,
    clientLogo: client02,
    title: 'Website Optimization for TechWave',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: '2021',
    tags: ['Branding', 'Packaging', 'UI/UX design'],
    link: '/portfolio/case-study/v2',
    reverse: true,
  },
  {
    image: portfolio3,
    clientLogo: client01,
    title: 'Cherry Studio',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: '2020',
    tags: ['Branding', 'Packaging', 'Development'],
    link: '/portfolio/case-study/v2',
    reverse: false,
  },
  {
    image: portfolio4,
    clientLogo: client05,
    title: 'Transforming Ideas into Reality',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: '2019',
    tags: ['Graphics', 'Development', 'UI/UX design'],
    link: '/portfolio/case-study/v2',
    reverse: true,
  },
];
