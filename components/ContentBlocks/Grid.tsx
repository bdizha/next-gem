import React from 'react';
import Image from 'next/image';
import styles from './ContentBlocks.module.scss';
import { GridBlock } from '../../types/content';

export function Grid({ 
  columns, 
  title, 
  titleAccent, 
  accentColor = 'pink',
  description, 
  items 
}: GridBlock) {
  return (
    <section className={styles.grid}>
      {(title || description) && (
        <div className={styles.gridHeader}>
          {title && (
            <h2>
              {titleAccent ? (
                <span className={`text-${accentColor}`}>{titleAccent}</span>
              ) : null}{' '}
              {title}
            </h2>
          )}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className={`${styles.gridContent} ${styles[`columns${columns}`]}`}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.gridCard} ${item.background ? styles[item.background] : ''}`}
          >
            {item.icon && (
              <div className={styles.iconWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={600} 
                  height={600} 
                />
              </div>
            )}
            <h3>
              {item.titleAccent ? (
                <span className={`text-${item.accentColor || 'green'}`}>
                  {item.titleAccent}
                </span>
              ) : null}{' '}
              {item.title}
            </h3>
            {item.subtitle && (
              <p className={styles.subtitle}>
                <span className={`text-${item.accentColor || 'green'}`}>
                  {item.subtitle.split(' ')[0]}
                </span>{' '}
                {item.subtitle.split(' ').slice(1).join(' ')}
              </p>
            )}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
