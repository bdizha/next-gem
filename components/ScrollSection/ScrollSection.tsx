import React from 'react';
import styles from './ScrollSection.module.scss';

interface ScrollSectionProps {
  background: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ background, children, className }) => {
  return (
    <section className={`${styles.section} ${className || ''}`} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};
