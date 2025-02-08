'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/GD-2D/GD-Icon/GD-P-Icon-Colour02.png"
              alt="GraphiGem Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
          </Link>
          <p>Creating value in the virtual world through strategic and creative digital services.</p>
        </div>

        <div className={styles.section}>
          <h3>Services</h3>
          <ul>
            <li><Link href="/services#branding">Digital Branding</Link></li>
            <li><Link href="/services#character">Character Branding</Link></li>
            <li><Link href="/services#virtual">Virtual World</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://instagram.com/graphigem" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com/company/graphigem" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/graphigem" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} GraphiGem Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
