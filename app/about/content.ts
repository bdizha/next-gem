import { PageContent } from '../../types/content';

export const aboutContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'about-hero',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Our Mission',
      subtitle: 'To entertain the world',
      description: 'We believe that future generations will experience the world through the lens of imagination. At Graphigem, we transform those imaginative visions into captivating brand experiences within the virtual space.',
      image: '/assets/GD-2D/GD-Icon/GD-P-Icon-White.png'
    },
    {
      type: 'grid',
      id: 'our-story',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Our Story',
      subtitle: 'Building the future of brand experiences',
      description: "Graphigem was born from a shared passion: to empower brands to connect with their audiences in the immersive world of the virtual space. We envisioned a future where brands could transcend traditional marketing, creating truly captivating experiences. We're building that future, pixel by pixel.",
      items: [
        {
          title: 'Customer First',
          description: 'We constantly explore and implement the latest technologies and creative strategies to deliver cutting-edge virtual experiences.',
          icon: '/icons/GD-Icon-011.png'
        },
        {
          title: 'Brand-Centric',
          description: 'Your brand is unique. We craft every virtual world to amplify your identity and resonate with your target audience.',
          icon: '/icons/GD-Icon-012.png'
        },
        {
          title: 'Future-Ready',
          description: 'The virtual space is evolving. We stay ahead of the curve, ensuring your brand is positioned for success in this dynamic landscape.',
          icon: '/icons/GD-Icon-013.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-mission',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Our Mission',
      subtitle: 'Empowering brands in the virtual space',
      description: "Our mission is to empower brands to unleash their full potential in the virtual space. We provide the expertise, creativity, and technology to transform brand visions into reality, creating immersive experiences that truly connect.",
      items: [
        {
          title: 'Transform',
          description: 'We translate your brand vision into captivating virtual experiences that engage and inspire your audience.',
          icon: '/icons/GD-Icon-014.png'
        },
        {
          title: 'Connect',
          description: 'We help you build meaningful connections with your audience through interactive and immersive virtual environments.',
          icon: '/icons/GD-Icon-015.png'
        },
        {
          title: 'Scale',
          description: 'Expand your brand presence in the virtual space and unlock new opportunities for engagement and growth.',
          icon: '/icons/GD-Icon-016.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-vision',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Our Vision',
      subtitle: 'Sparking imagination in the digital realm',
      description: "We believe imagination is the key to unlocking the virtual space's full potential. Our vision is to ignite the imaginations of brands and their customers, creating a world of limitless possibilities and redefining brand engagement.",
      items: [
        {
          title: 'Innovation',
          description: 'We embrace exploration and relentlessly pursue new ways to push the boundaries of virtual experiences.',
          icon: '/icons/GD-Icon-017.png'
        },
        {
          title: 'Collaboration',
          description: 'We work closely with our clients, fostering open communication and building strong partnerships.',
          icon: '/icons/GD-Icon-018.png'
        },
        {
          title: 'Excellence',
          description: 'We are committed to delivering exceptional results through meticulous attention to detail and unwavering dedication.',
          icon: '/icons/GD-Icon-019.png'
        }
      ]
    },
    {
      type: 'team',
      id: 'our-team',
      theme: 'darkPurple',
      accent: 'purple',
      title: 'Our Team',
      subtitle: 'The creators behind the magic',
      description: 'Our team comprises talented creators, innovators, and strategists passionate about shaping the future of brand experiences in the virtual space.',
      members: [
        {
          name: 'Alex Chen',
          role: 'Creative Director',
          image: '/images/team/alex.jpg',
          description: 'A visionary leader with over 10 years of experience in digital brand experiences and virtual world design.'
        },
        {
          name: 'Sarah Martinez',
          role: 'Technical Director',
          image: '/images/team/sarah.jpg',
          description: 'An expert in immersive technologies and virtual environment development, bringing technical expertise to every project.'
        },
        {
          name: 'James Wilson',
          role: 'Brand Strategist',
          image: '/images/team/james.jpg',
          description: 'A brand strategist specializing in translating brand identities into compelling and engaging virtual experiences.'
        }
      ]
    },
    {
      type: 'action',
      id: 'about-cta',
      theme: 'purple',
      accent: 'darkPurple',
      title: 'Ready to Build Your Virtual World?',
      subtitle: 'Let us help you create immersive brand experiences that captivate, inspire, and drive results.',
      description: 'Let us help you create immersive brand experiences that captivate, inspire, and drive results.',
      cta: {
        label: 'Start Your Journey',
        href: '/contact'
      }
    }
  ]
};