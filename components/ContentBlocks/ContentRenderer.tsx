'use client';

import React, { useState } from 'react';
import { Hero } from '../Hero/Hero';
import { Grid } from '../Grid/Grid';
import { Action } from '../Action/Action';
import styles from './ContentBlocks.module.scss';
import { usePathname } from 'next/navigation';
import { scapeClasses, contentBannerClasses, getRandomClass } from '../../utils/backgrounds';
import { TabsComponent as Tabs } from '../Tabs/Tabs';
import clsx from 'clsx';

export interface ContentBlock {
  id: string;
  type: 'hero' | 'grid' | 'action';
  titleAccent?: string;
  title?: string;
  accentColor?: string;
  description?: string;
  image?: string;
  items?: any[];
  theme?: string;
  accent?: string;
}

export interface ContentRendererProps {
  content: {
    tabs?: {
      id: string;
      title: string;
      titleAccent?: string;
      accentColor?: string;
      content: ContentBlock[];
    }[];
    content: ContentBlock[];
  };
}

const BLOCK_COMPONENTS = {
  hero: Hero,
  grid: Grid,
  action: Action,
} as const;

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [activeTab, setActiveTab] = useState<string>(content.tabs?.[0]?.id || '');
  const hasTabs = content.tabs && content.tabs.length > 0;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const currentContent = hasTabs
    ? content.tabs.find((tab) => tab.id === activeTab)?.content || []
    : content.content || [];

  return (
    <>
      {hasTabs && (
        <Tabs 
          tabs={content.tabs.map(tab => ({
            id: tab.id,
            title: tab.title,
            titleAccent: tab.titleAccent,
            accentColor: tab.accentColor
          }))} 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
      )}
      <div>
        {currentContent.map((block, index) => {
          const isFirst = index === 0;
          const isLast = index === currentContent.length - 1;
          const scapeClass = getRandomClass(scapeClasses);
          const contentBannerClass = getRandomClass(contentBannerClasses);

          // Position logic:
          // 1. Home page hero is always top
          // 2. Other sections alternate between top and bottom
          let positionClass;
          if (isHomePage && block.type === 'hero') {
            positionClass = 'top';
          } else if (isLast) {
            positionClass = 'final';
          } else {
            positionClass = index % 2 === 0 ? 'top' : 'bottom';
          }

          const Component = BLOCK_COMPONENTS[block.type];

          if (!Component) {
            console.warn(`No component found for block type: ${block.type}`);
            return null;
          }

          return (
            <section 
              key={block.id} 
              className={clsx(
                styles.section,
                styles[scapeClass],
                styles[contentBannerClass],
                styles[positionClass]
              )}
            >
              <div className={styles.content}>
                <Component {...block} />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default ContentRenderer;
