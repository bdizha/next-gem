'use client';

import React from 'react';
import { Hero } from '../Hero/Hero';
import { Grid } from '../Grid/Grid';
import { Action } from '../Action/Action';
import { ContentBlock } from '../../types/content';
import styles from './ContentBlocks.module.scss';
import { usePathname } from 'next/navigation';
import { scapeClasses, contentBannerClasses, getRandomClass } from '../../utils/backgrounds';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {blocks.map((block, index) => {
        const scapeClass = getRandomClass(scapeClasses);
        const contentBannerClass = getRandomClass(contentBannerClasses);
        
        // Position logic:
        // 1. Home page hero is always top
        // 2. Other sections alternate between top and bottom
        // 3. Last section is final
        let positionClass;
        if (isHomePage && block.type === 'hero') {
          positionClass = 'top';
        } else if (index === blocks.length - 1) {
          positionClass = 'final';
        } else {
          positionClass = index % 2 === 0 ? 'top' : 'bottom';
        }
        
        return (
          <section key={index} className={`${styles.section} ${styles[scapeClass]} ${styles[contentBannerClass]} ${styles[positionClass]}`}>
            <div className={styles.content}>
              {block.type === 'hero' && (
                <Hero
                  titleAccent={block.titleAccent}
                  title={block.title}
                  accentColor={block.accentColor}
                  description={block.description}
                  image={block.image}
                />
              )}
              {block.type === 'grid' && (
                <Grid
                  title={block.title}
                  titleAccent={block.titleAccent}
                  accentColor={block.accentColor}
                  items={block.items}
                />
              )}
              {block.type === 'action' && (
                <Action
                  title={block.title}
                  description={block.description}
                  theme={block.theme}
                  accent={block.accent}
                  image={block.image}
                />
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
