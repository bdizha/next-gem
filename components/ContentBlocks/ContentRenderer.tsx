'use client';

import React from 'react';
import { Hero } from '../Hero/Hero';
import { Grid } from '../Grid/Grid';
import { Action } from '../Action/Action';
import { ContentBlock } from '../../types/content';
import styles from './ContentBlocks.module.scss';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  const waveClasses = ['waveLight', 'waveGreenPurple', 'waveYellowPurple', 'wavePinkGreen', 'wavePurpleYellow'];

  return (
    <>
      {blocks.map((block, index) => {
        const waveClass = waveClasses[index % waveClasses.length];
        
        return (
          <section key={index} className={`${styles.section} ${styles[waveClass]}`}>
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
                  description={block.description}
                  items={block.items}
                />
              )}
              {block.type === 'action' && (
                <Action
                  theme={block.theme}
                  accent={block.accent}
                  image={block.image}
                  title={block.title}
                  description={block.description}
                />
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
