'use client';

import React from 'react';
import styles from './Hero.module.scss';
import { HeroBlock } from '../../types/content';
import Image from 'next/image';

type HeroProps = HeroBlock;

export function Hero({ title, titleAccent, accentColor = 'pink', description, image }: HeroProps) {
  // Check if we're in a light background based on the random class
  const isLightBackground = document.querySelector('.' + styles.hero)?.classList.contains('waveLight');
  const textColorClass = isLightBackground ? styles.darkText : styles.lightText;

  return (
    <section className={`${styles.hero} ${image ? styles.withImage : styles.textOnly} ${textColorClass}`}>
      <div className={styles.heroContent}>
        <h1>
          {titleAccent ? (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          ) : null}
          {title}
        </h1>
        <p>{description}</p>
      </div>
      {image && (
        <div className={styles.heroImage}>
          <Image src={image} alt="" width={600} height={600} />
        </div>
      )}
    </section>
  );
}
