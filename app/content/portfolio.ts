import { PageContent } from '../../types/content';

export const portfolioContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'portfolio-hero',
      titleAccent: 'Our',
      title: 'Work',
      accentColor: 'yellow',
      description: 'Explore our collection of immersive brand experiences and virtual worlds.',
      image: '/images/portfolio-hero.mp4'
    },
    {
      type: 'grid',
      id: 'featured-work',
      title: 'Featured Projects',
      titleAccent: 'Success Stories',
      accentColor: 'yellow',
      description: 'Discover how we\'ve helped brands transform their digital presence through immersive experiences.',
      items: [
        {
          title: 'Virtual Showroom',
          description: 'An interactive product showcase for a leading luxury brand.',
          icon: '/icons/GD-Icon-025.png',
          background: 'yellowWave'
        },
        {
          title: 'Brand Museum',
          description: 'A virtual museum experience celebrating a brand\'s heritage and future.',
          icon: '/icons/GD-Icon-026.png',
          background: 'yellowWave'
        },
        {
          title: 'Digital Campus',
          description: 'An immersive learning environment for corporate training.',
          icon: '/icons/GD-Icon-027.png',
          background: 'yellowWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'portfolio-cta',
      theme: 'yellow',
      accent: 'purple',
      image: '/icons/GD-Icon-028.png',
      title: 'Want to See More?',
      description: 'Contact us to explore our full portfolio and discuss your project.',
      cta: {
        label: 'Get in Touch',
        href: '/contact'
      }
    }
  ]
};
