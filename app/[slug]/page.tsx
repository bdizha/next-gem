'use client';

import React, { useEffect, useState } from 'react';
import pageStyles from '../page.module.scss';
import styles from '../../components/ContentBlocks/ContentBlocks.module.scss';
import { ContentRenderer } from '../../components/ContentBlocks/ContentRenderer';
import { homeContent } from '../content';
import { aboutContent } from '../about/content';
import { servicesContent } from '../services/content';
import { portfolioContent } from '../portfolio/content';
import { contactContent } from '../contact/content';
import { careersContent } from '../careers/content';
import { notFound } from 'next/navigation';
import { Tabs } from '../../components/Tabs/Tabs';

const pageContent = {
  home: homeContent,
  about: aboutContent,
  services: servicesContent,
  portfolio: portfolioContent,
  contact: contactContent,
  careers: careersContent,
};

type PageProps = {
  params: {
    slug: string;
  };
};

function getTabsForContent(content: typeof aboutContent) {
  if (!content.blocks) return null;
  
  const tabs = content.blocks
    .filter(block => block.type === 'grid')
    .map(block => ({
      title: block.title || '',
      titleAccent: block.titleAccent,
      accentColor: block.accentColor
    }));
  
  return tabs.length > 0 ? tabs : null;
}

export default function Page({ params }: PageProps) {
  const { slug } = params;
  const content = pageContent[slug as keyof typeof pageContent];

  if (!content) {
    notFound();
  }

  const tabs = getTabsForContent(content);

  return (
    <main className={pageStyles.main}>
      {tabs && <Tabs items={tabs} />}
      <ContentRenderer blocks={content.blocks} />
    </main>
  );
}
