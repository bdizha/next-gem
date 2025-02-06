"use client"

import React, { useState } from 'react';
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ScrollSection } from '@/components/ScrollSection/ScrollSection';
import { homeContent } from './content';
import styles from "./page.module.scss";
import classNames from 'classnames';

type WaveClass = 'waveLight' | 'waveGreenPurple' | 'waveYellowPurple';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const waveClasses: WaveClass[] = ['waveLight', 'waveGreenPurple', 'waveYellowPurple'];
  const tabNames = ['Envision It', 'Apply It', 'Refine It'];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {homeContent.blocks.map((block, index) => {
          const waveClass = waveClasses[index] as keyof typeof styles;
          return (
            <ScrollSection
              key={index}
              className={classNames(styles.section, styles[waveClass])}
              content={block}
            />
          );
        })}
        <div className={styles.tabsContainer}>
          {tabNames.map((name, index) => (
            <button
              key={index}
              className={classNames(styles.tab, {
                [styles.active]: activeTab === index
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
