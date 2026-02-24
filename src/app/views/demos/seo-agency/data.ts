const listImg1 = '/images/portfolio/list/01.jpg';
const listImg2 = '/images/portfolio/list/02.jpg';
const listImg3 = '/images/portfolio/list/03.jpg';

const client2 = '/images/client/client-white/02.svg';
const client3 = '/images/client/client-white/03.svg';
const client4 = '/images/client/client-white/04.svg';

const avatar4 = '/images/avatar/04.jpg';
const avatar5 = '/images/avatar/05.jpg';
const avatar6 = '/images/avatar/06.jpg';
const avatar9 = '/images/avatar/09.jpg';
const avatar10 = '/images/avatar/10.jpg';
const avatar11 = '/images/avatar/11.jpg';

export type TestimonialType = {
  user: { firstName: string; lastName: string; role: string };
  comment: string;
};

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      role: 'Product designer',
    },
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
  },
  {
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder',
    },
    comment:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
  {
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer',
    },
    comment:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
  },
];

export type CaseStudyType = {
  company: {
    image: string;
  };
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

export const caseStudies: CaseStudyType[] = [
  {
    company: {
      image: client2,
    },
    title: 'Website Optimization for TechWave',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'Packaging', 'Development'],
    image: listImg2,
    url: '/portfolio/case-studies/v2',
  },
  {
    company: {
      image: client3,
    },
    title: 'Transforming Ideas into Reality',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['UI/UX design', 'Research'],
    image: listImg1,
    url: '/portfolio/case-studies/v2',
  },
  {
    company: {
      image: client4,
    },
    title: 'Bio Cosmetics',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'UI/UX design'],
    image: listImg3,
    url: '/portfolio/case-studies/v2',
  },
];

export type StepType = {
  stepNumber?: string;
  icon?: string;
  title: string;
  description: string;
};

export const approachSteps: StepType[] = [
  {
    stepNumber: '01',
    title: 'Business understanding',
    description:
      'We begin by gaining a deep understanding of your business, industry, and target audience.',
  },
  {
    stepNumber: '02',
    title: 'Keyword research',
    description:
      'Our approach starts with comprehensive keyword research potential customers are searching for.',
  },
  {
    stepNumber: '03',
    title: 'Technical optimization',
    description:
      'We conduct a thorough technical audit of your website to identify any issues that may be hindering its.',
  },
  {
    stepNumber: '04',
    title: 'Content strategy',
    description:
      'Content is king in the world of SEO. We develop a strategic content plan that aligns with your.',
  },
  {
    stepNumber: '05',
    title: 'Transparent Reporting',
    description:
      'We provide regular reports and updates on the progress of your SEO campaigns giving you full.',
  },
];

export type MemberType = {
  avatar: string;
  firstName: string;
  lastName: string;
  role?: string;
  socialLinks: { icon: string; url?: string }[];
};

export const teamMembers: MemberType[] = [
  {
    firstName: 'Samuel',
    lastName: 'Bishop',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'UI/UX Designer',
    avatar: avatar4,
  },
  {
    firstName: 'Judy',
    lastName: 'Nguyen',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'Web Designer',
    avatar: avatar11,
  },
  {
    firstName: 'Louis',
    lastName: 'Ferguson',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'Web Developer',
    avatar: avatar6,
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'CEO & Founder',
    avatar: avatar9,
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'CEO & Founder',
    avatar: avatar5,
  },
  {
    firstName: 'Bryan',
    lastName: 'Knight',
    socialLinks: [
      {
        icon: 'facebook',
        url: '',
      },
      {
        icon: 'instagram',
        url: '',
      },
      {
        icon: 'twitter',
        url: '',
      },
    ],
    role: 'Product Designer',
    avatar: avatar10,
  },
];
