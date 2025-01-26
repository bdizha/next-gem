"use client"

import styles from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <p>Illustrative examples. BoldIcon is powered by BoldLand.</p>
            <p>Disclaimer: $BOLD tools can make mistakes, so double-check them</p>
          </div>
          <div className={styles.footerLinks}>
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noreferrer"
              className={styles.footerLink}
            >
              Privacy
            </a>
            <a 
              href="https://policies.google.com/terms" 
              target="_blank" 
              rel="noreferrer"
              className={styles.footerLink}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
