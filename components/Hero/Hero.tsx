'use client';

import React from 'react';
import styles from './Hero.module.scss';
import { HeroBlock } from '../../types/content';
import Image from 'next/image';
import clsx from 'clsx';

type HeroProps = HeroBlock & {
  className?: string;
  theme?: string;
};

export function Hero({ title, titleAccent, accentColor = 'pink', description, image, className, theme }: HeroProps) {
  // Split title into words
  const words = title.split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  // Extract first color from theme (e.g., 'yellow' from 'yellowPurple')
  const themeFirstColor = theme?.match(/^[a-z]+/i)?.[0].toLowerCase() || accentColor;

  return (
    <section className={clsx(
      styles.hero,
      image ? styles.withImage : styles.textOnly,
      styles.lightText,
      className
    )}>
      <div className={styles.heroContent}>
        <div className={styles.text}>
          <h1>
            {titleAccent && (
              <span className={`text-${accentColor}`}>{titleAccent}</span>
            )}
            <span className={`text-${themeFirstColor}`}>{firstWord}</span>{' '}
            {restOfTitle}
          </h1>
          {description && <p>{description}</p>}
        </div>
        {/* {image && (
          <div className={styles.heroImage}>
            <Image src={image} alt="" width={600} height={600} priority />
          </div>
        )} */}
      </div>
    </section>
  );
}
