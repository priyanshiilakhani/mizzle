const about01 = 'assets/images/about/01.jpg';
const about02 = 'assets/images/about/02.jpg';
const about12 = 'assets/images/about/12.jpg';
const about04 = 'assets/images/about/04.jpg';
const about14 = 'assets/images/about/14.jpg';
const about16 = 'assets/images/about/16.jpg';
const about08 = 'assets/images/about/08.jpg';
const about03 = 'assets/images/about/03.jpg';

export const sliderData = [about01, about02, about12, about04, about14, about01, about16, about08, about03];

export type CounterType = {
    icon: string;
    value: number;
    suffix: string;
    label: string;
}

export const counterData = [
  {
    icon: 'briefcase-business',
    value: 600,
    suffix: '+',
    label: 'Total Jobs',
  },
  {
    icon: 'building-2',
    value: 5468,
    label: 'Total Companies',
  },
  {
    icon: 'users',
    value: 12,
    suffix: 'K+',
    label: 'Total Candidates',
  },
  {
    icon: 'briefcase-business',
    value: 10,
    suffix: '+',
    label: 'New Jobs',
  },
];

export type WorkType = {
  icon: string;
  title: string;
  description: string;
};

export const workData: WorkType[] = [
  {
    icon: 'heart',
    title: 'Honesty',
    description: 'The implementation of multilingual support involves.',
  },
  {
    icon: 'flame',
    title: 'Passion',
    description: 'It focuses on creating an intuitive and efficient design.',
  },
  {
    icon: 'target',
    title: 'Impact',
    description: 'It ensures that users can access critical assistance whenever they need it.',
  },
  {
    icon: 'trophy',
    title: 'Recognition',
    description: 'These advanced functionalities are designed to provide users.',
  },
];

export type PositionType = {
  id: string;
  jobs: {
    category: string;
    title: string;
    link: string;
    location: string;
    type: string;
    salary: string;
  }[];
  emptyMessage?: string;
};

export const positionData: PositionType[] = [
  {
    id: 'pills-all',
    jobs: [
      {
        category: 'Information Technology',
        title: 'UI/UX and Product Designer',
        link: '/career/single',
        location: 'USA, ontario',
        type: 'San Francisco',
        salary: '$32,000',
      },
      {
        category: 'Business',
        title: 'General Office Manager',
        link: '/career/single',
        location: 'USA, New York',
        type: 'Full time',
        salary: '$41,000',
      },
      {
        category: 'Software',
        title: 'Machine Learning Specialist',
        link: '/career/single',
        location: 'Mumbai, India',
        type: 'Full time',
        salary: '$18,000',
      },
      {
        category: 'Information Technology',
        title: 'Senior Product Manager',
        link: '/career/single',
        location: 'UK, London',
        type: 'Full time',
        salary: '$29,000',
      },
    ],
  },
  {
    id: 'pills-development',
    jobs: [
      {
        category: 'Information Technology',
        title: 'UI/UX and Product Designer',
        link: '/career/single',
        location: 'USA, ontario',
        type: 'San Francisco',
        salary: '$32,000',
      },
      {
        category: 'Business',
        title: 'General Office Manager',
        link: '/career/single',
        location: 'USA, New York',
        type: 'Full time',
        salary: '$41,000',
      },
    ],
  },
  {
    id: 'pills-hr',
    jobs: [
      {
        category: 'Software',
        title: 'Machine Learning Specialist',
        link: '/career/single',
        location: 'Mumbai, India',
        type: 'Full time',
        salary: '$18,000',
      },
      {
        category: 'Information Technology',
        title: 'Senior Product Manager',
        link: '/career/single',
        location: 'UK, London',
        type: 'Full time',
        salary: '$29,000',
      },
    ],
  },
  {
    id: 'pills-marketing',
    jobs: [],
    emptyMessage: 'There are no job openings available for this role.',
  },
  {
    id: 'pills-design',
    jobs: [],
    emptyMessage: 'There are no job openings available for this role.',
  },
];
