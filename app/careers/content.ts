import { PageContent } from '../../types/content';

export const careersContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Join Our Team',
      title: 'Careers at GraphiGem',
      accentColor: 'purple',
      description: 'Be part of something extraordinary. Join our creative team and help shape the future of digital branding.',
    },
    {
      type: 'grid',
      title: 'Open Positions',
      titleAccent: 'Opportunities',
      accentColor: 'green',
      items: [
        {
          title: 'Digital Designer',
          description: 'Create stunning digital experiences that captivate and inspire.',
          icon: '/icons/GD-Icon-004.png'
        },
        {
          title: '3D Artist',
          description: 'Bring brands to life through immersive 3D visualizations.',
          icon: '/icons/GD-Icon-005.png'
        },
        {
          title: 'Brand Strategist',
          description: 'Shape brand narratives and guide clients through their digital transformation.',
          icon: '/icons/GD-Icon-006.png'
        }
      ]
    },
    {
      type: 'action',
      theme: 'green',
      accent: 'purple',
      image: '/icons/GD-Icon-007.png',
      title: 'Ready to Apply?',
      description: 'Send your portfolio and resume to careers@graphigem.com. We\'re always looking for talented individuals who share our passion for creativity and innovation.'
    }
  ]
};
