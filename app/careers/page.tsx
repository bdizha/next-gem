'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { ScrollSection } from '../../components/ScrollSection/ScrollSection';
import classNames from 'classnames';

export default function Careers() {
  const sections = [
    {
      id: 'opportunities',
      title: 'Opportunities',
      content: (
        <div className={styles.sectionContent}>
          <h2>Current <span className="text-purple">Openings</span></h2>
          <p>Join our team of creative professionals and help shape the future of digital design.</p>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-001.png" alt="" width={64} height={64} />
              </div>
              <h3>Senior 3D Artist</h3>
              <p className={styles.location}>Cape Town, South Africa</p>
              <p>Join our team to create stunning 3D visuals and animations for global brands.</p>
              <button className={styles.applyButton}>Apply Now</button>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-002.png" alt="" width={64} height={64} />
              </div>
              <h3>UI/UX Designer</h3>
              <p className={styles.location}>Remote</p>
              <p>Design beautiful and intuitive interfaces for web and mobile applications.</p>
              <button className={styles.applyButton}>Apply Now</button>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-003.png" alt="" width={64} height={64} />
              </div>
              <h3>Motion Designer</h3>
              <p className={styles.location}>Johannesburg, South Africa</p>
              <p>Create engaging motion graphics and animations for digital platforms.</p>
              <button className={styles.applyButton}>Apply Now</button>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveLight'
    },
    {
      id: 'culture',
      title: 'Culture',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-green">Culture</span></h2>
          <p>We foster a culture of creativity, innovation, and continuous learning.</p>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-004.png" alt="" width={64} height={64} />
              </div>
              <h3>Work-Life Balance</h3>
              <p>Flexible hours and remote work options to help you maintain a healthy balance.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-005.png" alt="" width={64} height={64} />
              </div>
              <h3>Growth & Learning</h3>
              <p>Regular workshops, training sessions, and opportunities to learn new skills.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-006.png" alt="" width={64} height={64} />
              </div>
              <h3>Collaborative Environment</h3>
              <p>Work with talented professionals and learn from diverse perspectives.</p>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveGreenPurple'
    },
    {
      id: 'benefits',
      title: 'Benefits',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-yellow">Benefits</span></h2>
          <p>We offer competitive benefits to support your professional and personal growth.</p>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-007.png" alt="" width={64} height={64} />
              </div>
              <h3>Health & Wellness</h3>
              <p>Comprehensive health insurance and wellness programs.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-008.png" alt="" width={64} height={64} />
              </div>
              <h3>Professional Development</h3>
              <p>Budget for courses, conferences, and certifications.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/icons/GD-Icon-009.png" alt="" width={64} height={64} />
              </div>
              <h3>Equipment & Tools</h3>
              <p>Latest hardware and software to support your work.</p>
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
