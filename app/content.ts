import { PageContent } from '../types/content';

export const homeContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Delight',
      title: 'your customer',
      accentColor: 'purple',
      description: 'Great brands tend to believe in the possible. We help brands create value in the virtual world.',
      image: '/images/hero.jpg'
    },
    {
      type: 'grid',
      title: 'Our Services',
      titleAccent: 'Explore',
      accentColor: 'green',
      items: [
        {
          title: 'Digital Branding',
          description: 'Create a strong digital presence that resonates with your audience.',
          icon: '/icons/GD-Icon-001.png'
        },
        {
          title: 'Character Branding',
          description: 'Develop unique brand characters that tell your story.',
          icon: '/icons/GD-Icon-002.png'
        },
        {
          title: 'Virtual World',
          description: 'Step into the future with immersive virtual experiences.',
          icon: '/icons/GD-Icon-003.png'
        }
      ]
    },
    {
      type: 'action',
      theme: 'pink',
      accent: 'green',
      image: '/icons/GD-Icon-005.png',
      title: 'Unleash your brand',
      description: 'GraphiGem helps brands create value in the virtual world. We are a strategic and creative digital service guiding businesses through digital branding, character branding and the Virtual World.'
    }
  ]
};
