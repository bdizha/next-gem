'use client';

import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ContentRenderer } from '../components/ContentBlocks/ContentRenderer';
import { homeContent } from './content';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ContentRenderer blocks={homeContent.blocks} />
      </main>
      {/* <Footer /> */}
    </>
  );
}
