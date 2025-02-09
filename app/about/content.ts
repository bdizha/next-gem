import { PageContent } from '../../types/content';

export const aboutContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'about-hero',
      titleAccent: 'Building Worlds,',
      title: 'Unleashing Brands',
      accentColor: 'purple',
      description: 'Discover the story, mission, and values that drive our passion for creating immersive brand experiences.',
      image: '/images/about-hero.mp4'
    },
    {
      type: 'grid',
      id: 'our-story',
      title: 'Our Story',
      titleAccent: 'Forged in the Metaverse:',
      accentColor: 'pink',
      description: "Graphigem was born from a shared passion for the transformative power of virtual worlds. We recognized the immense potential for brands to connect with their audiences in these immersive environments, unlocking unprecedented levels of engagement and value. We set out to empower businesses to transcend the limitations of traditional marketing and create truly captivating brand experiences in the metaverse. Our journey began with a vision to bridge the gap between physical and digital brand experiences, and we've been pushing the boundaries of what's possible ever since.",
      items: [
        {
          title: 'Innovation First',
          description: 'We constantly explore new technologies and creative approaches to deliver cutting-edge virtual experiences.',
          icon: '/icons/GD-Icon-011.png'
        },
        {
          title: 'Brand-Centric',
          description: 'Every virtual world we create is uniquely crafted to amplify and enhance your brand identity.',
          icon: '/icons/GD-Icon-012.png'
        },
        {
          title: 'Future-Ready',
          description: 'We stay ahead of digital trends to ensure your brand is positioned for success in the evolving metaverse.',
          icon: '/icons/GD-Icon-013.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-mission',
      title: 'Our Mission',
      titleAccent: 'Empowering Brands',
      accentColor: 'green',
      description: "Our mission is to enable brands to unleash their greatest potential in digital worlds. We provide the expertise, creativity, and cutting-edge technology to transform brand visions into reality. We're committed to helping our clients navigate the complexities of the metaverse and create immersive experiences that resonate with their target audiences.",
      items: [
        {
          title: 'Transform',
          description: 'Turn your brand vision into immersive virtual experiences that captivate and engage.',
          icon: '/icons/GD-Icon-014.png'
        },
        {
          title: 'Connect',
          description: 'Build meaningful connections with your audience through interactive virtual environments.',
          icon: '/icons/GD-Icon-015.png'
        },
        {
          title: 'Grow',
          description: 'Scale your brand presence in the metaverse and unlock new opportunities for engagement.',
          icon: '/icons/GD-Icon-016.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-vision',
      title: 'Our Vision',
      titleAccent: 'Sparking',
      accentColor: 'yellow',
      description: "We believe that imagination is the key to unlocking the full potential of the metaverse. Our vision is to spark the imagination of both brands and their customers, creating a world of limitless possibilities. We strive to be at the forefront of innovation, constantly exploring new ways to push the boundaries of virtual experiences and redefine how brands connect with their audiences.",
      items: [
        {
          title: 'Adventure',
          description: 'We embrace the spirit of exploration and innovation, constantly seeking new challenges and pushing limits.',
          icon: '/icons/GD-Icon-017.png'
        },
        {
          title: 'Autonomy',
          description: 'We empower our team to take ownership of their work, fostering creativity and independent thinking.',
          icon: '/icons/GD-Icon-018.png'
        },
        {
          title: 'Trust',
          description: 'We build trust through transparency, integrity, and a commitment to delivering exceptional results.',
          icon: '/icons/GD-Icon-019.png'
        }
      ]
    },
    {
      type: 'team',
      id: 'our-team',
      title: 'Our Team',
      titleAccent: 'Meet',
      accentColor: 'purple',
      description: 'A diverse group of creators, innovators, and strategists passionate about building the future of brand experiences.',
      members: [
        {
          name: 'Alex Chen',
          role: 'Creative Director',
          image: '/images/team/alex.jpg',
          description: 'Visionary leader with 10+ years in digital brand experiences and virtual world design.'
        },
        {
          name: 'Sarah Martinez',
          role: 'Technical Director',
          image: '/images/team/sarah.jpg',
          description: 'Expert in immersive technologies and virtual environment development.'
        },
        {
          name: 'James Wilson',
          role: 'Brand Strategist',
          image: '/images/team/james.jpg',
          description: 'Specialist in translating brand identities into compelling virtual experiences.'
        }
      ]
    },
    {
      type: 'action',
      id: 'about-cta',
      theme: 'purple',
      accent: 'pink',
      image: '/icons/GD-Icon-020.png',
      title: 'Ready to Build Your Virtual World?',
      description: 'Join us in creating immersive brand experiences that captivate and inspire.',
      cta: {
        label: 'Start Your Journey',
        href: '/contact'
      }
    }
  ]
};
