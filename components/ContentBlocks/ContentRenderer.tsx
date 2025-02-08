'use client';

import React from 'react';
import { Hero } from '../Hero/Hero';
import { Grid } from '../Grid/Grid';
import { Action } from '../Action/Action';
import { ContentBlock } from '../../types/content';
import styles from './ContentBlocks.module.scss';

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  // Background classes for main sections
  const scapeClasses = [
    'waveGreenPink',
    'waveGreenPurple',
    'waveGreenYellow',
    'waveLight',
    'waveNight',
    'wavePinkPurple',
    'waveYellowPink',
    'waveYellowPurple'
  ];

  // Background classes for content sections
  const gradientClasses = [
    'waveGradientGreenPurple',
    'waveGradientYellowPurple'
  ];

  // Background classes for cards
  const bannerClasses = [
    'bannerGreenPurple',
    'bannerPinkGreen',
    'bannerPurpleYellow',
    'bannerYellowPink'
  ];

  // Function to get random class from array
  const getRandomClass = (classes: string[]) => {
    return classes[Math.floor(Math.random() * classes.length)];
  };

  return (
    <>
      {blocks.map((block, index) => {
        const scapeClass = getRandomClass(scapeClasses);
        const gradientClass = getRandomClass(gradientClasses);
        
        return (
          <section key={index} className={`${styles.section} ${styles[scapeClass]} ${styles[gradientClass]}`}>
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
                  items={block.items?.map(item => ({
                    ...item,
                    background: getRandomClass(bannerClasses)
                  }))}
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
