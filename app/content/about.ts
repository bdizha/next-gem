import { ContentBlock } from '../../types/content';

export const aboutContent = {
  blocks: [
    {
      type: 'hero',
      id: 'about-hero',
      theme: 'purple',
      accent: 'pink',
      title: 'About Us',
      subtitle: 'Creating the future of digital experiences',
      description: 'We are a team of innovators, creators, and strategists passionate about transforming brands in the virtual space.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png'
    },
    {
      type: 'grid',
      id: 'mission',
      theme: 'purple',
      accent: 'green',
      title: 'Our Mission',
      subtitle: 'Why we exist',
      description: 'We are driven by a singular purpose: to transform how brands connect with their audience in the digital realm.',
      items: [
        {
          title: 'Innovation',
          description: 'Pushing boundaries with cutting-edge solutions.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Robot.png'
        },
        {
          title: 'Excellence',
          description: 'Delivering exceptional quality in every project.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Check.png'
        },
        {
          title: 'Impact',
          description: 'Creating meaningful results that drive success.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Refine.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'values',
      theme: 'pink',
      accent: 'purple',
      title: 'Our Values',
      subtitle: 'What drives us',
      description: 'Our core values shape everything we do and guide us in creating exceptional experiences.',
      items: [
        {
          title: 'Creativity',
          description: 'Thinking outside the box to solve challenges.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png'
        },
        {
          title: 'Collaboration',
          description: 'Working together to achieve greatness.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Process.png'
        },
        {
          title: 'Growth',
          description: 'Continuously learning and evolving.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'team',
      theme: 'purple',
      accent: 'yellow',
      title: 'Our Team',
      subtitle: 'The people behind the magic',
      description: 'Meet the passionate individuals who bring our vision to life.',
      items: [
        {
          title: 'Innovators',
          description: 'Pushing the boundaries of what\'s possible.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png'
        },
        {
          title: 'Creators',
          description: 'Crafting beautiful digital experiences.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
        },
        {
          title: 'Strategists',
          description: 'Planning the path to success.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png'
        }
      ]
    },
    {
      type: 'action',
      id: 'about-cta',
      theme: 'purple',
      accent: 'pink',
      title: 'Ready to work with us?',
      subtitle: "Let's create something amazing together",
      description: 'Join us in shaping the future of brand experiences in the virtual space.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Cogs.png',
      cta: {
        label: 'Get Started',
        href: '/contact'
      }
    }
  ] as ContentBlock[]
};
