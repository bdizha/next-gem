'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Grid.module.scss';

type GridItem = {
  title: string;
  description: string;
  icon: string;
  background?: string;
};

type GridProps = {
  title?: string;
  titleAccent?: string;
  accentColor?: string;
  description?: string;
  items?: GridItem[];
};

export function Grid({ title, titleAccent, accentColor, description, items = [] }: GridProps) {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {titleAccent && (
            <span className={`text-${accentColor}`}>{titleAccent}</span>
          )}{' '}
          {title}
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
