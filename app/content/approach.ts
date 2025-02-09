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
      image: '/assets/GD-2D/GD-Icon/GD-P-Icon-White.png'
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
          description: 'Developing comprehensive digital brand strategies that align with your business goals and resonate with your target audience.',
          image: '/icons/GD-Icon-001.png'
        },
        {
          title: 'Visual Identity',
          description: 'Creating distinctive visual elements that capture your brand essence and ensure consistency across digital platforms.',
          image: '/icons/GD-Icon-002.png'
        },
        {
          title: 'Digital Experience',
          description: 'Designing intuitive and engaging digital experiences that strengthen brand connection and drive user engagement.',
          image: '/icons/GD-Icon-003.png'
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
          image: '/icons/GD-Icon-004.png'
        },
        {
          title: 'Animation',
          description: 'Creating engaging animations that tell your brand story and capture audience attention.',
          image: '/icons/GD-Icon-005.png'
        },
        {
          title: 'Brand Integration',
          description: 'Seamlessly integrating characters into your brand ecosystem for consistent storytelling.',
          image: '/icons/GD-Icon-006.png'
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
          image: '/icons/GD-Icon-007.png'
        },
        {
          title: 'Interactive Experiences',
          description: 'Developing interactive features that encourage exploration and engagement within virtual spaces.',
          image: '/icons/GD-Icon-008.png'
        },
        {
          title: 'Digital Integration',
          description: 'Connecting virtual experiences with real-world brand touchpoints for seamless engagement.',
          image: '/icons/GD-Icon-009.png'
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
      image: '/icons/GD-Icon-010.png'
    }
  ] as ContentBlock[]
};
