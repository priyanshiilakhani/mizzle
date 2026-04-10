export type GridType = {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: string;
    bgClass: string;
  }[];
};

export const gridData: GridType[] = [
  {
    name: 'Emma Watson',
    role: 'Founder',
    image: '/images/team/01.jpg',
    socials: [
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500',
      },
    ],
  },
  {
    name: 'Allen Smith',
    role: 'UI/UX designer',
    image: '/images/team/02.jpg',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-indigo-500',
      },
    ],
  },
  {
    name: 'Jacqueline Miller',
    role: 'Human Resource',
    image: '/images/team/03.jpg',
    socials: [
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500',
      },
      {
        icon: 'linkedin',
        bgClass: 'bg-info',
      },
    ],
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: '/images/team/04.jpg',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-blue-600',
      },
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500',
      },
    ],
  },
  {
    name: 'Frances Guerrero',
    role: 'Software Developer',
    image: '/images/team/05.jpg',
    socials: [
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500',
      },
    ],
  },
  {
    name: 'Lori Stevens',
    role: 'Graphic designer',
    image: '/images/team/06.jpg',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-blue-600',
      },
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500',
      },
    ],
  },
  {
    name: 'Samuel Bishop',
    role: 'Product designer',
    image: '/images/team/07.jpg',
    socials: [
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500',
      },
    ],
  },
  {
    name: 'Amanda Reed',
    role: 'Content writer',
    image: '/images/team/08.jpg',
    socials: [
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500',
      },
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500',
      },
    ],
  },
];

export const awardData: string[] = [
  'Honor / Unite agency / 2021',
  'Honor / Unite agency / 2020',
  'Honor / Med expert / 2020',
  'Honor / Frame digital / 2020',
  'Honor / Unite agency / 2019',
];

export const designAwardData: string[] = [
  'Website of the day / Emporia / 2020',
  'Special kudos / to ARCR / 2021',
  'Special kudos / to ARCR / 2020',
  'Special kudos / to Reformat club / 2019',
];
