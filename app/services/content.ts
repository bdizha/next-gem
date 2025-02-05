import { PageContent } from '../../types/content';

export const servicesContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      titleAccent: 'Our',
      title: 'services',
      accentColor: 'pink',
      description: 'We believe in a systematic approach to branding that combines vision, execution, and continuous evaluation. Our three-step process ensures your brand not only stands out but also delivers measurable results and sustainable growth.',
    },
    {
      type: 'grid',
      columns: 3,
      items: [
        {
          title: 'It',
          titleAccent: 'Envision',
          accentColor: 'green',
          description: 'We help you craft a compelling vision for your brand, defining clear goals and strategies that align with your values and resonate with your target audience.',
          icon: '/icons/GD-Icon-012.png',
          background: 'greenWave',
        },
        {
          title: 'It',
          titleAccent: 'Apply',
          accentColor: 'purple',
          description: 'Our team brings your vision to life through expert design, development, and implementation, ensuring every detail reflects your brand\'s unique identity.',
          icon: '/icons/GD-Icon-008.png',
          background: 'purpleWave',
        },
        {
          title: 'It',
          titleAccent: 'Evaluate',
          accentColor: 'yellow',
          description: 'We continuously monitor and assess your brand\'s performance, making data-driven adjustments to optimize impact and ensure long-term success.',
          icon: '/icons/GD-Icon-007.png',
          background: 'yellowWave',
        },
      ],
    },
    {
      type: 'action',
      theme: 'green',
      accent: 'darkGreen',
      image: '/icons/GD-Icon-009.png',
      titleAccent: 'Transform',
      title: 'your brand',
      description: 'Ready to take your brand to the next level? Let\'s create something extraordinary together.',
    },
  ],
};
