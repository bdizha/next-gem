import React from 'react';
import styles from './ContentBlocks.module.scss';
import { GridBlock } from '../../types/content';
import Image from 'next/image';
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
      {/* Header Row */}
      {(title || description) && (
        <div className={styles.headerRow}>
          <div className={styles.header}>
            {title && (
              <h2>
                {titleAccent && <span className={styles[`accent${accentColor}`]}>{titleAccent}</span>}
                {title}
              </h2>
            )}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      
      {/* Items Row */}
      <div className={styles.itemsRow}>
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              {item.icon && (
                <div className={styles.image}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={120}
                    height={120}
                  />
                </div>
              )}
              <div className={styles.itemContent}>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
