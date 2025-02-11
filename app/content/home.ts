import { ContentBlock } from '../../types/content';

export const homeContent = {
  blocks: [
    {
      type: 'hero',
      id: 'home-hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Building Immersive Experiences',
      description: 'Transform your brand through immersive digital experiences. Create engaging virtual worlds that captivate your audience.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
    },
    {
      type: 'grid',
      id: 'envision',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Envision Your Future',
      subtitle: 'Where innovation meets imagination',
      description: 'Imagine a world where your brand transcends traditional boundaries. Where every interaction is an opportunity to amaze.',
      items: [
        {
          title: 'Innovation',
          description: 'Pushing boundaries in the virtual space with cutting-edge solutions.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Robot.png',
          background: 'pinkWave'
        },
        {
          title: 'Creativity',
          description: 'Transforming ideas into captivating virtual experiences.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png',
          background: 'purpleWave'
        },
        {
          title: 'Excellence',
          description: 'Delivering exceptional quality in every project.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Check.png',
          background: 'yellowWave'
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
