'use client';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollSection } from '../ScrollSection/ScrollSection';
import styles from './PageTemplate.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

type PageTemplateProps = {
  sections: {
    title: string;
    content: React.ReactNode;
    waveClass: 'waveLight' | 'waveGreenPurple' | 'waveYellowPurple';
  }[];
  tabs: string[];
};

export function PageTemplate({ sections, tabs }: PageTemplateProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            className={classNames(styles.section, styles[section.waveClass])}
          >
            {section.content}
          </ScrollSection>
        ))}
        <div className={styles.tabsContainer}>
          {tabs.map((name, index) => (
            <button
              key={index}
              className={classNames(styles.tab, {
                [styles.active]: activeTab === index,
              })}
              onClick={() => handleTabClick(index)}
            >
              {name}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
