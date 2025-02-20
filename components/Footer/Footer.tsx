'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import contentStyles from '../ContentBlocks/ContentBlocks.module.scss';

export function Footer() {
  return (
    <section className={clsx(
      styles.footer,
      contentStyles.section,
      contentStyles.waveNight,
      contentStyles.contentGradientNight,
      contentStyles.top
    )}>
      <div className={clsx(styles.content, contentStyles.content)}>
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/GD-2D/GD-Icon/GD-P-Icon-Colour02.png"
              alt="GraphiGem Logo"
              width={48}
              height={48}
            />
          </Link>
          <p className={styles.tagline}>Delight your customer!</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/#envision-future">Virtual Worlds</Link></li>
              <li><Link href="/#unleash-brand">Brand Experience</Link></li>
              <li><Link href="/#delight-customer">Customer Engagement</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Connect</h3>
            <ul>
              <li><a href="https://instagram.com/graphigem" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com/company/graphigem" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/graphigem" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Graphi<span className={styles.textAccent}>Gem</span> Digital. All rights reserved.
          </div>
          <nav className={styles.nav}>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
