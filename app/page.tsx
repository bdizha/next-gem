"use client"

import React from 'react';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import styles from "./page.module.scss";
import { ContentRenderer } from '../components/ContentBlocks/ContentRenderer';
import { ScrollSection } from '../components/ScrollSection/ScrollSection';
import { homeContent } from './content';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {homeContent.blocks.map((block, index) => (
          <ScrollSection
            key={index}
            background={`/assets/GD-2D/GD-Waves/GD-Wave-${
              index === 0 ? 'Light' :
              index === 1 ? 'Green-Purple' :
              'Yellow-Purple'
            }-Final.png`}
            className={styles.section}
          >
            <ContentRenderer blocks={[block]} />
          </ScrollSection>
        ))}
      </main>
      <Footer />
    </>
  );
}
