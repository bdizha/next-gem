import { PageContent } from '../../types/content';

export const servicesContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'services-hero',
      titleAccent: 'Our',
      title: 'Services',
      accentColor: 'green',
      description: 'Comprehensive solutions for creating immersive brand experiences in the metaverse.',
      image: '/images/services-hero.mp4'
    },
    {
      type: 'grid',
      id: 'metaverse-development',
      title: 'Metaverse Development',
      titleAccent: 'Virtual Worlds',
      accentColor: 'green',
      description: 'Create engaging virtual environments that bring your brand to life in the metaverse.',
      items: [
        {
          title: 'World Building',
          description: 'Design and develop custom virtual worlds that align with your brand identity.',
          icon: '/icons/GD-Icon-021.png',
          background: 'greenWave'
        },
        {
          title: 'Interactive Spaces',
          description: 'Create engaging spaces where users can interact with your brand in meaningful ways.',
          icon: '/icons/GD-Icon-022.png',
          background: 'greenWave'
        },
        {
          title: 'Virtual Events',
          description: 'Host immersive events that bring your community together in the metaverse.',
          icon: '/icons/GD-Icon-023.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'services-cta',
      theme: 'green',
      accent: 'yellow',
      image: '/icons/GD-Icon-024.png',
      title: 'Ready to Transform Your Brand?',
      description: 'Let\'s create an immersive experience that sets your brand apart.',
      cta: {
        label: 'Get Started',
        href: '/contact'
      }
    }
  ]
};
