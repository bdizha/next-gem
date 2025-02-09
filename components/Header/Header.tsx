'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import classNames from 'classnames';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = header.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      header.style.setProperty('--x', x.toString());
      header.style.setProperty('--y', y.toString());
    };

    header.addEventListener('mousemove', handleMouseMove);
    return () => header.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/GD-2D/GD-Icon/GD-P-Icon-White.png"
            alt="GraphiGem"
            width={60}
            height={60}
            className={styles.logoImage}
          />
        </Link>

        <nav className={classNames(styles.nav, { [styles.isOpen]: isMenuOpen })}>
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
            Get in touch
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