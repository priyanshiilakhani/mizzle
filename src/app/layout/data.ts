export const menuItems = [
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
          { label: '/demos/mobile-app', url: 'index-mobile-app-showcase.html' },
        ],
      },
      {
        items: [
          { label: 'SaaS v.1', url: '/saas/v1' },
          { label: 'SaaS v.2', url: '/saas/v2' },
          { label: 'SaaS v.3', url: '/saas/v3' },
          { label: 'SaaS v.4', url: '/saas/v4' },
          { label: 'SaaS v.5', url: '/saas/v5' },
          { label: 'Finance-consulting', url: '/demos/finance-consulting', badge: 'New' },
          { label: 'Index Shop', url: '/shop/index' },
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
          { label: 'Help Center', url: 'help-center.html' },
          { label: 'Help Center Detail', url: 'help-center-detail.html' },
          { label: 'Pricing', url: 'pricing.html' },
          { label: 'Faqs', url: 'faq.html' },
          { label: 'Error 404', url: 'error-404.html' },
          { label: 'Coming Soon', url: 'coming-soon.html' },
          { label: 'Terms & Conditions', url: 'terms-and-condition.html' },
        ],
      },

      {
        label: 'Authentication',
        children: [
          { label: 'Sign Up', url: 'sign-up.html' },
          { label: 'Sign In', url: 'sign-in.html' },
          { label: 'Forgot Password', url: 'forgot-password.html' },
        ],
      },

      {
        label: 'Accounts',
        children: [
          { label: 'Details', url: 'account-detail.html' },
          { label: 'Security', url: 'account-security.html' },
          { label: 'Notifications', url: 'account-notification.html' },
          { label: 'My Projects', url: 'account-projects.html' },
          { label: 'Payment Details', url: 'account-payment-details.html' },
          { label: 'Order History', url: 'account-order.html' },
          { label: 'Wishlist', url: 'account-wishlist.html' },
          { label: 'Delete Profile', url: 'account-delete.html' },
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
        image: '/images/portfolio/list/01.jpg',
        desc: 'We help our customers better manage their web presence.',
        url: 'portfolio-case-studies-v1.html',
      },
      {
        title: 'Brushstrokes and Beyond',
        image: '/images/portfolio/list/02.jpg',
        desc: 'We help our customers better manage their web presence.',
        url: 'portfolio-case-studies-v2.html',
      },
    ],
    urls: [
      { label: 'Portfolio Masonry', url: 'portfolio-masonry.html' },
      { label: 'Portfolio Showcase', url: 'portfolio-showcase.html' },
      { label: 'Portfolio List', url: 'portfolio-list.html' },
      { label: 'Portfolio Case Study v.1', url: 'portfolio-case-studies-v1.html' },
      { label: 'Portfolio Case Study v.2', url: 'portfolio-case-studies-v2.html' },
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
            desc: 'Learn about our story, our mission.',
            icon: 'tabler:packages',
          },
          {
            title: 'Career',
            desc: "We're always looking for talented people.",
            badge: '3 Jobs',
            icon: 'tabler:rocket',
          },
          {
            title: 'Customer stories',
            desc: 'Learn how our customer are making big',
            icon: 'tabler:mood-happy',
          },
        ],
      },

      {
        title: 'Integration',
        integrations: [
          { name: 'Slack', image: '/images/elements/slack.svg' },
          { name: 'Webflow', image: '/images/elements/webflow.svg' },
          { name: 'Mailchimp', image: '/images/elements/mailchimp.svg' },
          { name: 'Reddit', image: '/images/elements/reddit.svg' },
        ],
      },

      {
        title: 'Recent blogs',
        blogs: [
          {
            title: '10 things you need to know about Mizzle',
            image: '/images/blog/4by4/02.jpg',
            url: 'blog-single-v1.html',
          },
          {
            title: 'The Power of Gratitude: Cultivating Joy and Abundance',
            image: '/images/blog/4by4/01.jpg',
            url: 'blog-single-v2.html',
          },
          {
            title: 'Effortless Web Development with Mizzle',
            image: '/images/blog/4by4/03.jpg',
            url: 'blog-single-v1.html',
          },
        ],
      },
    ],
  },

  {
    label: 'Contacts Us',
    url: 'contact-v1.html',
  },

  {
    label: 'Docs',
    url: 'docs/index.html',
    target: '_blank',
  },
];
