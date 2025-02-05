import Link from 'next/link'
import Image from 'next/image'
import styles from './Action.module.scss'
import { ReactNode } from 'react'

interface ActionProps {
  theme?: string
  accent?: string
  image?: string
  title: ReactNode
  subtitle: ReactNode
}

export function Action({ 
  theme = "purple",
  accent = "darkPink",
  image = "/icons/GD-Icon-009.png",
  title = <><span className="text-yellow">Delight</span> your customer</>,
  subtitle = "If you were to ask us, what's it like to launch a successful brand? Our answer is simple: It's always a delight working with upcoming brands making their dreams a reality."
}: ActionProps) {
  return (
    <section className={`${styles.action} ${styles[theme]}`}>
      <div className={styles.actionContent}>
        <div className={`${styles.actionCard} ${styles[accent]}`}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <Link href="/#contact-us">
                <button className={styles.button}>
                  Get started
                </button>
              </Link>
            </div>
            <div className={styles.image}>
              <div className={`${styles.imageWrapper} ${styles[accent]}`}>
                <Image
                  src={image}
                  alt="Action Image"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
