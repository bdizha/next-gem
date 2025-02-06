"use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

export function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setCurrentSection(index);
          // Set dark theme for sections with light backgrounds
          setIsDarkTheme(section.classList.contains('waveLight'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = classNames(styles.header, {
    [styles.darkTheme]: isDarkTheme,
  });

  const links = [
    { href: '/services', title: 'Services' },
    { href: '/careers', title: 'Careers' },
    { href: '/about', title: 'About' },
    { href: '/contact', title: 'Contact' },
  ]

  return (
    <header className={headerClass}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.logo}>
            <Image
              src={isDarkTheme ? '/icons/GD-Icon/GD-P-Icon-Black.png' : '/icons/GD-Icon/GD-P-Icon-White.png'}
              alt="GraphiGem"
              width={40}
              height={40}
            />
            <span>GraphiGem</span>
          </Link>

          {!isMobile && (
            <nav className={styles.navigation}>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.title}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className={styles.headerRight}>
          <Link href="/contact" className={styles.contactButton}>
            Get Started
          </Link>

          {isMobile && (
            <button 
              className={classNames(styles.menuButton, {
                [styles.active]: isMenuOpen,
              })}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <nav className={styles.mobileMenu}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink}>
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}