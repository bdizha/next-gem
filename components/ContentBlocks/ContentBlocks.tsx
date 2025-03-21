import React from 'react';
import styles from './ContentBlocks.module.scss';
import { ContentBlock } from '../../types/content';
import { Grid } from './Grid';
import { Action } from '../Action/Action';
import { Slider } from '../Slider/Slider';
import { Footer } from '../Footer/Footer';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import clsx from 'clsx';
import { getBackgroundClasses } from '../../utils/backgrounds';

const BLOCK_COMPONENTS = {
  grid: Grid,
  action: Action,
  slider: Slider,
  footer: Footer,
  player: VideoPlayer,
} as const;

interface ContentBlocksProps {
  blocks: ContentBlock[];
}

export function ContentBlocks({ blocks }: ContentBlocksProps) {
  return (
    <div className={styles.contentWrapper}>
      {blocks.map((block, index) => {
        const { wave: waveClass, content: contentGradientClass } = getBackgroundClasses();
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
              styles[waveClass],
              styles[contentGradientClass],
              styles.top
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
