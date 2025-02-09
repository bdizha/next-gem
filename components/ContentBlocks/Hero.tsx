import React from 'react';
import styles from './Hero.module.scss';
import clsx from 'clsx';
import Background from '../Background/Background';
import { HeroBlock } from '../../types/content';

interface HeroProps extends HeroBlock {
  className?: string;
}

export default function Hero({ title, titleAccent, accentColor = 'pink', description, className }: HeroProps) {
  return (
    <section className={clsx(styles.hero, className)}>
      <Background theme={accentColor} />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            {titleAccent ? (
              <span className={`text-${accentColor}`}>{titleAccent}</span>
            ) : null}
            {title}
          </h1>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
