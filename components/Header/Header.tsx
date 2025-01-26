"use client"

import { Button } from "components/Button/Button"
import styles from "./Header.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <button className={styles.brandButton}>
            <span className={styles.brandText}>BoldLand</span>
            <span className={styles.brandIcon}>arrow_drop_down</span>
          </button>
        </div>

        <div className={styles.headerRight}>
          <Button 
            intent="secondary" 
            className={styles.actionButton}
          >
            <span className={styles.actionIcon}>science</span>
            <span>Join the waitlist</span>
          </Button>
          
          <button 
            className={styles.iconButton}
            aria-label="Help"
          >
            <span className={styles.icon}>help_outline</span>
          </button>
          
          <button 
            className={styles.iconButton}
            aria-label="Menu"
          >
            <span className={styles.icon}>more_vert</span>
          </button>
          
          <button 
            className={styles.profileButton}
            aria-label="Profile"
          >
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocKxPf4TFQc5hf5yOdDy7fF2KJQ6K_Zd3nQ0jK98PQaWxrLJOf0h=s96-c"
              alt="Profile"
              className={styles.profileImage}
            />
          </button>
        </div>
      </div>
    </header>
  )
}