import { ContentBlock } from '../../types/content';

export const careersContent = {
  blocks: [
    {
      type: 'hero',
      id: 'careers-hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Join Our Team',
      subtitle: 'Shape the future of digital experiences',
      description: 'Be part of a team that\'s pushing the boundaries of what\'s possible in the virtual space.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
    },
    {
      type: 'grid',
      id: 'why-join',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Why Join Us',
      subtitle: 'Be part of something special',
      description: 'Join a team of innovators, creators, and visionaries shaping the future of brand experiences.',
      items: [
        {
          title: 'Innovation',
          description: 'Work with cutting-edge technology and creative tools.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png'
        },
        {
          title: 'Growth',
          description: 'Continuous learning and development opportunities.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Refine.png'
        },
        {
          title: 'Impact',
          description: 'Create work that makes a real difference.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Check.png'
        }
      ]
    },
    {
      type: 'action',
      id: 'careers-cta',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Ready to join our team?',
      description: 'Explore our open positions and find your perfect role.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png'
    }
  ] as ContentBlock[]
};
