const avatar1 = '/images/avatar/01.jpg';
const avatar2 = '/images/avatar/02.jpg';
const avatar3 = '/images/avatar/03.jpg';
const avatar4 = '/images/avatar/04.jpg';
const avatar5 = '/images/avatar/05.jpg';
const avatar6 = '/images/avatar/06.jpg';
const avatar7 = '/images/avatar/07.jpg';
const avatar8 = '/images/avatar/08.jpg';
const avatar10 = '/images/avatar/10.jpg';

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