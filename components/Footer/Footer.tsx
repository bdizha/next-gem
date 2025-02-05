"use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const links = [
    { href: '/', title: 'Home' },
    { href: '/services', title: 'Services' },
    { href: '/careers', title: 'Careers' },
    { href: '/about', title: 'About Us' },
    { href: '/contact', title: 'Get in touch' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/icons/GD-Icon/GD-P-Icon-White.png"
                alt="Graphigem"
                width={180}
                height={180}
              />
            </Link>
          </div>
          <nav className={styles.navigation}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.slogan}>
            <span className="text-yellow">Delight</span> your customer
          </p>
          {!isMobile && (
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Graphigem. All rights reserved.
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
