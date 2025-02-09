import { ContentBlock } from '../types/content';

export const homeContent = {
  blocks: [
    {
      type: 'hero',
      id: 'hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Virtual Worlds, Real Impact',
      subtitle: 'Step into the next era of brand engagement with virtual worlds and spatial branding experiences.',
      description: 'We create immersive digital experiences that transform how brands connect with their audience in the virtual space.',
      image: '/assets/GD-2D/GD-Icon/GD-P-Icon-White.png'
    },
    {
      type: 'grid',
      id: 'envision-future',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Envision the Future',
      subtitle: 'Create lasting impressions in virtual spaces',
      items: [
        {
          title: 'Virtual Worlds',
          description: 'Build immersive digital environments that showcase your brand in innovative ways.',
          image: '/icons/GD-Icon-011.png'
        },
        {
          title: 'Digital Characters',
          description: 'Bring your brand to life with unique character designs and animations.',
          image: '/icons/GD-Icon-012.png'
        },
        {
          title: 'Brand Integration',
          description: 'Seamlessly integrate your brand into virtual experiences.',
          image: '/icons/GD-Icon-013.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'unleash-brand',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Unleash Your Brand',
      subtitle: 'Stand out in the digital landscape',
      items: [
        {
          title: 'Brand Strategy',
          description: 'Develop a comprehensive digital brand strategy that resonates with your audience.',
          image: '/icons/GD-Icon-014.png'
        },
        {
          title: 'Visual Identity',
          description: 'Create a distinctive visual language that captures your brand essence.',
          image: '/icons/GD-Icon-015.png'
        },
        {
          title: 'Digital Experience',
          description: 'Design intuitive and engaging digital touchpoints.',
          image: '/icons/GD-Icon-016.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'delight-customer',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Delight Your Customers',
      subtitle: 'Create memorable brand experiences',
      items: [
        {
          title: 'Interactive Design',
          description: 'Build engaging interactions that keep users coming back.',
          image: '/icons/GD-Icon-017.png'
        },
        {
          title: 'User Experience',
          description: 'Craft seamless experiences that guide users naturally.',
          image: '/icons/GD-Icon-018.png'
        },
        {
          title: 'Performance',
          description: 'Optimize for speed and reliability across all platforms.',
          image: '/icons/GD-Icon-019.png'
        }
      ]
    },
    {
      type: 'action',
      id: 'our-approach',
      theme: 'purple',
      accent: 'darkPurple',
      buttonStyle: 'solid',
      image: '/icons/GD-Icon-020.png',
      title: 'Our Approach',
      subtitle: 'We believe in a collaborative approach to creating virtual worlds. Our team works closely with you to understand your vision and bring it to life in ways that exceed expectations.',
      buttonText: 'Learn More',
      buttonLink: '/approach'
    },
    {
      type: 'action',
      id: 'contact-us',
      theme: 'darkPurple',
      accent: 'purple',
      buttonStyle: 'outline',
      image: '/icons/GD-Icon-021.png',
      title: 'Get in Touch',
      subtitle: 'Ready to transform your brand with immersive digital experiences? Let\'s start a conversation about your project.',
      buttonText: 'Contact Us',
      buttonLink: '/#contact-us'
    }
  ] as ContentBlock[]
};
