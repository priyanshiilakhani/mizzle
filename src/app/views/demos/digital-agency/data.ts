const serviceImg1 = '/images/services/4by3/01.jpg';
const serviceImg2 = '/images/services/4by3/02.jpg';
const serviceImg3 = '/images/services/4by3/03.jpg';
const serviceImg4 = '/images/services/4by3/04.jpg';
const serviceImg5 = '/images/services/4by3/05.jpg';
const serviceImg6 = '/images/services/4by3/06.jpg';

const project1 = '/images/portfolio/list/02.jpg';
const project2 = '/images/portfolio/list/03.jpg';

const avatar2 = '/images/avatar/02.jpg';
const avatar4 = '/images/avatar/04.jpg';
const avatar9 = '/images/avatar/09.jpg';

const blogImg3 = '/images/blog/4by3/03.jpg';
const blogImg7 = '/images/blog/4by3/07.jpg';
const blogImg8 = '/images/blog/4by3/08.jpg';

export type ServiceType = {
  image?: string;
  title: string;
  description?: string;
  url: string;
};

export const services: ServiceType[] = [
  {
    title: 'Custom Software Development',
    description: 'We prioritize user experience, scalability, and security to ensure your...',
    image: serviceImg1,
    url: '/services/single',
  },
  {
    title: 'Web Design and Development',
    description: 'from responsive websites to e-commerce platforms.',
    image: serviceImg2,
    url: '/services/single',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Reach your target drive results with our comprehensive digital marketing.',
    image: serviceImg3,
    url: '/services/single',
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats with our cybersecurity solutions.',
    image: serviceImg4,
    url: '/services/single',
  },
  {
    title: 'IT Consulting and Support',
    description: 'Leverage our expertise to optimize your IT infrastructure and operations.',
    image: serviceImg5,
    url: '/services/single',
  },
  {
    title: 'UI/UX Design Services',
    description: 'Enhance user satisfaction and engagement with our services.',
    image: serviceImg6,
    url: '/services/single',
  },
];

export type ProjectType = {
  image: string;
  name: string;
  category?: string;
  url: string;
};

export const projects: ProjectType[] = [
  {
    name: 'Website optimization for techWave',
    category: 'Graphic design',
    image: project1,
    url: '/portfolio/case-studies/v2',
  },
  {
    name: 'Transforming ideas into reality',
    category: 'UI/UX design',
    image: project2,
    url: '/portfolio/case-studies/v2',
  },
];

export type StatisticType = {
  title: string;
  stat: number;
  prefix?: string;
  suffix?: string;
};

export const statData: StatisticType[] = [
  {
    title: 'Worldwide client',
    stat: 30,
    prefix: '>',
    suffix: 'K',
  },
  {
    title: 'Analyze business reports',
    stat: 99,
    suffix: '%',
  },
  {
    title: 'Worldwide projects',
    stat: 350,
    suffix: '+',
  },
];

export type testimonialType = {
  id: string;
  rating: number;
  title: string;
  message: string;
};

export const testimonials: testimonialType[] = [
  {
    id: 'testi-one',
    rating: 4.5,
    title: '"Transformed My Agency\'s Results"',
    message:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
  },
  {
    id: 'testi-two',
    rating: 4.5,
    title: '"Transformed My Agency\'s Results"',
    message:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
  },
  {
    id: 'testi-three',
    rating: 4.5,
     title: '"Transformed My Agency\'s Results"',
     message:
      'As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company, thanks to the user-friendly interface and the ability to connect with candidates that perfectly fit our requirements.',
  },
];

export type BlogType = {
  title: string;
  category: string;
  publishedAt: {
    date: number;
    month: string;
    year: number;
  };
  publishedBy: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
  image: string;
  url: string;
};

export const blogs: BlogType[] = [
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    category: 'Technology',
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    image: blogImg3,
    url: '/blog/single/v2',
  },
  {
    title: 'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    category: 'Research',
    publishedAt: {
      date: 12,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    image: blogImg8,
    url: '/blog/single/v2',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    category: 'Design',
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'Allen',
      lastName: 'Smith',
    },
    image: blogImg7,
    url: '/blog/single/v2',
  },
];
