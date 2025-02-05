import React from 'react';
import styles from './ContentBlocks.module.scss';
import { HeroBlock } from '../../types/content';

export function Hero({ title, titleAccent, accentColor = 'pink', description }: HeroBlock) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>
          {titleAccent ? (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          ) : null}{' '}
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
