import { PageContent } from '../types/content';

export const homeContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Bold',
      title: 'Gem',
      accentColor: 'pink',
      description: 'We are a creative studio specializing in 3D design, animation, and branding. We help brands stand out in a crowded digital landscape.',
      image: '/assets/wave-pink-wave-7.png',
    },
    {
      type: 'grid',
      columns: 3,
      items: [
        {
          title: 'Design',
          titleAccent: '3D',
          accentColor: 'pink',
          description: 'We create stunning 3D visuals that bring your brand to life.',
          icon: '/assets/GD-2D/GD-Icon/GDNewIcons/GD_Illustration3.png',
          background: 'pinkWave',
        },
        {
          title: 'Animation',
          titleAccent: 'Motion',
          accentColor: 'green',
          description: 'Dynamic animations that tell your brand story.',
          icon: '/assets/GD-2D/GD-Icon/GDNewIcons/GD_Illustration4.png',
          background: 'greenWave',
        },
        {
          title: 'Branding',
          titleAccent: 'Brand',
          accentColor: 'purple',
          description: 'Complete brand identity solutions for modern businesses.',
          icon: '/assets/GD-2D/GD-Icon/GDNewIcons/GD_Illustration5.png',
          background: 'purpleWave',
        },
      ],
    },
    {
      type: 'grid',
      title: 'Portfolio',
      titleAccent: 'Our',
      accentColor: 'green',
      columns: 3,
      items: [
        {
          title: 'Project 1',
          titleAccent: 'Brand',
          accentColor: 'purple',
          description: 'Complete brand identity redesign for a tech startup.',
          image: '/assets/wave-pink.png',
          background: 'purpleWave',
        },
        {
          title: 'Project 2',
          titleAccent: 'Animation',
          accentColor: 'yellow',
          description: '3D product animation for marketing campaign.',
          image: '/assets/wave-yellow.png',
          background: 'yellowWave',
        },
        {
          title: 'Project 3',
          titleAccent: '3D Design',
          accentColor: 'pink',
          description: 'Character design and modeling for gaming company.',
          image: '/assets/wave-purple.png',
          background: 'pinkWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'pink',
      accent: 'darkPink',
      image: '/assets/GD-2D/GD-Icon/GDNewIcons/GD_Rocket.png',
      titleAccent: 'Start',
      title: 'your project',
      description: 'Ready to bring your vision to life? Let\'s create something amazing together.',
    },
  ],
};
