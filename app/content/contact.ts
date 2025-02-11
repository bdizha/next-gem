import { ContentBlock } from '../../types/content';

export const contactContent = {
  blocks: [
    {
      type: 'hero',
      id: 'contact-hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Get in Touch',
      subtitle: "Let's create something amazing together",
      description: 'Ready to transform your brand in the virtual space? We\'re here to help bring your vision to life.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Our-Story.png'
    },
    {
      type: 'grid',
      id: 'contact-options',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'How to Reach Us',
      subtitle: 'Multiple ways to connect',
      description: 'Choose the method that works best for you to start the conversation.',
      items: [
        {
          title: 'Schedule a Call',
          description: 'Book a consultation to discuss your project in detail.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Profile.png'
        },
        {
          title: 'Send a Message',
          description: 'Write to us about your project and goals.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Process.png'
        },
        {
          title: 'Visit Our Office',
          description: 'Come meet our team in person.',
          icon: '/assets/GD-2D/GD-Illustrations/GD-Illustration-Skills.png'
        }
      ]
    },
    {
      type: 'banner',
      id: 'contact-cta',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Ready to start your journey?',
      subtitle: 'Transform your brand today',
      description: 'Take the first step towards creating an unforgettable digital experience.',
      image: '/assets/GD-2D/GD-Illustrations/GD-Illustration_Rocket.png'
    }
  ] as ContentBlock[]
};
