import React from 'react';
import styles from './ScrollSection.module.scss';
import { ContentRenderer } from '../ContentBlocks/ContentRenderer';
import classNames from 'classnames';

interface ScrollSectionProps {
  content: any;
  className?: string;
}

export function ScrollSection({ content, className }: ScrollSectionProps) {
  return (
    <section className={classNames(styles.section, className)}>
      <div className={styles.content}>
        <ContentRenderer blocks={[content]} />
      </div>
    </section>
  );
}
