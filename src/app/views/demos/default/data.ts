const client1Img = '/images/client/01.svg';
const client2Img = '/images/client/02.svg';
const client3Img = '/images/client/03.svg';
const client4Img = '/images/client/04.svg';
const client5Img = '/images/client/05.svg';
const avatar1 = '/images/avatar/01.jpg';
const avatar2 = '/images/avatar/02.jpg';
const avatar3 = '/images/avatar/03.jpg';
const avatar5 = '/images/avatar/05.jpg';

export const clientData: string[] = [
  client1Img,
  client2Img,
  client3Img,
  client4Img,
  client5Img,
  client1Img,
  client2Img,
  client3Img,
  client4Img,
  client5Img,
];

export type ServiceType = {
  title: string;
  description: string;
  icon: string;
};

export const serviceData: ServiceType[] = [
  {
    title: 'Digital Marketing',
    description: 'Growing brands online through digital channels.',
    icon: 'layers',
  },
  {
    title: 'Product Design',
    description: 'Creating products that users love and businesses need.',
    icon: 'boxes',
  },
  {
    title: 'Web Design',
    description: 'Designing websites that are visually appealing & user-friendly.',
    icon: 'rectangle-circle',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user interfaces that are both efficient and enjoyable.',
    icon: 'pen-tool',
  },
  {
    title: 'Business Strategy',
    description: 'Developing and executing plans to achieve business goals.',
    icon: 'briefcase-business',
  },
  {
    title: 'Research',
    description: 'Gathering and analyzing data to inform decision-making.',
    icon: 'binoculars',
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    icon: 'code',
  },
  {
    title: 'Brand Design',
    description: 'Creating brands that are unique, memorable, and meaningful.',
    icon: 'target',
  },
];

export type TestimonialType = {
  rating: number;
  message: string;
  avatar: string;
  name: string;
}

export const testimonialData: TestimonialType[] = [
  {
    rating: 4.5,
    message:
      'Mizzle is the perfect theme for businesses that want to create a stylish and functional website.',
    avatar: avatar3,
    name: 'Nix Maxwell',
  },
  {
    rating: 4.5,
    message:
      "The best Template we've ever used - it's easy to customize and comes with all the features we need.",
    avatar: avatar1,
    name: 'Dennis Barrett',
  },
  {
    rating: 4.5,
    message:
      'StackBros helped us create a stunning website that reflects our brand perfectly.',
    avatar: avatar2,
    name: 'Nix Maxwell',
  },
  {
    rating: 4.5,
    message:
      'I highly recommend Mizzle to anyone looking for a high-quality Template.',
    avatar: avatar5,
    name: 'Carolyn Ortiz',
  },
];