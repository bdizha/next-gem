import { PageContent } from '../../types/content';

export const homeContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'home-hero',
      title: 'Building Immersive Experiences',
      description: 'Transform your brand through immersive digital experiences. Create engaging virtual worlds that captivate your audience.',
      image: '/images/hero.mp4'
    },
    {
      type: 'grid',
      id: 'envision',
      title: 'Envision Your Future',
      description: 'Imagine a world where your brand transcends traditional boundaries. Where every interaction is an opportunity to amaze.',
      items: [
        {
          title: 'Innovation',
          description: 'Push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
          icon: '/icons/GD-Icon-001.png',
          background: 'pinkWave'
        },
        {
          title: 'Creativity',
          description: 'Blend artistry and technology to create unique and memorable brand experiences.',
          icon: '/icons/GD-Icon-002.png',
          background: 'pinkWave'
        },
        {
          title: 'Growth',
          description: 'Scale your brand presence and reach new heights in the digital landscape.',
          icon: '/icons/GD-Icon-003.png',
          background: 'pinkWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'services',
      title: 'Comprehensive Solutions',
      description: 'We offer a full suite of services to help you succeed in the digital realm.',
      items: [
        {
          title: 'Virtual Worlds',
          description: 'Create immersive environments that bring your brand to life.',
          icon: '/icons/GD-Icon-004.png',
          background: 'greenWave'
        },
        {
          title: 'Digital Assets',
          description: 'Design and develop unique digital assets that represent your brand.',
          icon: '/icons/GD-Icon-005.png',
          background: 'greenWave'
        },
        {
          title: 'Brand Strategy',
          description: 'Develop comprehensive strategies for your digital presence.',
          icon: '/icons/GD-Icon-006.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'home-cta',
      title: 'Start Your Journey',
      description: 'Ready to transform your brand? Let\'s create something amazing together.',
      image: '/icons/GD-Icon-007.png',
      cta: {
        label: 'Get Started',
        href: '/contact'
      }
    }
  ]
};
