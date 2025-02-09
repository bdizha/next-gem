'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ContentRenderer } from '../components/ContentBlocks/ContentRenderer';
import { homeContent } from './content';
import { aboutContent } from './about/content';
import { servicesContent } from './services/content';
import { portfolioContent } from './portfolio/content';
import { contactContent } from './contact/content';
import { careersContent } from './careers/content';
import styles from './page.module.scss';

export default function Page() {
  const pathname = usePathname();
  
  const getContent = () => {
    switch (pathname) {
      case '/':
        return homeContent;
      case '/about':
        return aboutContent;
      case '/services':
        return servicesContent;
      case '/portfolio':
        return portfolioContent;
      case '/contact':
        return contactContent;
      case '/careers':
        return careersContent;
      default:
        return homeContent; // Fallback to home content
    }
  };

  const pageContent = getContent();

  return (
    <main className={styles.main}>
      <ContentRenderer blocks={pageContent.blocks} />
    </main>
  );
}
