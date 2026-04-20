const list1 = '/images/portfolio/list/01.jpg';
const list2 = '/images/portfolio/list/02.jpg';
const slack = '/images/elements/slack.svg';
const webflow = '/images/elements/webflow.svg';
const mailchimp = '/images/elements/mailchimp.svg';
const reddit = '/images/elements/reddit.svg';
const blog2 = '/images/blog/4by4/02.jpg';
const blog1 = '/images/blog/4by4/01.jpg';
const blog3 = '/images/blog/4by4/03.jpg';

export type MenuItemType = {
  label: string;
  url?: string;
  type?: string;
  badge?: string;
  children?: MenuItemType[];
  columns?: {
    items: MenuItemType[];
  }[];

  footer?: {
    title: string;
    subtitle: string;
    button: MenuItemType;
  };
  featured?: {
    title: string;
    image: string;
    description: string;
    url: string;
  }[];

  urls?: MenuItemType[];

  sections?: {
    title: string;
    urls?: MenuItemType[];
    cards?: {
      title: string;
      description: string;
      icon: string;
      badge?: string;
    }[];
    integrations?: {
      name: string;
      image: string;
    }[];
    blogs?: {
      title: string;
      image: string;
      url: string;
    }[];
  }[];
}

export const menuItems :MenuItemType[] = [
  {
    label: 'Demos',
    type: 'mega',
    columns: [
      {
        items: [
          { label: 'Classic Default', url: '/demos/classic' },
          { label: 'Creative Agency', url: '/demos/agency/creative' },
          { label: 'Digital Agency', url: '/demos/agency/digital', badge: 'New' },
          { label: 'Design Agency', url: '/demos/agency/design', badge: 'New' },
          { label: 'SEO Agency', url: '/demos/agency/seo', badge: 'New' },
          { label: 'Product Landing', url: '/demos/product-landing' },
          { label: 'Mobile App Showcase', url: '/demos/mobile-app' },
        ],
      },
      {
        items: [
          { label: 'SaaS v.1', url: '/demos/saas' },
          { label: 'SaaS v.2', url: '/demos/saas/v2' },
          { label: 'SaaS v.3', url: '/demos/saas/v3' },
          { label: 'SaaS v.4', url: '/demos/saas/v4' },
          { label: 'SaaS v.5', url: '/demos/saas/v5' },
          { label: 'Finance-consulting', url: '/demos/finance-consulting', badge: 'New' },
          { label: 'Index Shop', url: 'demos/index/shop' },
        ],
      },
    ],
    footer: {
      title: 'Ready to get started?',
      subtitle: 'Take your documents to the next level with Mizzle',
      button: { label: 'Get in touch', url: '/' },
    },
  },
  {
    label: 'Pages',
    type: 'dropdown',
    children: [
      {
        label: 'About',
        children: [
          { label: 'About v.1', url: '/about/v1' },
          { label: 'About v.2', url: '/about/v2' },
          { label: 'About v.3', url: '/about/v3' },
          { label: 'Team', url: '/team' },
          { label: 'Services v.1', url: '/services/v1' },
          { label: 'Services v.2', url: '/services/v2' },
          { label: 'Service Single', url: '/services/single' },
          { label: 'Customer Stories', url: '/customer/stories' },
          { label: 'Customer Story Single', url: '/customer/story-single' },
          { label: 'Career', url: 'career', badge: 'New' },
          { label: 'Career Single', url: '/career/single' },
        ],
      },
      { label: 'Contact v.1', url: '/contact/v1' },
      { label: 'Contact v.2', url: '/contact/v2' },

      {
        label: 'SaaS Pages',
        children: [
          { label: 'Features', url: '/saas/features' },
          { label: 'Feature Single', url: '/saas/feature-single' },
          { label: 'Integrations', url: '/saas/integrations' },
          { label: 'Integration Single', url: '/saas/integration-single' },
        ],
      },

      {
        label: 'Shop',
        children: [
          { label: 'Shop Grid', url: '/shop/grid' },
          { label: 'Shop Single', url: '/shop/single' },
          { label: 'Shop Cart', url: '/shop/cart' },
          { label: 'Shop Empty Cart', url: '/shop/empty-cart' },
          { label: 'Shop Checkout', url: '/shop/checkout' },
        ],
      },

      {
        label: 'Blog',
        children: [
          { label: 'Blog Grid', url: '/blog/grid' },
          { label: 'Blog List Sidebar', url: '/blog/list-sidebar' },
          { label: 'Blog Single v.1', url: '/blog/single-v1' },
          { label: 'Blog Single v.2', url: '/blog/single-v2' },
        ],
      },

      {
        label: 'Specialty Pages',
        children: [
          { label: 'Help Center', url: '/help/center' },
          { label: 'Help Center Detail', url: '/help/center-detail' },
          { label: 'Pricing', url: '/pricing' },
          { label: 'Faqs', url: '/faq' },
          { label: 'Error 404', url: '/error/404' },
          { label: 'Coming Soon', url: '/coming-soon' },
          { label: 'Terms & Conditions', url: '/terms-and-condition' },
        ],
      },

      {
        label: 'Authentication',
        children: [
          { label: 'Sign Up', url: '/auth/sign-up' },
          { label: 'Sign In', url: '/auth/sign-in' },
          { label: 'Forgot Password', url: '/auth/forgot-password' },
        ],
      },

      {
        label: 'Accounts',
        children: [
          { label: 'Details', url: '/account/detail' },
          { label: 'Security', url: '/account/security' },
          { label: 'Notifications', url: '/account/notification' },
          { label: 'My Projects', url: '/account/projects' },
          { label: 'Payment Details', url: '/account/payment-details' },
          { label: 'Order History', url: '/account/order' },
          { label: 'Wishlist', url: '/account/wishlist' },
          { label: 'Delete Profile', url: '/account/delete' },
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    type: 'mega-portfolio',
    featured: [
      {
        title: 'Ceremony Worthy of Time',
        image: list1,
        description: 'We help our customers better manage their web presence.',
        url: '/portfolio/case-study/v1',
      },
      {
        title: 'Brushstrokes and Beyond',
        image: list2,
        description: 'We help our customers better manage their web presence.',
        url: '/portfolio/case-study/v2',
      },
    ],
    urls: [
      { label: 'Portfolio Pages' },
      { label: 'Portfolio Masonry', url: '/portfolio/masonry' },
      { label: 'Portfolio Showcase', url: '/portfolio/showcase' },
      { label: 'Portfolio List', url: '/portfolio/list' },
      { label: 'Portfolio Case Study v.1', url: '/portfolio/case-study/v1' },
      { label: 'Portfolio Case Study v.2', url: '/portfolio/case-study/v2' },
    ],
  },
  {
    label: 'Megamenu',
    type: 'mega-full',
    sections: [
      {
        title: 'Useful urls',
        urls: [
          { label: 'Market research' },
          { label: 'Advertising' },
          { label: 'Consumer behavior' },
          { label: 'Digital marketing' },
          { label: 'Marketing ethics' },
          { label: 'Social media marketing' },
        ],
      },
      {
        title: 'Company',
        cards: [
          {
            title: 'About us',
            description: 'Learn about our story, our mission.',
            icon: 'tabler:packages',
          },
          {
            title: 'Career',
            description: "We're always looking for talented people.",
            badge: '3 Jobs',
            icon: 'tabler:rocket',
          },
          {
            title: 'Customer stories',
            description: 'Learn how our customer are making big',
            icon: 'tabler:mood-happy',
          },
        ],
      },

      {
        title: 'Integration',
        integrations: [
          { name: 'Slack', image: slack },
          { name: 'Webflow', image: webflow },
          { name: 'Mailchimp', image: mailchimp },
          { name: 'Reddit', image: reddit },
        ],
      },

      {
        title: 'Recent blogs',
        blogs: [
          {
            title: '10 things you need to know about Mizzle',
            image: blog2,
            url: '/blog/single/v1',
          },
          {
            title: 'The Power of Gratitude: Cultivating Joy and Abundance',
            image: blog1,
            url: '/blog/single/v2',
          },
          {
            title: 'Effortless Web Development with Mizzle',
            image: blog3,
            url: '/blog/single/v1',
          },
        ],
      },
    ],
  },

  {
    label: 'Contacts Us',
    url: '/contact/v1',
  },
];
