import { PageContent } from '../../types/content';

export const contactContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Get in',
      title: 'touch',
      accentColor: 'purple',
      description: 'Let\'s discuss your project and explore how we can help bring your vision to life.',
    },
    {
      type: 'grid',
      columns: 3,
      items: [
        {
          title: 'us',
          titleAccent: 'Email',
          accentColor: 'green',
          description: 'hello@graphigem.com',
          icon: '/icons/GD-Icon-010.png',
          background: 'greenWave',
        },
        {
          title: 'us',
          titleAccent: 'Call',
          accentColor: 'yellow',
          description: '+1 (555) 123-4567',
          icon: '/icons/GD-Icon-011.png',
          background: 'yellowWave',
        },
        {
          title: 'us',
          titleAccent: 'Visit',
          accentColor: 'pink',
          description: '123 Design Street, Creative City, DC 12345',
          icon: '/icons/GD-Icon-012.png',
          background: 'pinkWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'purple',
      accent: 'darkPurple',
      image: '/icons/GD-Icon-013.png',
      titleAccent: 'Start',
      title: 'your project',
      description: 'Ready to transform your brand? Let\'s create something amazing together.',
    },
  ],
};
