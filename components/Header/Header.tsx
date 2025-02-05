"use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useState } from 'react'

export function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/', title: 'Home' },
    { href: '/services', title: 'Services' },
    { href: '/careers', title: 'Careers' },
    { href: '/about', title: 'About' },
    { href: '/contact', title: 'Contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/icons/GD-Icon/GD-P-Icon-White.png"
              alt="Graphigem"
              width={36}
              height={36}
            />
          </Link>
        </div>

        {!isMobile ? (
          <nav className={styles.navigation}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.title}
              </Link>
            ))}
          </nav>
        ) : (
          <>
            <button 
              className={styles.menuButton} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            {isMenuOpen && (
              <nav className={styles.mobileNav}>
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={styles.mobileLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  )
}