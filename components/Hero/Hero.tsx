'use client';

import React from 'react';
import styles from './Hero.module.scss';
import contentStyles from '../ContentBlocks/ContentBlocks.module.scss';
import { HeroBlock } from '../../types/content';
import Image from 'next/image';
import clsx from 'clsx';
import { Slider } from '../Slider/Slider';

const films = [
  { src: '/projects/films/Bold&Famous.png', title: 'Bold & Famous', width: 400, height: 600 },
  { src: '/projects/films/BoldGirls.png', title: 'Bold Girls', width: 400, height: 600 },
  { src: '/projects/films/BoldMan.png', title: 'Bold Man', width: 400, height: 600 },
  { src: '/projects/films/RoylaBride.png', title: 'Royla Bride', width: 400, height: 600 },
  { src: '/projects/films/TribalCombat.png', title: 'Tribal Combat', width: 400, height: 600 },
];

type HeroProps = HeroBlock & {
  className?: string;
};

export function Hero({ title, titleAccent, accentColor = 'pink', description, image, className }: HeroProps) {
  // Check if we're in a light background based on the scape class
  const isLightBackground = className?.includes('waveLight');
  const textColorClass = isLightBackground ? styles.darkText : styles.lightText;

  return (
    <section className={clsx(
      styles.hero,
      image ? styles.withImage : styles.textOnly,
      textColorClass,
      className // This will apply the scape class from parent
    )}>
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
      {/* <Slider items={films} className={styles.heroSlider} /> */}
    </section>
  );
}
