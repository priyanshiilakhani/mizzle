const mailchimp = 'assets/images/elements/mailchimp.svg';
const slack = 'assets/images/elements/slack.svg';
const webflow = 'assets/images/elements/webflow.svg';
const shopify = 'assets/images/elements/shopify.svg';
const reddit = 'assets/images/elements/reddit.svg';
const microsoft = 'assets/images/elements/microsoft.svg';
const bootstrap = 'assets/images/elements/bootstrap.svg';
const dropbox = 'assets/images/elements/dropbox.svg';
const gicon = 'assets/images/elements/gicon.svg';
const github = 'assets/images/elements/github.svg';
const googleDrive = 'assets/images/elements/google-drive.svg';

const client1 = 'assets/images/client/01.svg';
const client2 = 'assets/images/client/02.svg';
const client3 = 'assets/images/client/03.svg';
const client4 = 'assets/images/client/04.svg';
const client5 = 'assets/images/client/05.svg';
const client7 = 'assets/images/client/07.svg';

const team3 ='assets/images/team/03.jpg'
const team2 ='assets/images/team/02.jpg'

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