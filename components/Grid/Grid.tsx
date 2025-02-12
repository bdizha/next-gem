'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Grid.module.scss';
import { GridBlock } from '../../types/content';
import clsx from 'clsx';

type GridItem = {
  title: string;
  description: string;
  icon: string;
  background?: string;
};

type GridProps = GridBlock & {
  titleAccent?: string;
  accentColor?: string;
  description?: string;
  items?: GridItem[];
  className?: string;
};

export function Grid({ title, titleAccent, accentColor, description, items = [], className }: GridProps) {
  // Split title into words
  const words = title?.split(' ') || [];
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  return (
    <div className={clsx(styles.grid, className)}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {titleAccent && (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          )}{' '}
          <span className="textAccent">{firstWord}</span>
          {' '}{restOfTitle}
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={`${styles.card} ${item.background ? styles[item.background] : ''}`}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={120}
                  height={120}
                  className={styles.cardImage}
                />
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
