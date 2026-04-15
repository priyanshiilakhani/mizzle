const blogImg1 = '/images/blog/4by3/01.jpg';
const blogImg2 = '/images/blog/4by3/02.jpg';
const blogImg3 = '/images/blog/4by3/03.jpg';
const blogImg4 = '/images/blog/4by3/04.jpg';
const blogImg5 = '/images/blog/4by3/05.jpg';

export const popularTagData: string[] = [
  'blog',
  'business',
  'tailwindcss',
  'data science',
  'deep learning',
  'deep learning',
  'deep learning',
];

export type SwiperBlogType = {
  image: string;
  title: string;
  author: string;
  link: string;
};

export const swiperBlogData: SwiperBlogType[] = [
  {
    image: blogImg1,
    title: 'Mastering Responsive Web Design with TailwindCSS',
    author: 'Carolyn Ortiz',
    link: '/blog/single/v1',
  },
  {
    image: blogImg2,
    title: 'TailwindCSS Mastery: Designing Stunning Websites',
    author: 'Dennis Barrett',
    link: '/blog/single/v2',
  },
  {
    image: blogImg3,
    title: 'Interactive Web Design with TailwindCSS and StackBros',
    author: 'Carolyn Ortiz',
    link: '/blog/single/v1',
  },
  {
    image: blogImg4,
    title: 'Effortless Web Development with Mizzle',
    author: 'Carolyn Ortiz',
    link: '/blog/single/v2',
  },
  {
    image: blogImg5,
    title: 'Sleek and Responsive - Designing with TailwindCSS and Mizzle',
    author: 'Carolyn Ortiz',
    link: '/blog/single/v2',
  },
];
