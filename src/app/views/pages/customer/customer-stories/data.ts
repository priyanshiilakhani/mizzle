const stories1 = 'assets/images/stories/01.jpg';
const stories3 = 'assets/images/stories/03.jpg';
const stories4 = 'assets/images/stories/04.jpg';
const client2 = 'assets/images/client/02.svg';
const client3 = 'assets/images/client/03.svg';
const client4 = 'assets/images/client/04.svg';
const client5 = 'assets/images/client/05.svg';
const client6 = 'assets/images/client/06.svg';
const avatar3 = 'assets/images/avatar/03.jpg';
const avatar5 = 'assets/images/avatar/05.jpg';
const avatar7 = 'assets/images/avatar/07.jpg';

export type reviewType = {
  image: string;
  clientImage: string;
  title: string;
};

export const reviewData: reviewType[] = [
  {
    image: stories1,
    clientImage: client2,
    title: 'Stories of Trust, Transformation, and Triumph',
  },
  {
    image: stories3,
    clientImage: client3,
    title: 'Empathy in action touching lives through customer experiences',
  },
  {
    image: stories4,
    clientImage: client4,
    title: 'Our Customer Canvas gallery of stories that resonate',
  },
];

export type storyType = {
  image: string;
  description: string;
  client: {
    image: string;
    name: string;
    role: string;
  };
};

export const storyData: storyType[] = [
  {
    image: client4,
    description: `Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.`,
    client: {
      image: avatar7,
      name: 'Louis Ferguson',
      role: 'Ceo of Eduport',
    },
  },
  {
    image: client5,
    description: `We've seen a significant reduction in customer churn since implementing the mizzle - it's been a valuable addition to our customer retention efforts. The AI mizzle has allowed us to scale our customer support efforts without sacrificing quality`,
    client: {
      image: avatar5,
      name: 'Emma Watson',
      role: 'Ceo of Blogzine',
    },
  },
  {
    image: client6,
    description: `Mizzle is the perfect theme for businesses that want to create a stylish and functional website.`,
    client: {
      image: avatar3,
      name: 'Dennis Barrett',
      role: 'Ceo of Blogzine',
    },
  },
];
