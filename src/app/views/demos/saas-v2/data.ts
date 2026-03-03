const mailchimp = '/images/elements/mailchimp.svg';
const slack = '/images/elements/slack.svg';
const webflow = '/images/elements/webflow.svg';
const shopify = '/images/elements/shopify.svg';
const reddit = '/images/elements/reddit.svg';
const microsoft = '/images/elements/microsoft.svg';
const bootstrap = '/images/elements/bootstrap.svg';
const dropbox = '/images/elements/dropbox.svg';
const gicon = '/images/elements/gicon.svg';
const github = '/images/elements/github.svg';
const googleDrive = '/images/elements/google-drive.svg';

const client1 = '/images/client/01.svg';
const client2 = '/images/client/02.svg';
const client3 = '/images/client/03.svg';
const client4 = '/images/client/04.svg';
const client5 = '/images/client/05.svg';
const client7 = '/images/client/07.svg';

const team3 ='/images/team/03.jpg'
const team2 ='/images/team/02.jpg'

export const integrations: string[] = [
  mailchimp,
  slack,
  webflow,
  shopify,
  reddit,
  microsoft,
  bootstrap,
  dropbox,
  gicon,
  github,
  googleDrive,
];

export const clientimage: string[] = [client1, client2, client3, client4, client5, client7];

export type TestimonialType = {
  image: string;
  title: string;
  description: string;
  rating: number;
  name: string;
  role: string;
}

export const testimonialData: TestimonialType[] = [
  {
    image: team3,
    title: '"Mizzle is essential tool for me and my team"',
    description:
      'The chatbot can be personalized to match the brand voice and tone, making the company\'s customer support team.',
    rating: 4.5,
    name: 'Jacqueline Miller',
    role: 'Head of marketing',
  },
  {
    image: team2,
    title: '"Transformed My Agency\'s Results"',
    description:
      'I can\'t say enough about the impact this platform has had on my agency. The automation tools, project management features, and seamless collaboration have transformed the way we work.',
    rating: 3.5,
    name: 'Allen Smith',
    role: 'Digital Marketing Agency Owner',
  },
];