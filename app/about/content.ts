import { PageContent } from '../../types/content';

export const aboutContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'About',
      title: 'us',
      accentColor: 'pink',
      description: 'We are a team of creative professionals dedicated to transforming brands through innovative design and strategic thinking.',
    },
    {
      type: 'grid',
      columns: 3,
      items: [
        {
          title: 'Adventure',
          titleAccent: 'Creative',
          accentColor: 'pink',
          description: 'We serve unique and disruptive brands of all sizes and are fanatical about their success. We explore the impossible of dreams.',
          icon: '/icons/GD-Icon-014.png',
          background: 'pinkWave',
        },
        {
          title: 'Autonomy',
          titleAccent: 'Design',
          accentColor: 'green',
          description: 'We believe in giving our team the freedom to innovate and create without boundaries.',
          icon: '/icons/GD-Icon-012.png',
          background: 'greenWave',
        },
        {
          title: 'Excellence',
          titleAccent: 'Client',
          accentColor: 'purple',
          description: 'We strive for excellence in everything we do, ensuring our clients receive the highest quality service.',
          icon: '/icons/GD-Icon-013.png',
          background: 'purpleWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'pink',
      accent: 'darkPink',
      image: '/icons/GD-Icon-015.png',
      titleAccent: 'Start',
      title: 'your journey',
      description: 'Ready to transform your brand? Let\'s create something amazing together.',
    },
  ],
};
