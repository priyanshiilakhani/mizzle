const blog1 = '/images/blog/01.jpg';
const blog2 = '/images/blog/02.jpg';
const blog3 = '/images/blog/03.jpg';

const blogImg1 = '/images/blog/4by3/01.jpg';
const blogImg2 = '/images/blog/4by3/02.jpg';
const blogImg3 = '/images/blog/4by3/03.jpg';
const blogImg4 = '/images/blog/4by3/04.jpg';
const blogImg5 = '/images/blog/4by3/05.jpg';
const blogImg6 = '/images/blog/4by3/06.jpg';
const blogImg7 = '/images/blog/4by3/07.jpg';

const avatar4 = '/images/avatar/04.jpg';
const pattern = '/images/elements/pattern.svg';

export type BlogSlideType = {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogSlideData: BlogSlideType[] = [
  {
    category: 'Marketing',
    title: 'The Evolution of Branding: Unleashing Potential',
    author: 'Frances Guerrero',
    date: 'Nov 5, 2018',
    readTime: '4 min read',
    image: blog1,
  },
  {
    category: 'Lifestyle',
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    author: 'Carolyn Ortiz',
    date: 'Nov 5, 2018',
    readTime: '4 min read',
    image: blog2,
  },
  {
    category: 'Design',
    title: 'Interactive Web Design with TailwindCSS and StackBros',
    author: 'Joan Wallace',
    date: 'Nov 5, 2018',
    readTime: '4 min read',
    image: blog3,
  },
];

export type BlogGridType = {
  type: 'blog' | 'podcast' | 'ads';
  category?: string;
  title: string;
  description?: string;
  author?: string;
  image?: string;
  tag?: string;
  subtitle?: string;
};

export const blogGridData: BlogGridType[] = [
  {
    type: 'blog',
    category: 'Technology',
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    author: 'Bryan Knight',
    image: blogImg1,
  },
  {
    type: 'blog',
    category: 'Lifestyle',
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    description:
      'By focusing on a niche, you can establish yourself as an authority and build a dedicated community.',
    author: 'Carolyn Ortiz',
    image: blogImg2,
  },
  {
    type: 'podcast',
    tag: 'ABD-05',
    title: 'Collaborating to drive innovation in the Tech industry',
    author: 'Frances Guerrero',
    image: avatar4,
  },
  {
    type: 'blog',
    category: 'Marketing',
    title: 'Effortless Web Development with Mizzle',
    description:
      'Building a successful blog takes dedication. Don’t be discouraged by slow growth in the early stages.',
    author: 'Lori Stevens',
    image: blogImg3,
  },
  {
    type: 'blog',
    category: 'Research',
    title: 'Ten questions you should answer truthfully.',
    description: 'Remember, blogging is a continuous learning process, so stay open to new ideas.',
    author: 'Louis Crawford',
    image: blogImg4,
  },
  {
    type: 'blog',
    category: 'Design',
    title: 'Mastering Responsive Web Design with TailwindCSS',
    description:
      'Focus on creating valuable content, implementing and continuously improving your blog.',
    author: 'Joan Wallace',
    image: blogImg5,
  },
  {
    type: 'ads',
    title: 'Advertisements',
    description:
      'Always wanted to become a coder? Here is a great chance for you to fulfill your dream.',
    subtitle: 'Web poster',
    image: pattern,
  },
  {
    type: 'blog',
    category: 'Marketing',
    title: '5 investment doubts you should clarify',
    description: 'Remember, blogging is a continuous learning process, so stay open to new ideas.',
    author: 'Amanda Reed',
    image: blogImg6,
  },
  {
    type: 'blog',
    category: 'Technology',
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    author: 'Bryan Knight',
    image: blogImg7,
  },
];
