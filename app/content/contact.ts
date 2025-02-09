import { PageContent } from '../../types/content';

export const contactContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'contact-hero',
      titleAccent: 'Get in',
      title: 'Touch',
      accentColor: 'purple',
      description: 'Ready to start your journey into the metaverse? We\'d love to hear from you.',
      image: '/images/contact-hero.mp4'
    },
    {
      type: 'grid',
      id: 'contact-methods',
      title: 'Connect With Us',
      titleAccent: 'Let\'s Talk',
      accentColor: 'purple',
      description: 'Choose the best way to reach out and start a conversation about your brand\'s future in the metaverse.',
      items: [
        {
          title: 'Schedule a Call',
          description: 'Book a consultation with our team to discuss your vision.',
          icon: '/icons/GD-Icon-029.png',
          background: 'purpleWave'
        },
        {
          title: 'Send a Message',
          description: 'Fill out our contact form and we\'ll get back to you promptly.',
          icon: '/icons/GD-Icon-030.png',
          background: 'purpleWave'
        },
        {
          title: 'Visit Us',
          description: 'Meet us in person or in our virtual office space.',
          icon: '/icons/GD-Icon-031.png',
          background: 'purpleWave'
        }
      ]
    }
  ]
};
