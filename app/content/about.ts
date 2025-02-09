import { PageContent } from '../../types/content';

export const aboutContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'about-hero',
      title: 'Crafting Digital Experiences Together',
      description: 'Discover the story, mission, and values that drive our passion for creating immersive brand experiences.',
      image: ''
    },
    {
      type: 'grid',
      id: 'our-story',
      title: 'Pioneering Virtual Worlds',
      theme: 'pink',
      description: "Graphigem was born from a shared passion for the transformative power of virtual worlds. We recognized the immense potential for brands to connect with their audiences in these immersive environments, unlocking unprecedented levels of engagement and value. We set out to empower businesses to transcend the limitations of traditional marketing and create truly captivating brand experiences in the metaverse. Our journey began with a vision to bridge the gap between physical and digital brand experiences, and we've been pushing the boundaries of what's possible ever since.",
      items: [
        {
          title: 'Innovation First',
          description: 'We constantly explore new technologies and creative approaches to deliver cutting-edge virtual experiences.',
          icon: '/icons/GD-Icon-011.png',
          background: 'pinkWave'
        },
        {
          title: 'Brand-Centric',
          description: 'Every virtual world we create is uniquely crafted to amplify and enhance your brand identity.',
          icon: '/icons/GD-Icon-012.png',
          background: 'pinkWave'
        },
        {
          title: 'Future-Ready',
          description: 'We stay ahead of digital trends to ensure your brand is positioned for success in the evolving metaverse.',
          icon: '/icons/GD-Icon-013.png',
          background: 'pinkWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-mission',
      title: 'Empowering Brands Worldwide',
      theme: 'green',
      description: "Our mission is to enable brands to unleash their greatest potential in digital worlds. We provide the expertise, creativity, and cutting-edge technology to transform brand visions into reality. We're committed to helping our clients navigate the complexities of the metaverse and create immersive experiences that resonate with their target audiences.",
      items: [
        {
          title: 'Transform',
          description: 'Turn your brand vision into immersive virtual experiences that captivate and engage.',
          icon: '/icons/GD-Icon-014.png',
          background: 'greenWave'
        },
        {
          title: 'Connect',
          description: 'Build meaningful connections with your audience through interactive virtual environments.',
          icon: '/icons/GD-Icon-015.png',
          background: 'greenWave'
        },
        {
          title: 'Grow',
          description: 'Scale your brand presence in the metaverse and unlock new opportunities for engagement.',
          icon: '/icons/GD-Icon-016.png',
          background: 'greenWave'
        }
      ]
    },
    {
      type: 'grid',
      id: 'our-vision',
      title: 'Sparking Digital Innovation',
      theme: 'yellow',
      description: "We believe that imagination is the key to unlocking the full potential of the metaverse. Our vision is to spark the imagination of both brands and their customers, creating a world of limitless possibilities. We strive to be at the forefront of innovation, constantly exploring new ways to push the boundaries of virtual experiences and redefine how brands connect with their audiences.",
      items: [
        {
          title: 'Adventure',
          description: 'We embrace the spirit of exploration and innovation, constantly seeking new challenges and pushing limits.',
          icon: '/icons/GD-Icon-017.png',
          background: 'yellowWave'
        },
        {
          title: 'Autonomy',
          description: 'We empower our team to take ownership of their work, fostering creativity and independent thinking.',
          icon: '/icons/GD-Icon-018.png',
          background: 'yellowWave'
        },
        {
          title: 'Trust',
          description: 'We build trust through transparency, integrity, and a commitment to delivering exceptional results.',
          icon: '/icons/GD-Icon-019.png',
          background: 'yellowWave'
        }
      ]
    },
    {
      type: 'action',
      id: 'about-cta',
      theme: 'purple',
      accent: 'pink',
      image: '/icons/GD-Icon-020.png',
      title: 'Imagine Your Virtual World',
      description: 'Join us in creating immersive brand experiences that captivate and inspire.',
      cta: {
        label: 'Start Your Journey',
        href: '/contact'
      }
    }
  ]
};
