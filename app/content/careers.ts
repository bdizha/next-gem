import { PageContent } from '../../types/content';

export const careersContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'careers-hero',
      titleAccent: 'Join Our',
      title: 'Team',
      accentColor: 'pink',
      description: 'Help us shape the future of brand experiences in the metaverse.',
      image: '/images/careers-hero.mp4'
    },
    {
      type: 'grid',
      id: 'why-join',
      title: 'Why Join Us',
      titleAccent: 'Growth & Innovation',
      accentColor: 'pink',
      description: 'Be part of a team that\'s pushing the boundaries of what\'s possible in the metaverse.',
      items: [
        {
          title: 'Innovation First',
          description: 'Work with cutting-edge technologies and shape the future of digital experiences.',
          icon: '/icons/GD-Icon-032.png',
          background: 'pinkWave'
        },
        {
          title: 'Growth Culture',
          description: 'Continuous learning and development opportunities for all team members.',
          icon: '/icons/GD-Icon-033.png',
          background: 'pinkWave'
        },
        {
          title: 'Global Impact',
          description: 'Create experiences that reach and inspire audiences worldwide.',
          icon: '/icons/GD-Icon-034.png',
          background: 'pinkWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'careers-cta',
      theme: 'pink',
      accent: 'green',
      image: '/icons/GD-Icon-035.png',
      title: 'Ready to Make an Impact?',
      description: 'Explore our open positions and join our innovative team.',
      cta: {
        label: 'View Openings',
        href: '/careers#openings'
      }
    }
  ]
};
