'use client';

import React from 'react';
import styles from './Tabs.module.scss';
import clsx from 'clsx';

interface Tab {
  id: string;
  title: string;
  titleAccent?: string;
  accentColor?: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabsComponent: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.tabsContainer}>
      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tab, {
              [styles.active]: activeTab === tab.id,
            })}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.titleAccent && (
              <span className={clsx(styles.accent, styles[tab.accentColor || 'green'])}>
                {tab.titleAccent}
              </span>
            )}
            {tab.title}
          </button>
        ))}
      </nav>
    </div>
  );
};
