const masonry01 = '/images/portfolio/masonry/01.jpg'
const masonry02 = '/images/portfolio/masonry/02.jpg';
const masonry03 = '/images/portfolio/masonry/03.jpg';
const masonry04 = '/images/portfolio/masonry/04.jpg'
const masonry05 = '/images/portfolio/masonry/05.jpg'
const masonry06 = '/images/portfolio/masonry/06.jpg';
const masonry07 = '/images/portfolio/masonry/07.jpg';
const masonry08 = '/images/portfolio/masonry/08.jpg';
const masonry09 = '/images/portfolio/masonry/09.jpg'


export type PortfolioType = {
  image: string;
  title: string;
  category: string;
  link: string;
  groups: string[];
};

export const portfolioData: PortfolioType[] = [
  {
    image: masonry01,
    title: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    link: 'portfolio/case-studies/v1',
    groups: ['marketing', 'business', 'brand'],
  },
  {
    image: masonry04,
    title: 'ElevateTech Redesign',
    category: 'Brand design',
    link: 'portfolio-case-studies-v2.html',
    groups: ['brand', 'ui'],
  },
  {
    image: masonry09,
    title: 'UI/UX Enhancement for SnapMediae',
    category: 'UI/UX design',
    link: 'portfolio/case-studies/v1',
    groups: ['ui'],
  },
  {
    image: masonry05,
    title: 'Sustainability Initiative',
    category: 'Business dev',
    link: 'portfolio-case-studies-v2.html',
    groups: ['marketing', 'design'],
  },
  {
    image: masonry02,
    title: 'User-Centric Redesign',
    category: 'Web design',
    link: 'portfolio-case-studies-v2.html',
    groups: ['design', 'business', 'brand'],
  },
  {
    image: masonry07,
    title: 'Website Optimization for TechWave',
    category: 'Web design',
    link: 'portfolio/case-studies/v1',
    groups: ['design', 'business', 'brand'],
  },
  {
    image: masonry06,
    title: 'E-commerce Expansion',
    category: 'Digital Marketing',
    link: 'portfolio/case-studies/v1',
    groups: ['design', 'business'],
  },
  {
    image: masonry08,
    title: 'A Triumph of Software',
    category: 'Digital Marketing',
    link: 'portfolio/case-studies/v1',
    groups: ['design', 'business'],
  },
  {
    image: masonry03,
    title: 'Social Media Engagement',
    category: 'UI/UX design',
    link: 'portfolio/case-studies/v1',
    groups: ['design', 'ui'],
  },
];
