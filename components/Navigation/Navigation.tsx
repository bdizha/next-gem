'use client';

import React from 'react';
import styles from './Navigation.module.scss';
import { usePathname } from 'next/navigation';

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'approach', label: 'Approach', href: '/approach' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'careers', label: 'Careers', href: '/careers' }
];

export function Navigation() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = React.useState(pathname);

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    // Smooth scroll to section if on the same page
    if (pathname === href) {
      const section = document.getElementById(href.replace('/', ''));
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.tabContainer}>
      <div className={styles.tabNav}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.tabButton} ${activeTab === item.href ? styles.active : ''}`}
            onClick={() => handleTabClick(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
