import React from 'react';
import Image from 'next/image';
import styles from './ContentBlocks.module.scss';
import { GridBlock } from '../../types/content';
import clsx from 'clsx';

export function Grid({ 
  title,
  titleAccent,
  accentColor = 'pink',
  description,
  items = []
}: GridBlock) {
  return (
    <div className={styles.grid}>
      {(title || description) && (
        <div className={styles.gridHeader}>
          {title && (
            <h2>
              {titleAccent && (
                <span style={{ color: `var(--${accentColor})` }}>{titleAccent}</span>
              )}{' '}
              {title}
            </h2>
          )}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className={styles.items}>
        {items?.map((item, index) => (
          <div 
            key={index} 
            className={clsx(styles.item, item.background && styles[item.background])}
          >
            {item.icon && (
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={120} 
                  height={120}
                  className={styles.image}
                />
              </div>
            )}
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
