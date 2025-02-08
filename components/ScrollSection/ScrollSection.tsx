import React from 'react';
import styles from './ScrollSection.module.scss';
import classNames from 'classnames';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function ScrollSection({ children, className, id }: ScrollSectionProps) {
  return (
    <section id={id} className={classNames(styles.section, className)}>
      {children}
    </section>
  );
}
