import React from 'react';
import styles from './ContentBlocks.module.scss';
import { HeroBlock } from '../../types/content';

export function Hero({ title, titleAccent, accentColor = 'pink', description }: HeroBlock) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          {titleAccent ? (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          ) : null}
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
