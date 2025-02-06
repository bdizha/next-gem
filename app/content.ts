import { PageContent } from '../types/content';

export const homeContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Delight',
      title: 'your customer',
      accentColor: 'purple',
      description: 'Great brands tend to believe in the possible. It takes a big idea coupled with a great story to attract the attention of customers and get them to discover and buy your product.',
    },
    {
      type: 'grid',
      columns: 3,
      title: 'clients',
      titleAccent: 'Our',
      accentColor: 'purple',
      description: 'We uniquely combine international experience with a deep appreciation of aesthetic ideas of culture dominated marketplace and the creativity that\'s imbued in the boldest showcases we make for the amazing brands in the world.',
      items: [
        {
          title: 'Zudaland',
          description: 'Innovative digital solutions for modern businesses',
          icon: '/brands/zudaland.png',
          background: 'whiteGrey',
        },
        {
          title: 'Tribal Combat',
          description: 'Premium martial arts brand with global reach',
          icon: '/brands/boldland.png',
          background: 'whiteGrey',
        },
        {
          title: 'Bold Girls',
          description: 'Empowering women through powerful branding',
          icon: '/brands/zudaland.png',
          background: 'whiteGrey',
        },
      ],
    },
    {
      type: 'grid',
      columns: 3,
      title: 'approach',
      titleAccent: 'Our',
      accentColor: 'green',
      description: 'We envision a fully immersive and a character-centric branding future and are catalyzing creativity for unique brands through a consumer tailored branding strategy while earning them a fully engaged and a delighted customer base.',
      items: [
        {
          title: 'it',
          titleAccent: 'Evaluate',
          accentColor: 'green',
          description: 'Unleash new insights and repeat building again while adding adjustments to the buy-in effects of your product on real and potential customers.',
          icon: '/icons/GD-Icon-012.png',
          background: 'darkGrey',
        },
        {
          title: 'it',
          titleAccent: 'Apply',
          accentColor: 'purple',
          description: 'Execute your vision with precision and build your brand story through engaging content and strategic implementation.',
          icon: '/icons/GD-Icon-008.png',
          background: 'darkGrey',
        },
        {
          title: 'it',
          titleAccent: 'Envision',
          accentColor: 'pink',
          description: 'Dream big and create a clear vision for your brand that resonates with your target audience.',
          icon: '/icons/GD-Icon-007.png',
          background: 'darkGrey',
        },
      ],
    },
    {
      type: 'grid',
      columns: 4,
      title: 'projects',
      titleAccent: 'Featured',
      accentColor: 'purple',
      description: 'Take a look at some of our recent work and see how we\'ve helped brands transform.',
      items: [
        {
          title: 'Girls',
          titleAccent: 'Bold',
          accentColor: 'pink',
          description: 'Empowering women through powerful branding',
          icon: '/cast/bold-girls/Welcome.png',
          background: 'pinkWave',
        },
        {
          title: 'Combat',
          titleAccent: 'Tribal',
          accentColor: 'yellow',
          description: 'Martial arts brand with a modern edge',
          icon: '/cast/tribal-combat/Welcome.png',
          background: 'yellowWave',
        },
        {
          title: 'Fitness',
          titleAccent: 'Peak',
          accentColor: 'green',
          description: 'Premium fitness brand transformation',
          icon: '/cast/peak-fitness/Welcome.png',
          background: 'greenWave',
        },
        {
          title: 'Brands',
          titleAccent: 'More',
          accentColor: 'purple',
          description: 'Explore our complete portfolio',
          icon: '/cast/more-brands/Welcome.png',
          background: 'purpleWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'purple',
      accent: 'pink',
      image: '/icons/GD-Icon-014.png',
      titleAccent: 'Delight',
      title: 'your customer',
      description: 'Great brands tend to believe in the possible. It takes a big idea coupled with a great story to attract the attention of customers and get them to discover and buy your product.',
    },
  ],
};
