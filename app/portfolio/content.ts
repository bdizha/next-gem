import { ContentBlock } from '../../types/content';

export const portfolioContent = {
  blocks: [
    {
      type: 'hero',
      id: 'portfolio-hero',
      theme: 'purple',
      accent: 'pink',
      title: 'Our Portfolio',
      subtitle: 'Transforming brands in the virtual space',
      description: 'Explore our collection of innovative digital experiences and brand transformations.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
    },
    {
      type: 'grid',
      id: 'portfolio-highlights',
      theme: 'purple',
      accent: 'green',
      title: 'Featured Projects',
      subtitle: 'Recent success stories',
      description: 'Discover how we\'ve helped brands create memorable digital experiences.',
      items: [
        {
          title: 'Virtual Showrooms',
          description: 'Immersive digital spaces that showcase products and brand stories.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png',
          background: 'pinkWave'
        },
        {
          title: 'Brand Experiences',
          description: 'Interactive digital journeys that engage and inspire audiences.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png',
          background: 'purpleWave'
        },
        {
          title: 'Digital Assets',
          description: 'Unique visual elements that strengthen brand identity.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'portfolio-cta',
      theme: 'purple',
      accent: 'pink',
      title: 'Ready to create your success story?',
      subtitle: "Let's build something amazing together",
      description: 'Transform your brand with our innovative digital solutions.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png',
      cta: {
        label: 'Start Your Project',
        href: '/contact'
      }
    }
  ] as ContentBlock[]
};
