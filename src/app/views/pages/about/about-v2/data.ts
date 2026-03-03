const avatar1 = '/images/avatar/01.jpg';
const avatar2 = '/images/avatar/02.jpg';
const avatar3 = '/images/avatar/03.jpg';
const avatar4 = '/images/avatar/04.jpg';
const avatar5 = '/images/avatar/05.jpg';
const avatar6 = '/images/avatar/06.jpg';
const avatar7 = '/images/avatar/07.jpg';
const avatar8 = '/images/avatar/08.jpg';
const avatar10 = '/images/avatar/10.jpg';

const usFlag = '/images/flags/us.svg';
const inFlag = '/images/flags/in.svg';

export const avatarData: string[] = [avatar1, avatar2, avatar3, avatar8, avatar7, avatar5];

export type TestimonialType = {
  icon: string;
  description: string;
  rating: number;
  image: string;
  title: string;
  role: string;
};

export const testimonialData: TestimonialType[] = [
  {
    icon: 'quote',
    description:
      'Mizzle is the perfect theme for businesses that want to create a stylish and functional website. Supposing so be resolving breakfast am or perfectly.',
    rating: 4.5,
    image: avatar4,
    title: 'Dennis Barrett',
    role: 'CEO and manager of Mizzle',
  },
  {
    icon: 'quote',
    description:
      "The best Template we've ever used - it's easy to customize and comes with all the features we need. Resolving breakfast am or perfectly.",
    rating: 4.5,
    image: avatar5,
    title: 'Jacqueline Miller',
    role: 'Ceo and manager of Blogzine',
  },
  {
    icon: 'quote',
    description:
      'StackBros helped us create a stunning website that reflects our brand perfectly. At weddings believed laughing',
    rating: 4.5,
    image: avatar6,
    title: 'Billy Vasquez',
    role: 'Ceo and manager of Blogzine',
  },
  {
    icon: 'quote',
    description:
      'I highly recommend Mizzle to anyone looking for a high-quality Template. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    rating: 4.5,
    image: avatar10,
    title: 'Lori Stevens',
    role: 'Ceo and manager of Blogzine',
  },
];

export type LocationType = {
  image: string;
  name: string;
  location: string;
  contact: string;
};

export const locationData: LocationType[] = [
  {
    image: usFlag,
    name: 'United States',
    location: '55/123 Norman street, Banking road, Sydney NSW 5000',
    contact: '469-537-2410',
  },
  {
    image: inFlag,
    name: 'India',
    location: '55/123 Norman street, Banking road, Sydney NSW 5000',
    contact: '469-537-2410',
  },
];

export type FaqType = {
  id: string;
  question: string;
  answer: string;
  isActive?: boolean;
}

export const faqData: FaqType[] = [
  {
    id: '1',
    question: 'How many items are there on this list?',
    answer: `Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.`,
    isActive: true,
  },
  {
    id: '2',
    question: 'Can you describe Mizzle in just one sentence?',
    answer: `September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
  },
  {
    id: '3',
    question: 'Can I use this theme for my client?',
    answer: `How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.`,
  },
  {
    id: '4',
    question: 'Do you offer themes in other categories?',
    answer: `But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
  },
  {
    id: '5',
    question: 'Do you offer themes in other categories?',
    answer: `But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.`,
  },
];
