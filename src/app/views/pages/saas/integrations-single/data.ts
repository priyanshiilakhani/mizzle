const dropbox = '/assets/images/elements/dropbox.svg';
const github = 'assets/images/elements/github.svg';
const reddit = 'assets/images/elements/reddit.svg';

export type IntegrationType = {
  image: string;
  description: string;
  name: string;
  link: string;
};

export const integrationData: IntegrationType[] = [
  {
    name: 'Github',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: github,
    link: '/saas/integration-single',
  },
  {
    name: 'Dropbox',
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    image: dropbox,
    link: '/saas/integration-single',
  },
  {
    name: 'Reddit',
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.',
    image: reddit,
    link: '/saas/integration-single',
  },
];
