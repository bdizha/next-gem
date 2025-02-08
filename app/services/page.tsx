'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { ScrollSection } from '../../components/ScrollSection/ScrollSection';
import classNames from 'classnames';

export default function Services() {
  const sections = [
    {
      id: 'branding',
      title: 'Branding',
      content: (
        <div className={styles.sectionContent}>
          <h2>Brand <span className="text-purple">Design</span></h2>
          <p>We create unique brand identities that tell your story and connect with your audience.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-001.png" alt="" width={64} height={64} />
              </div>
              <h3>Logo Design</h3>
              <p>Crafting memorable logos that capture your brand's essence.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-002.png" alt="" width={64} height={64} />
              </div>
              <h3>Brand Guidelines</h3>
              <p>Establishing consistent visual language and brand voice.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-003.png" alt="" width={64} height={64} />
              </div>
              <h3>Brand Strategy</h3>
              <p>Developing comprehensive brand strategies for market success.</p>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveLight'
    },
    {
      id: 'digital',
      title: 'Digital',
      content: (
        <div className={styles.sectionContent}>
          <h2>Digital <span className="text-green">Design</span></h2>
          <p>We create engaging digital experiences that drive results.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-004.png" alt="" width={64} height={64} />
              </div>
              <h3>Web Design</h3>
              <p>Creating beautiful, functional websites that convert.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-005.png" alt="" width={64} height={64} />
              </div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive interfaces and seamless user experiences.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-006.png" alt="" width={64} height={64} />
              </div>
              <h3>Digital Marketing</h3>
              <p>Driving growth through strategic digital marketing campaigns.</p>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveGreenPurple'
    },
    {
      id: 'animation',
      title: '3D & Animation',
      content: (
        <div className={styles.sectionContent}>
          <h2>3D & <span className="text-yellow">Animation</span></h2>
          <p>We bring ideas to life through stunning 3D animations and visual effects.</p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-007.png" alt="" width={64} height={64} />
              </div>
              <h3>3D Modeling</h3>
              <p>Creating detailed 3D models for any application.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-008.png" alt="" width={64} height={64} />
              </div>
              <h3>Character Animation</h3>
              <p>Bringing characters to life with fluid animation.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-009.png" alt="" width={64} height={64} />
              </div>
              <h3>Motion Graphics</h3>
              <p>Creating engaging motion graphics and visual effects.</p>
            </div>
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
