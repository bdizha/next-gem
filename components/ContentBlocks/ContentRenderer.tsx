'use client';

import React from 'react';
import styles from './ContentBlocks.module.scss';
import { Block } from '../../types/content';
import { Hero } from './Hero';
import { Grid } from './Grid';
import { Header } from './Header';
import { Media } from './Media';
import { Player } from './Player';
import { Footer } from './Footer';
import clsx from 'clsx';

const BlockComponents = {
  hero: Hero,
  grid: Grid,
  header: Header,
  media: Media,
  player: Player,
  footer: Footer,
};

export function ContentRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => {
        const BlockComponent = BlockComponents[block.type];
        return (
          <section 
            key={block.id} 
            className={styles.section}
            data-theme={block.theme}
          >
            <div className={styles.row}>
              <BlockComponent {...block} />
            </div>
          </section>
        );
      })}
    </>
  );
}
