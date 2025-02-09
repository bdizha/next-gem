'use client';

import React, { useState } from 'react';
import styles from './Tabs.module.scss';

type TabItem = {
  title: string;
  titleAccent?: string;
  accentColor?: string;
};

type TabsProps = {
  items: TabItem[];
};

export function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {item.titleAccent && (
              <span className={`${styles.accent} ${styles[item.accentColor || '']}`}>
                {item.titleAccent}
              </span>
            )}
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
