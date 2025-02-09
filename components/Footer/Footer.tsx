'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/GD-2D/GD-Icon/GD-P-Icon-Colour02.png"
              alt="GraphiGem Logo"
              width={48}
              height={48}
            />
          </Link>
          <p className={styles.tagline}>
            Creating value in the virtual world through strategic and creative digital services.
          </p>
        </div>

        <div className={styles.content}>
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
            &copy; {new Date().getFullYear()} GraphiGem Digital. All rights reserved.
          </div>
          <nav className={styles.nav}>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
