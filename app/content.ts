import { ContentBlock } from '../types/content';

export const homeContent = {
  blocks: [
    {
      type: 'hero',
      id: 'hero',
      theme: 'purple',
      accent: 'pink',
      title: 'Virtual Worlds, Real Impact',
      subtitle: 'Step into the next era of brand engagement with virtual worlds and spatial branding experiences.',
      description: 'We create immersive digital experiences that transform how brands connect with their audience in the virtual space.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png'
    },
    // Video player section (hidden for now)
    // {
    //   type: 'player',
    //   id: 'intro-video',
    //   theme: 'purple',
    //   src: '/videos/BoldIcon/BOLDMAN-SHOWCASING-EROS.mp4',
    //   description: 'Our Vision in Motion'
    // },
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
      id: 'unleash-brand',
      theme: 'pink',
      accent: 'purple',
      title: 'Unleash Your Brand',
      subtitle: 'Stand out in the digital landscape',
      items: [
        {
          title: 'Brand Strategy',
          description: 'Develop a comprehensive digital brand strategy that resonates with your audience.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Control.png',
          background: 'pinkWave'
        },
        {
          title: 'Visual Identity',
          description: 'Create a distinctive visual language that sets your brand apart.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Goggles.png',
          background: 'purpleWave'
        },
        {
          title: 'Digital Assets',
          description: 'Build a library of digital assets that strengthen your brand presence.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'our-approach',
      theme: 'purple',
      accent: 'pink',
      buttonStyle: 'solid',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Vision.png',
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
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png',
      title: 'Get in Touch',
      subtitle: 'Ready to transform your brand with immersive digital experiences? Let\'s start a conversation about your project.',
      buttonText: 'Contact Us',
      buttonLink: '/#contact-us'
    }
  ] as ContentBlock[]
};
