import { ContentBlock } from '../../types/content';

export const approachContent = {
  blocks: [
    {
      type: 'hero',
      id: 'approach-hero',
      theme: 'purple',
      accent: 'pink',
      title: 'Our Approach',
      subtitle: 'Creating immersive digital experiences through innovative design and technology',
      description: 'We combine creativity, technology, and strategy to build memorable brand experiences in the virtual world.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png'
    },
    {
      type: 'grid',
      id: 'digital-branding',
      theme: 'purple',
      accent: 'green',
      title: 'Digital Branding',
      subtitle: 'Building strong digital identities',
      items: [
        {
          title: 'Brand Strategy',
          description: 'We develop comprehensive strategies that align with your goals.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png',
          background: 'pinkWave'
        },
        {
          title: 'Visual Identity',
          description: 'Creating distinctive visual languages that capture brand essence.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png',
          background: 'purpleWave'
        },
        {
          title: 'Digital Experience',
          description: 'Building immersive experiences that engage and inspire.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'character-branding',
      theme: 'pink',
      accent: 'purple',
      title: 'Character Branding',
      subtitle: 'Bringing brands to life through unique characters',
      items: [
        {
          title: 'Character Design',
          description: 'Crafting unique brand mascots and characters that embody your brand personality and values.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png',
          background: 'pinkWave'
        },
        {
          title: 'Animation',
          description: 'Bringing characters to life through fluid motion and expressive animations.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Process.png',
          background: 'purpleWave'
        },
        {
          title: 'Integration',
          description: 'Seamlessly incorporating characters across digital touchpoints.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Check.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'virtual-worlds',
      theme: 'purple',
      accent: 'yellow',
      title: 'Virtual Worlds',
      subtitle: 'Creating immersive digital environments',
      items: [
        {
          title: 'World Building',
          description: 'Designing rich, interactive virtual environments that tell your brand story.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Robot.png',
          background: 'pinkWave'
        },
        {
          title: 'User Experience',
          description: 'Crafting intuitive navigation and engaging interactions.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Refine.png',
          background: 'purpleWave'
        },
        {
          title: 'Performance',
          description: 'Optimizing for smooth performance across all platforms.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'approach-cta',
      theme: 'purple',
      accent: 'pink',
      title: 'Ready to explore?',
      subtitle: "Let's bring your brand into the virtual space",
      description: 'Transform your brand with our innovative approach to digital experiences.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png',
      cta: {
        label: 'Start Your Journey',
        href: '/contact'
      }
    }
  ] as ContentBlock[]
};
