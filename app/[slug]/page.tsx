'use client';

import React from 'react';
import pageStyles from '../page.module.scss';
import styles from '../../components/ContentBlocks/ContentBlocks.module.scss';
import ContentRenderer from '../../components/ContentBlocks/ContentRenderer';
import { homeContent } from '../content';
import { aboutContent } from '../about/content';
import { servicesContent } from '../services/content';
import { portfolioContent } from '../portfolio/content';
import { contactContent } from '../contact/content';
import { careersContent } from '../careers/content';
import { notFound } from 'next/navigation';

const pageContent = {
  home: homeContent,
  about: aboutContent,
  services: servicesContent,
  portfolio: portfolioContent,
  contact: contactContent,
  careers: careersContent,
};

function getContentBySlug(slug: string) {
  return pageContent[slug as keyof typeof pageContent];
}

export default function Page({ params }: { params: { slug: string } }) {
  const content = getContentBySlug(params.slug);

  if (!content) {
    return null;
  }

  return (
    <main className={pageStyles.main}>
      <ContentRenderer content={{
        content: content.blocks,
        tabs: content.tabs
      }} />
    </main>
  );
}
