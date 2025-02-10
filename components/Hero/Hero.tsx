'use client';

import React from 'react';
import styles from './Hero.module.scss';
import { HeroBlock } from '../../types/content';
import Image from 'next/image';
import clsx from 'clsx';

type HeroProps = HeroBlock & {
  className?: string;
};

export function Hero({ title, titleAccent, accentColor = 'pink', description, image, className }: HeroProps) {
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
            {title}
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
