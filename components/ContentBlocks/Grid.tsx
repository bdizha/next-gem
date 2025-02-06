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
      <div className={styles.gridItems} data-columns={columns}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className={styles.gridItem}
          >
            {item.icon && (
              <div className={styles.iconWrapper}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={80} 
                  height={80}
                  className={styles.icon}
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
