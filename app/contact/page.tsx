'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { ScrollSection } from '../../components/ScrollSection/ScrollSection';
import classNames from 'classnames';

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
  waveClass: string;
};

export default function Contact() {
  const sections: Section[] = [
    {
      id: 'connect',
      title: 'Connect',
      content: (
        <div className={styles.sectionContent}>
          <h2>Get in <span className="text-purple">Touch</span></h2>
          <p>Ready to start your next project? We'd love to hear from you!</p>
          <div className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows={5}></textarea>
            </div>
            <button className={styles.submitButton}>Send Message</button>
          </div>
        </div>
      ),
      waveClass: 'waveLight'
    },
    {
      id: 'offices',
      title: 'Offices',
      content: (
        <div className={styles.sectionContent}>
          <h2>Our <span className="text-green">Locations</span></h2>
          <p>Find us at our offices around South Africa.</p>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-004.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>Cape Town</h3>
              <p>123 Long Street<br />Cape Town, 8001<br />South Africa</p>
              <a href="tel:+27123456789" className={styles.contactLink}>+27 12 345 6789</a>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-005.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>Johannesburg</h3>
              <p>456 Jan Smuts Avenue<br />Johannesburg, 2196<br />South Africa</p>
              <a href="tel:+27123456789" className={styles.contactLink}>+27 12 345 6789</a>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-006.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>Remote</h3>
              <p>We work with clients<br />worldwide through our<br />remote team</p>
              <a href="mailto:info@graphigem.com" className={styles.contactLink}>info@graphigem.com</a>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveGreenPurple'
    },
    {
      id: 'social',
      title: 'Social',
      content: (
        <div className={styles.sectionContent}>
          <h2>Follow <span className="text-yellow">Us</span></h2>
          <p>Stay connected with us on social media for the latest updates and inspiration.</p>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-007.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>Instagram</h3>
              <p>Follow our creative journey and get inspired by our latest work.</p>
              <a href="https://instagram.com/graphigem" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                @graphigem
              </a>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-008.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with our team and stay updated on company news.</p>
              <a href="https://linkedin.com/company/graphigem" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GraphiGem Digital
              </a>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image src="/GD-2D/GD-Icon/GD-Icon-009.png" alt="" width={120} height={120} className={styles.cardImage} />
              </div>
              <h3>Twitter</h3>
              <p>Join the conversation and get real-time updates.</p>
              <a href="https://twitter.com/graphigem" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                @graphigem
              </a>
            </div>
          </div>
        </div>
      ),
      waveClass: 'waveYellowPurple'
    }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

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
