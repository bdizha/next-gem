import React from 'react';
import styles from './ContentBlocks.module.scss';
import { ContentBlock } from '../../types/content';
import { Hero } from '../Hero/Hero';
import { Grid } from '../Grid/Grid';
import { Action } from '../Action/Action';
import { Slider } from '../Slider/Slider';
import clsx from 'clsx';
import { scapeClasses, contentBannerClasses, getRandomClass } from '../../utils/backgrounds';

const BLOCK_COMPONENTS = {
  hero: Hero,
  grid: Grid,
  action: Action,
  slider: Slider,
} as const;

interface ContentBlocksProps {
  blocks: ContentBlock[];
}

export function ContentBlocks({ blocks }: ContentBlocksProps) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        const isFirst = index === 0;
        const isLast = index === blocks.length - 1;
        const scapeClass = getRandomClass(scapeClasses);
        const contentBannerClass = getRandomClass(contentBannerClasses);

        let positionClass;
        if (block.type === 'hero') {
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
  );
}
