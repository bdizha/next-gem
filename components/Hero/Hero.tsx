'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

type HeroProps = {
  titleAccent?: string;
  title?: string;
  accentColor?: string;
  description?: string;
  image?: string;
};

export function Hero({ titleAccent, title, accentColor, description, image }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {titleAccent && (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          )}{' '}
          {title}
        </h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt="Hero"
            width={600}
            height={400}
            className={styles.image}
            priority
          />
        </div>
      )}
    </div>
  );
}
