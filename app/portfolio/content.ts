import { PageContent } from '../../types/content';

export const portfolioContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Our',
      title: 'work',
      accentColor: 'purple',
      description: 'Explore our collection of successful projects that showcase our creative expertise and strategic thinking.',
    },
    {
      type: 'grid',
      columns: 3,
      items: [
        {
          title: 'Girls',
          titleAccent: 'Bold',
          accentColor: 'pink',
          description: 'A powerful brand identity and campaign for a women\'s empowerment organization.',
          icon: '/cast/bold-girls/Welcome.png',
          background: 'pinkWave',
        },
        {
          title: 'Combat',
          titleAccent: 'Tribal',
          accentColor: 'yellow',
          description: 'Innovative design and marketing strategy for a martial arts training center.',
          icon: '/cast/tribal-combat/Welcome.png',
          background: 'yellowWave',
        },
        {
          title: 'Fitness',
          titleAccent: 'Peak',
          accentColor: 'green',
          description: 'Complete brand overhaul for a premium fitness and wellness center.',
          icon: '/cast/peak-fitness/Welcome.png',
          background: 'greenWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'purple',
      accent: 'darkPurple',
      image: '/icons/GD-Icon-010.png',
      titleAccent: 'Start',
      title: 'your project',
      description: 'Ready to create something amazing? Let\'s bring your vision to life.',
    },
  ],
};
