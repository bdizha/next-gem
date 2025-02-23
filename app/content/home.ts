import { ContentBlock } from '../../types/content';

export const homeContent = {
  blocks: [
    {
      type: 'grid',
      id: 'hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Building Immersive Experiences',
      description: 'Transform your brand through immersive digital experiences. Create engaging virtual worlds that captivate your audience.',
      items: []
    },
    {
      type: 'grid',
      id: 'envision-future',
      theme: 'purple',
      accent: 'green',
      title: 'Envision the Future',
      subtitle: 'Create lasting impressions in virtual spaces',
      items: [
        {
          title: 'Virtual Worlds',
          description: 'Build immersive digital environments that showcase your brand in innovative ways.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Robot.png',
          background: 'pinkWave'
        },
        {
          title: 'Digital Characters',
          description: 'Bring your brand to life with unique character designs and animations.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png',
          background: 'purpleWave'
        },
        {
          title: 'Brand Integration',
          description: 'Seamlessly integrate your brand into virtual experiences.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'services',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Our Services',
      subtitle: 'Stand out in the digital landscape',
      items: [
        {
          title: 'Virtual Spaces',
          description: 'Create immersive digital environments that engage and inspire.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png',
          background: 'pinkWave'
        },
        {
          title: 'Digital Experiences',
          description: 'Design interactive journeys that captivate your audience.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png',
          background: 'purpleWave'
        },
        {
          title: 'Brand Strategy',
          description: 'Develop a comprehensive digital brand strategy.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png',
          background: 'yellowWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'cta',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Ready to transform your brand?',
      subtitle: "Let's create something amazing together",
      description: 'Join us in shaping the future of brand experiences in the virtual space.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png',
      cta: {
        label: 'Get Started',
        href: '/contact'
      }
    }
  ] as ContentBlock[]
};
