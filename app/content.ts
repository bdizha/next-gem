import { PageContent } from '../types/content';

export const homeContent: PageContent = {
  blocks: [
    {
      type: 'hero',
      id: 'home-hero',
      titleAccent: 'Building Immersive',
      title: 'Experiences',
      accentColor: 'white',
      description: 'Step into the next era of brand engagement with virtual worlds and spatial branding experiences.',
      // image: '/images/hero-video.mp4'
    },
    {
      type: 'grid',
      id: 'envision-future',
      title: 'Your Future',
      titleAccent: 'Envision',
      accentColor: 'pink',
      description: 'Step into the next era of brand engagement. Graphigem helps you imagine and build the future of your brand in immersive virtual worlds. We transform your vision into tangible, interactive experiences that captivate your audience and drive meaningful connections.',
      items: [
        {
          title: 'Spatial Storytelling',
          description: 'Craft compelling narratives that unfold in three-dimensional space, creating deeper emotional connections with your customers.',
          icon: '/icons/GD-Icon-001.png'
        },
        {
          title: 'Infinite Possibilities',
          description: "Explore limitless creative avenues and push the boundaries of what's possible with virtual world experiences. No physical constraints, just pure imagination.",
          icon: '/icons/GD-Icon-002.png'
        },
        {
          title: 'Future-Proof Your Brand',
          description: 'Position your brand at the forefront of innovation by embracing the transformative power of virtual worlds. Be ready for the future of customer interaction.',
          icon: '/icons/GD-Icon-003.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'unleash-brand',
      title: 'Your Brand',
      titleAccent: 'Unleash',
      accentColor: 'green',
      description: "Your brand is more than a logo—it's an experience. Graphigem empowers you to unleash the full potential of your brand by creating immersive virtual environments where customers can interact, explore, and connect with your brand on a deeper level.",
      items: [
        {
          title: 'Immersive Engagement',
          description: 'Create interactive brand experiences that leave a lasting impression, fostering brand loyalty and advocacy.',
          icon: '/icons/GD-Icon-004.png'
        },
        {
          title: 'Elevated Brand Presence',
          description: 'Establish a powerful and memorable presence in the metaverse, differentiating your brand from the competition.',
          icon: '/icons/GD-Icon-005.png'
        },
        {
          title: 'Data-Driven Insights',
          description: 'Gather valuable data on customer behavior and preferences within your virtual world, gaining insights to optimize your brand strategy.',
          icon: '/icons/GD-Icon-006.png'
        }
      ]
    },
    {
      type: 'grid',
      id: 'delight-customer',
      title: 'Your Customer',
      titleAccent: 'Delight',
      accentColor: 'yellow',
      description: 'Inspired by customer-centric philosophies of business leaders like Jeff Bezos and Steve Jobs, we believe in starting with the customer and working backward. We create delightful and engaging virtual experiences that exceed expectations.',
      items: [
        {
          title: 'Personalized Experiences',
          description: 'Tailor virtual experiences to individual customer preferences, creating personalized journeys that resonate and delight.',
          icon: '/icons/GD-Icon-007.png'
        },
        {
          title: 'Seamless Interactions',
          description: 'Facilitate effortless and intuitive interactions within your virtual world, ensuring a smooth and enjoyable customer experience.',
          icon: '/icons/GD-Icon-008.png'
        },
        {
          title: 'Building Community',
          description: 'Foster a sense of community among your customers by creating shared virtual experiences that encourage interaction and connection.',
          icon: '/icons/GD-Icon-009.png'
        }
      ]
    },
    {
      type: 'action',
      id: 'home-cta',
      theme: 'pink',
      accent: 'green',
      image: '/icons/GD-Icon-010.png',
      title: 'Bringing Virtual Worlds to Life',
      description: 'Experience how we transform brands through immersive virtual worlds. Explore our portfolio of successful projects including BoldLand, NaimLand, and ZudaLand.',
      cta: {
        label: 'Explore Our Portfolio',
        href: '/portfolio'
      }
    },
    {
      type: 'action',
      id: 'our-approach',
      theme: 'purple',
      accent: 'darkPurple',
      buttonStyle: 'solid',
      image: '/icons/GD-Icon-020.png',
      title: 'Our Services Approach',
      subtitle: 'We believe in a collaborative approach to creating virtual worlds. Our team works closely with you to understand your vision and bring it to life in ways that exceed expectations.',
      buttonText: 'Get in Touch',
      buttonLink: '/#contact-us'
    },
    {
      type: 'action',
      id: 'get-in-touch',
      theme: 'yellow',
      accent: 'darkYellow',
      buttonStyle: 'outline',
      image: '/icons/GD-Icon-021.png',
      title: 'Ready to Get Started?',
      subtitle: 'Let’s discuss how we can help bring your brand into the virtual world. Our team is ready to help you create an immersive experience that your customers will love.',
      buttonText: 'Get in Touch',
      buttonLink: '/#contact-us'
    }
  ]
};
