'use client';

import React from 'react';
import styles from './Hero.module.scss';
import { HeroBlock } from '../../types/content';
import clsx from 'clsx';

type HeroProps = HeroBlock & {
  className?: string;
};

export function Hero({ title, titleAccent, accentColor = 'pink', description, className }: HeroProps) {
  // Split title into words
  const words = title?.split(' ') || [];
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  return (
    <section className={clsx(styles.hero, styles.lightText, className)}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            {titleAccent && (
              <span className={`text-${accentColor}`}>{titleAccent}</span>
            )}
            <span className="textAccent">{firstWord}</span>
            {' '}{restOfTitle}
          </h1>
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
}
