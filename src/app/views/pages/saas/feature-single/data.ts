const client5 = '/images/client/05.svg';
const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client6 = '/images/client/06.svg';
const client7 = '/images/client/07.svg';

const saas10 = '/images/elements/saas-decoration/10.png';
const saas11 = '/images/elements/saas-decoration/11.png';
const saas12 = '/images/elements/saas-decoration/12.png';

export const clientData: string[] = [client5, client1, client2, client3, client4, client6, client7];

export type FeatureType = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export const featuresData: FeatureType[] = [
  {
    title: 'Comprehensive Data Segmentation',
    description:
      'Dive deep into your data. Explore our comprehensive segmentation capabilities, allowing you to analyze specific subsets of your data for precise insights.',
    image: saas10,
  },
  {
    title: 'Customization to Fit Your Needs',
    description:
      'Tailor your data analytics experience. Discover how our tool can be customized to meet your unique reporting and analysis requirements.',
    image: saas11,
    reverse: true,
  },
  {
    title: 'Data Collaboration Made Easy',
    description:
      'Collaborate seamlessly with your team. Our tool facilitates data sharing, commenting, and collaborative reporting, so you can work together effectively.',
    image: saas12,
  },
];

export type FaqType = {
  question: string
  answer: string
}

export const faqData: FaqType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.',
  },
  {
    question: 'Can you describe Mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
]
