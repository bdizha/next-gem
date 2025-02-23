import React from 'react';
import styles from './Grid.module.scss';
import { GridBlock } from '../../types/content';
import clsx from 'clsx';

export function Grid({ 
  title,
  subtitle,
  description,
  items = [],
  className
}: GridBlock) {
  const isHero = items.length === 0;

  return (
    <div className={clsx(styles.grid, isHero && styles.hero, className)}>
      <div className={styles.header}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
      </div>
      
      {!isHero && items.length > 0 && (
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              {item.icon && (
                <div className={styles.image}>
                  <img src={item.icon} alt={item.title} />
                </div>
              )}
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
