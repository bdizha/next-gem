'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { ScrollSection } from '../../components/ScrollSection/ScrollSection';
import classNames from 'classnames';

export default function About() {
  const team = [
    {
      theme: "purple",
      src: "/team/Bold-Team-Drijke-WB.png",
      title: "Creative Art",
      subtitle: "Drijke Wessels",
      text: "Always expanding my knowledge while spreading magic through imagination.",
    },
    {
      theme: "yellow",
      src: "/team/Bold-Team-KG-WB.png",
      title: "3D Modeling",
      subtitle: "Kagiso Silindane",
      text: "Dedicated to introducing unique skills into animation and art.",
    },
    {
      theme: "purple",
      src: "/team/Bold-Team-Bata-01WB.png",
      title: "Technologist",
      subtitle: "Batanayi Matuku",
      text: "Obsessed with ideating and architecting branding solutions and building bold things for innovative and unique brands.",
    },
    {
      theme: "green",
      src: "/team/Bold-Team-Sibu-WB.png",
      title: "3D Artist",
      subtitle: "Sibusiso Nkosi",
      text: "Everday we dream it, we'll make it the best we can. If you just think of the job, the credit will automatically follow.",
    },
    {
      theme: "purple",
      src: "/team/Bold-Team-Casey-WB.png",
      title: "3D Animation",
      subtitle: "Casey Watson",
      text: "I'm an enthusiastic creative, and am always eager to learn more. Aside from Asset production and animation, I enjoy singing, dancing and acting.",
    },
    {
      theme: "pink",
      src: "/team/Bold-Team-Jason-WB.png",
      title: "3D Artist",
      subtitle: "Jason Grobler",
      text: "All creative people want to do the unexpected and the crazy stuff too. I find myself happy with little things like drawing.",
    },
    {
      theme: "yellow",
      src: "/team/Bold-Team-Michaela-WB.png",
      title: "3D Modelling",
      subtitle: "Michaela Bothner",
      text: "I'm a highly creative, energetic and innovative 3D modeller with a strong background in character design and development.",
    },
  ];

  const values = [
    {
      src: "/icons/GD-Icon-014.png",
      theme: "pink",
      title: <span className="text-pink">Adventure</span>,
      text: <><span className="text-pink">We</span> serve unique and disruptive brands of all sizes and are fanatical about their success.</>,
    },
    {
      src: "/icons/GD-Icon-012.png",
      theme: "green",
      title: <span className="text-green">Autonomy</span>,
      text: <><span className="text-green">It's</span> about dreaming big and changing the game.</>,
    },
    {
      src: "/icons/GD-Icon-007.png",
      theme: "yellow",
      title: <span className="text-yellow">Courage</span>,
      text: <><span className="text-yellow">We</span> always seek ways to challenge the status quo.</>,
    },
    {
      src: "/icons/GD-Icon-003.png",
      theme: "purple",
      title: <span className="text-purple">Trust</span>,
      text: <><span className="text-purple">We</span> practice trust and transparency with our partners.</>,
    },
  ];

  const sections = [
    {
      id: 'vision',
      title: 'Our Vision',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-purple">Vision</span></h2>
          <p>
            To be the leading creative agency that transforms brands through innovative design solutions.
            We envision a world where every brand has the power to inspire and connect through exceptional design.
          </p>
        </div>
      ),
      waveClass: 'waveLight'
    },
    {
      id: 'story',
      title: 'Our Story',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-green">Story</span></h2>
          <p>
            We are a dynamic team of creative professionals passionate about crafting unique digital experiences. 
            Our journey began with a simple vision: to help brands stand out in the digital landscape through 
            innovative design and cutting-edge technology.
          </p>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.avatar}>
                  <Image src={member.src} alt={member.subtitle} width={120} height={120} />
                </div>
                <h3>{member.subtitle}</h3>
                <h4>{member.title}</h4>
                <p>{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      waveClass: 'waveGreenPurple'
    },
    {
      id: 'values',
      title: 'Our Values',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-yellow">Values</span></h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.icon}>
                  <Image src={value.src} alt="" width={64} height={64} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      waveClass: 'waveYellowPurple'
    }
  ];

  const [activeSection, setActiveSection] = React.useState(sections[0].id);

  const handleTabClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      <div className={styles.tabsContainer}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleTabClick(section.id)}
            className={classNames(styles.tab, {
              [styles.active]: activeSection === section.id
            })}
          >
            {section.title}
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <ScrollSection
          key={section.id}
          id={section.id}
          className={classNames(styles.section, styles[section.waveClass])}
        >
          {section.content}
        </ScrollSection>
      ))}
    </main>
  );
}
