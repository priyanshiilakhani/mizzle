const stories1 = '/images/stories/01.jpg';
const stories3 = '/images/stories/03.jpg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';

export type storiesType = {
  image: string;
  client: {
    image: string;
  };
  title: string;
};

export const storiesData: storiesType[] = [
  {
    image: stories1,
    client: {
      image: client2,
    },
    title: 'Stories of Trust, Transformation, and Triumph',
  },
  {
    image: stories3,
    client: {
      image: client3,
    },
    title: 'Empathy in action touching lives through customer experiences',
  },
];