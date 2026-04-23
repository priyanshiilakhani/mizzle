const client03 = 'assets/images/client/client-white/03.svg';
const client04 = 'assets/images/client/client-white/04.svg';
const client01 = 'assets/images/client/client-white/01.svg';
const portfolio03 = 'assets/images/portfolio/showcase/03.jpg';
const portfolio02 = 'assets/images/portfolio/showcase/02.jpg';
const portfolio05 = 'assets/images/portfolio/showcase/05.jpg';

export type WorkType = {
  logo: string;
  image: string;
  title: string;
  category: string;
  link: string;
};

export const workData: WorkType[] = [
  {
    logo: client03,
    image: portfolio03,
    title: 'Brushstrokes and Beyond',
    category: 'UI/UX design',
    link: '/portfolio/case-study/v2',
  },
  {
    logo: client04,
    image: portfolio02,
    title: 'Ceremony Worthy of Time',
    category: 'Web design',
    link: '/portfolio/case-study/v1',
  },
  {
    logo: client01,
    image: portfolio05,
    title: 'The Art of Storytelling',
    category: 'Graphics design',
    link: '/portfolio/case-study/v2',
  },
];
