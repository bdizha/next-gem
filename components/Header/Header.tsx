'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import classNames from 'classnames';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/GD-2D/GD-Icon/GD-P-Icon-White.png"
            alt="GraphiGem"
            width={40}
            height={40}
            className={styles.logoImage}
          />
        </Link>

        <nav className={classNames(styles.nav, { [styles.isOpen]: isMenuOpen })}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <Link href="/careers" className={styles.link}>
            Careers
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>

        <button
          className={classNames(styles.menuButton, { [styles.isOpen]: isMenuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}