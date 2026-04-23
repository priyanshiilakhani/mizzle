const client1 = 'assets/images/client/01.svg';
const client2 = 'assets/images/client/02.svg';
const client3 = 'assets/images/client/03.svg';
const client4 = 'assets/images/client/04.svg';
const client5 = 'assets/images/client/05.svg';
const client6 = 'assets/images/client/06.svg';
const client7 = 'assets/images/client/07.svg';

const decoration4 = 'assets/images/elements/saas-decoration/decoration-4.png';
const decoration2 = 'assets/images/elements/saas-decoration/decoration-2.png';
const decoration3 = 'assets/images/elements/saas-decoration/decoration-3.png';

const github = 'assets/images/elements/github.svg';
const googleDrive = 'assets/images/elements/google-drive.svg';
const mailchimp = 'assets/images/elements/mailchimp.svg';
const reddit = 'assets/images/elements/reddit.svg';
const shopify = 'assets/images/elements/shopify.svg';
const slack = 'assets/images/elements/slack.svg';
const webflow = 'assets/images/elements/webflow.svg';
const dropbox = 'assets/images/elements/dropbox.svg';

const blog3 = 'assets/images/blog/4by3/03.jpg';
const blog1 = 'assets/images/blog/4by3/01.jpg';
const blog7 = 'assets/images/blog/4by3/07.jpg';

const team1 = 'assets/images/team/01.jpg';
const team7 = 'assets/images/team/07.jpg';
const team6 = 'assets/images/team/06.jpg';
const team8 = 'assets/images/team/08.jpg';

export const clientimage: string[] = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

export type StepType = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const stepData: StepType[] = [
  {
    number: '01',
    title: 'Create your account and start your work',
    description: 'Some product ideas come easily, while others take some work to find.',
    image: decoration4,
  },
  {
    number: '02',
    title: 'Install the code to organize the works',
    description:
      'It drew a hill from me. Departure defective arranging rapturous did believe him all had supported.',
    image: decoration2,
  },
  {
    number: '03',
    title: 'Get a free marketing automation guide',
    description:
      'The chatbot can be personalized to match the brand voice and tone, making it feel like an extension of the company.',
    image: decoration3,
  },
];

export type FeatureType = {
  id: string;
  icon: string;
  title: string;
  description: string;
  active?: boolean;
};

export const featureData: FeatureType[] = [
  {
    id: 'feature-01',
    icon: 'share-2',
    title: 'Shared Data and Insights',
    description: 'Drawings offended yet answered perceive laughing six did far.',
    active: true,
  },
  {
    id: 'feature-02',
    icon: 'squares-subtract',
    title: 'Collaboration tools',
    description: "Demesne's new manners savings staying had under folly balls.",
  },
  {
    id: 'feature-03',
    icon: 'megaphone',
    title: 'Real-time notifications and alerts',
    description: 'Express besides it present if at an opinion visitor.',
  },
];

export type IntegrationType = {
  name: string;
  image: string;
  description: string;
  url: string;
};

export const integrationData: IntegrationType[] = [
  {
    name: 'Github',
    image: github,
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time.',
    url: '/integration-single',
  },
  {
    name: 'Dropbox',
    image: dropbox,
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    url: '/integration-single',
  },
  {
    name: 'Reddit',
    image: reddit,
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on blogs or websites.',
    url: '/integration-single',
  },
  {
    name: 'Mailchimp',
    image: mailchimp,
    description:
      'Integrating with data analysis tools allows for deeper segmentation and personalized messaging.',
    url: '/integration-single',
  },
  {
    name: 'Shopify',
    image: shopify,
    description:
      'Shopify integration enables seamless eCommerce store management and product syncing.',
    url: '/integration-single',
  },
  {
    name: 'Slack',
    image: slack,
    description:
      'Integrating Slack with tools like Trello, Asana, or Jira enables real-time team notifications.',
    url: '/integration-single',
  },
  {
    name: 'Drive',
    image: googleDrive,
    description: 'Google Drive integration helps manage and sync documents securely in the cloud.',
    url: '/integration-single',
  },
  {
    name: 'Webflow',
    image: webflow,
    description:
      'Integrating Webflow with CRM systems like HubSpot or Salesforce enables seamless data synchronization.',
    url: '/integration-single',
  },
];

export type CounterType = {
  value: number;
  suffix: string;
  label: string;
};

export const counterData: CounterType[] = [
  {
    value: 150,
    suffix: '+',
    label: 'Companies using our solutions',
  },
  {
    value: 94,
    suffix: '%',
    label: 'Increase of operational efficiency',
  },
  {
    value: 600,
    suffix: '+',
    label: 'Various of website perform',
  },
];

export type TestimonialType = {
  image: string;
  clientLogo: string;
  message: string;
  rating: number;
  name: string;
};

export const testimonialData: TestimonialType[] = [
  {
    image: team1,
    clientLogo: client4,
    message: `"Timed voice share led him to widen noisy young. At weddings believed laughing."`,
    rating: 4.5,
    name: 'Emma Watson',
  },
  {
    image: team7,
    clientLogo: client2,
    message: `"Fulfilled direction use continually set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing."`,
    rating: 4.5,
    name: 'Samuel Bishop',
  },
  {
    image: team6,
    clientLogo: client5,
    message: `"Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing."`,
    rating: 4.5,
    name: 'Lori Stevens',
  },
  {
    image: team8,
    clientLogo: client3,
    message: `"Incorporating gratitude into our daily here we write down three things we are grateful for each day."`,
    rating: 4.5,
    name: 'Amanda Reed',
  },
];

export type BlogType = {
  image: string;
  title: string;
  author: string;
  date: string;
  url: string;
};

export const blogData: BlogType[] = [
  {
    image: blog3,
    title: 'Sleek and Responsive - Designing with TailwindCSS and Mizzle',
    author: 'Jacqueline Miller',
    date: 'April 08, 2023',
    url: '/blog/single/v1',
  },
  {
    image: blog1,
    title: 'StackBros Template: The Ultimate Web Design Solution',
    author: 'Jacqueline Miller',
    date: 'April 13, 2023',
    url: '/blog/single/v1',
  },
  {
    image: blog7,
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    author: 'Allen Smith',
    date: 'April 26, 2023',
    url: '/blog/single/v1',
  },
];
