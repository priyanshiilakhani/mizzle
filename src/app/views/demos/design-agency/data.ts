const webDesign = '/images/services/icons/web-design.svg';
const brandDesign = '/images/services/icons/brand-design.svg';
const graphicDesign = '/images/services/icons/graphic-design.svg';
const socialMedia = '/images/services/icons/social-media.svg';
const motionGraphics = '/images/services/icons/motion-graphics.svg';
const img1 = '/images/portfolio/3by4/01.jpg';
const img2 = '/images/portfolio/3by4/02.jpg';
const img3 = '/images/portfolio/3by4/03.jpg';
const img4 = '/images/portfolio/3by4/04.jpg';
const img5 = '/images/portfolio/3by4/05.jpg';
const img6 = '/images/portfolio/3by4/06.jpg';
const avatar4 = '/images/avatar/04.jpg';
const avatar9 = '/images/avatar/09.jpg';
const avatar11 = '/images/avatar/11.jpg';
const blogImg1 = '/images/blog/4by3/01.jpg';
const blogImg2 = '/images/blog/4by3/02.jpg';

export type ServicesType = {
  image: string;
  title: string;
  description: string;
};

export const servicesData: ServicesType[] = [
  {
    image: webDesign,
    title: 'Web Development',
    description:
      'Our expert developers ensure seamless functionality and optimal performance for a user-friendly experience across all devices.',
  },
  {
    image: brandDesign,
    title: 'Brand Identity',
    description:
      'Make a lasting impression with a unique brand identity and logo design crafted to reflect your values and resonate with your target market.',
  },
  {
    image: graphicDesign,
    title: 'Graphic Design',
    description:
      'From eye-catching graphics to captivating illustrations, our talented designers bring your ideas to life in stunning visual creations.',
  },
  {
    image: socialMedia,
    title: 'Social Media Graphics',
    description:
      'Our social media design services help you create visually appealing posts and ads that connect with your audience and drive results.',
  },
  {
    image: motionGraphics,
    title: 'Motion Graphics',
    description:
      'Bring your brand to life with dynamic motion graphics and animations that capture attention and convey your message in an engaging way.',
  },
];

export type ProjectType = {
  image: string;
  title: string;
  link: string;
};

export const projectData: ProjectType[] = [
  {
    image: img1,
    title: 'Sustainability Initiative',
    link: '/portfolio/case-studies/v2',
  },
  {
    image: img6,
    title: 'Digital Delight',
    link: '/portfolio/case-studies/v2',
  },
  {
    image: img4,
    title: 'Mobile Magic',
    link: '/portfolio/case-studies/v2',
  },
  {
    image: img3,
    title: 'Social Media Brilliance',
    link: '/portfolio/case-studies/v2',
  },
  {
    image: img5,
    title: 'Motion Marvels',
    link: '/portfolio/case-studies/v2',
  },
  {
    image: img2,
    title: 'Innovation Unleashed',
    link: '/portfolio/case-studies/v2',
  },
];

export type TestimonialType = {
  user: {
    image: string;
    name: string;
    role: string;
  };
  comment: string;
  rating: number;
};

export const testimonialData: TestimonialType[] = [
  {
    user: {
      image: avatar11,
      name: 'Emma Watson',
      role: 'Co-founder of blogzine',
    },
    comment:
      "We've partnered with Mizzle on multiple projects, and each time, they've delivered exceptional results. Their team goes above and beyond to understand our goals and deliver designs that resonate with our audience.",
    rating: 4.5,
  },
  {
    user: {
      image: avatar4,
      name: 'Louis Ferguson',
      role: 'Web Developer',
    },
    comment:
      "It took our startup's branding to the next level with their exceptional design skills. They understood our vision and delivered a brand identity that perfectly captures our ethos. ",
    rating: 4.5,
  },
  {
    user: {
      image: avatar9,
      name: 'Samuel Bishop',
      role: 'Product designer',
    },
    comment:
      "Their team brings a level of creativity and innovation that's hard to find elsewhere. They're not just designers, they're strategic partners who are invested in the success of our projects. We look forward to continuing our partnership.",
    rating: 4.5,
  },
];

export type StatType = {
  title: string;
  value: number;
  suffix?: string;
  description: string;
};

export const statData: StatType[] = [
  {
    title: 'Brand strategy',
    value: 75,
    suffix: '%',
    description: "Our approach to brand strategy begins with company's goals.",
  },
  {
    title: 'Categories',
    value: 220,
    suffix: '+',
    description: 'An In-depth Analysis of Marketplace Users in the Year 2024',
  },
  {
    title: 'Projects',
    value: 180,
    suffix: '+',
    description: 'Successfully finished projects with creativity.',
  },
  {
    title: 'Publishing',
    value: 1045,
    description: 'Highlighting Impactful Engagement and User Involvement',
  },
];

export type BlogType = {
  image: string;
  title: string;
  author: string;
  link: string;
};

export const blogData: BlogType[] = [
  {
    image: blogImg1,
    title: 'Mastering Responsive Web Design with TailwindCSS',
    author: 'Jacqueline Miller',
    link: '/blog/single/v1',
  },
  {
    image: blogImg2,
    title: 'TailwindCSS Mastery: Designing Stunning Websites',
    author: 'Dennis Barrett',
    link: '/blog/single/v1',
  }
];