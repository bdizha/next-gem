import { ContentBlock } from '../../types/content';

export const approachContent = {
  blocks: [
    {
      type: 'hero',
      id: 'approach-hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Our Approach',
      subtitle: 'Creating immersive digital experiences through innovative design and technology',
      description: 'We combine creativity, technology, and strategy to build memorable brand experiences in the virtual world.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png'
    },
    {
      type: 'grid',
      id: 'digital-branding',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Digital Branding',
      subtitle: 'Building strong digital identities',
      items: [
        {
          title: 'Brand Strategy',
          description: 'We develop comprehensive strategies that align with your goals.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png'
        },
        {
          title: 'Visual Identity',
          description: 'Creating distinctive visual languages that capture brand essence.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png'
        },
        {
          title: 'Digital Experience',
          description: 'Building immersive experiences that engage and inspire.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'character-branding',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Character Branding',
      subtitle: 'Bringing brands to life through unique characters',
      items: [
        {
          title: 'Character Design',
          description: 'Crafting unique brand mascots and characters that embody your brand personality and values.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png'
        },
        {
          title: 'Animation',
          description: 'Creating engaging animations that tell your brand story and capture audience attention.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Process.png'
        },
        {
          title: 'Brand Integration',
          description: 'Seamlessly integrating characters into your brand ecosystem for consistent storytelling.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'virtual-world',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Virtual World',
      subtitle: 'Creating immersive digital spaces',
      items: [
        {
          title: 'Virtual Environments',
          description: 'Building immersive virtual spaces that showcase your brand and engage users in unique ways.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Robot.png'
        },
        {
          title: 'Interactive Experiences',
          description: 'Developing interactive features that encourage exploration and engagement within virtual spaces.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Check.png'
        },
        {
          title: 'Digital Integration',
          description: 'Connecting virtual experiences with real-world brand touchpoints for seamless engagement.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Refine.png'
        }
      ]
    },
    {
      type: 'action',
      id: 'start-project',
      theme: 'darkPurple',
      accent: 'purple',
      buttonStyle: 'solid',
      title: 'Start Your Project',
      subtitle: 'Ready to transform your brand with our innovative approach?',
      buttonText: 'Get in Touch',
      buttonLink: '/#contact-us',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png'
    }
  ] as ContentBlock[]
};
