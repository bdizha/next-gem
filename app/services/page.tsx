import React from 'react';
import styles from './page.module.scss';
import { ContentRenderer } from '../../components/ContentBlocks/ContentRenderer';
import { servicesContent } from './content';

export default function Services() {
  return (
    <main className={styles.main}>
      <ContentRenderer blocks={servicesContent.blocks} />
    </main>
  );
}
