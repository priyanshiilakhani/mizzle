export type GridType = {
  name: string;
  role: string;
  image: string;
  className?: string;
  socials: {
    icon: string;
    bgClass: string;
    className?: string;
  }[];
};

export const gridData: GridType[] = [
  {
    name: 'Emma Watson',
    role: 'Founder',
    image: 'assets/images/team/01.jpg',
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
    image: 'assets/images/team/02.jpg',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-indigo-500',
        className: 'fill-white',
      },
    ],
  },
  {
    name: 'Jacqueline Miller',
    role: 'Human Resource',
    className: 'flex items-center gap-2.5',
    image: 'assets/images/team/03.jpg',
    socials: [
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500 mb-0',
        className: 'fill-white',
      },
      {
        icon: 'linkedin',
        bgClass: 'bg-info',
        className: 'fill-white',
      },
    ],
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: 'assets/images/team/04.jpg',
    className: 'flex items-center gap-2.5',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-blue-600 mb-0',
        className: 'fill-white',
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
    image: 'assets/images/team/05.jpg',
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
    image: 'assets/images/team/06.jpg',
    className: 'flex items-center gap-2.5',
    socials: [
      {
        icon: 'facebook',
        bgClass: 'bg-blue-600 mb-0',
        className: 'fill-white',
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
    image: 'assets/images/team/07.jpg',
    socials: [
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500',
        className: 'fill-white',
      },
    ],
  },
  {
    name: 'Amanda Reed',
    role: 'Content writer',
    image: 'assets/images/team/08.jpg',
    className: 'flex items-center gap-2.5',
    socials: [
      {
        icon: 'instagram',
        bgClass: 'bg-linear-to-tr from-purple-600 to-orange-500 mb-0',
      },
      {
        icon: 'twitter',
        bgClass: 'bg-sky-500',
        className: 'fill-white',
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
