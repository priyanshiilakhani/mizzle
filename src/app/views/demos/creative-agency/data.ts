import { credits } from '@/app/common/constants';

const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client6 = '/images/client/06.svg';

const portfolioImg1 = '/images/portfolio/masonry/01.jpg';
const portfolioImg2 = '/images/portfolio/masonry/02.jpg';
const portfolioImg3 = '/images/portfolio/masonry/03.jpg';
const portfolioImg4 = '/images/portfolio/masonry/04.jpg';
const portfolioImg5 = '/images/portfolio/masonry/05.jpg';
const portfolioImg6 = '/images/portfolio/masonry/06.jpg';

const avatar5 = '/images/avatar/05.jpg';
const avatar7 = '/images/avatar/07.jpg';

const blogImg1 = '/images/blog/4by3/01.jpg';
const blogImg2 = '/images/blog/4by3/02.jpg';
const blogImg3 = '/images/blog/4by3/03.jpg';
const blogImg4 = '/images/blog/4by3/04.jpg';
const blogImg5 = '/images/blog/4by3/05.jpg';

export const clientsData: string[] = [
 client1,client2,client3,client4
];

export type RecentProjectType = {
  name: string;
  category: string;
  categoryClass: string;
  image: string;
  url: string;
};

export const projectData: RecentProjectType[] = [
  {
    name: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    categoryClass: 'marketing business brand',
    image: portfolioImg1,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'ElevateTech Redesign',
    category: 'Brand design',
    categoryClass: 'brand ui',
    image: portfolioImg4,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'User-Centric Redesign',
    category: 'Web design',
    categoryClass: 'business design brand',
    image: portfolioImg2,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'E-commerce Expansion',
    category: 'Digital Marketing',
    categoryClass: 'business design',
    image: portfolioImg6,
    url: '/portfolio/case-studies/v1',
  },
  {
    name: 'Sustainability Initiative',
    category: 'Business dev',
    categoryClass: 'design marketing',
    image: portfolioImg5,
    url: '/portfolio/case-studies/v1',
  },

  {
    name: 'Social Media Engagement',
    category: 'UI/UX design',
    categoryClass: 'ui',
    image: portfolioImg3,
    url: '/portfolio/case-studies/v1',
  },
];

export type TestimonialType = {
  comment: string;
  user: {
    avatar: string;
    company: {
      name: string;
      image: string;
    };
    role: string;
    firstName: string;
    lastName: string;
  };
};

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Your assistance has been incredibly helpful. I appreciate the prompt and insightful responses, which have made my task much easier. Thank you for the great support',
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client6,
      },
      role: 'Ceo and manager',
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
  },
  {
    comment:
      'It consistently delivers accurate and well-crafted responses, saving me a lot of time and effort. Thank you for this invaluable resource!',
    user: {
      avatar: avatar7,
      company: {
        name: 'Blogzine',
        image: client4,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client2,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
];

export type BlogType = {
  title: string;
  publishedBy: {
    firstName: string;
    lastName: string;
  };
  image: string;
  url: string;
};

export const blogData: BlogType[] = [
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    image: blogImg1,
    url: '/blog/single/v1',
  },
  {
    title: 'Bootstrap Mastery: Designing Stunning Websites',
    publishedBy: {
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
    image: blogImg2,
    url: '/blog/single/v1',
  },
  {
    title: 'Interactive Web Design with Bootstrap and ' + credits.name,
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg3,
    url: '/blog/single/v1',
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg4,
    url: '/blog/single/v1',
  },
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg5,
    url: '/blog/single/v1',
  },
];