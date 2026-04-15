const blog1 = '/images/blog/4by4/01.jpg';
const blog2 = '/images/blog/4by4/02.jpg';
const blog3 = '/images/blog/4by4/03.jpg';
const blog4 = '/images/blog/4by4/04.jpg';
const blog5 = '/images/blog/4by4/05.jpg';
const blog6 = '/images/blog/4by4/06.jpg';
const blog7 = '/images/blog/4by4/07.jpg';
const blog8 = '/images/blog/4by4/08.jpg';
const blog9 = '/images/blog/4by4/09.jpg';
const blog10 = '/images/blog/4by4/10.jpg';

export type CategorySlideType = {
  image: string;
  title: string;
};

export const categorySlideData: CategorySlideType[] = [
  {
    image: blog1,
    title: 'Lifestyle',
  },
  {
    image: blog2,
    title: 'Technology',
  },
  {
    image: blog3,
    title: 'Design',
  },
  {
    image: blog4,
    title: 'Marketing',
  },
  {
    image: blog5,
    title: 'Research',
  },
];
export type BlogListType = {
  image: string;
  category: string;
  title: string;
  author: string;
  link: string;
};

export const blogListData: BlogListType[] = [
  {
    image: blog6,
    category: 'Technology',
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    author: 'Carolyn Ortiz',
    link: '/blog/single/v1',
  },
  {
    image: blog7,
    category: 'Lifestyle',
    title: '5 investment doubts you should clarify',
    author: 'Amanda Reed',
    link: '/blog/single/v1',
  },
  {
    image: blog8,
    category: 'Design',
    title: 'Mastering Responsive Web Design with TailwindCSS',
    author: 'Joan Wallace',
    link: '/blog/single/v1',
  },
  {
    image: blog9,
    category: 'Marketing',
    title: 'Effortless Web Development with Mizzle',
    author: 'Lori Stevens',
    link: '/blog/single/v1',
  },
  {
    image: blog10,
    category: 'Research',
    title: 'Ten questions you should answer truthfully.',
    author: 'Louis Crawford',
    link: '/blog/single/v1',
  },
];

export type SocialLinkType = {
  icon: string;
  className: string;
  iconClassName: string;
};

export const socialLinkData: SocialLinkType[] = [
  {
    icon: 'facebook',
    className: 'bg-indigo-400 hover:bg-indigo-500',
    iconClassName: 'fill-white text-white',
  },
  {
    icon: 'instagram',
    className: 'bg-pink-400 hover:bg-pink-500',
    iconClassName: 'text-white',
  },
  {
    icon: 'twitter',
    className: 'bg-sky-400 hover:bg-sky-500',
    iconClassName: 'fill-white text-white',
  },
  {
    icon: 'linkedin',
    className: 'bg-indigo-600 hover:bg-indigo-700',
    iconClassName: 'fill-white text-white',
  },
  {
    icon: 'youtube',
    className: 'bg-danger-hover hover:bg-danger',
    iconClassName: 'text-white',
  },
];


export const tagData :string[] = [
  'blog',
  'business',
  'tailwindcss',
  'data science',
  'deep learning',
  'Adventure',
  'Community',
  'Tutorials',
  'Interview',
  'Photography',
  'Classic'
];