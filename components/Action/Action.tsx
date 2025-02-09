import React from 'react';
import Image from 'next/image';
import styles from './Action.module.scss';
import clsx from 'clsx';

interface ActionProps {
  theme?: 'purple' | 'pink' | 'green' | 'yellow';
  accent?: 'darkPink' | 'darkPurple' | 'darkGreen' | 'darkYellow';
  buttonStyle?: 'solid' | 'outline';
  image?: string;
  title?: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function Action({ 
  theme = "purple",
  accent = "darkPink",
  buttonStyle = "solid",
  image = "/icons/GD-Icon-009.png",
  title = <><span className="text-yellow">Delight</span> your customer</>,
  subtitle = "If you were to ask us, what's it like to launch a successful brand? Our answer is simple: It's always a delight working with upcoming brands making their dreams a reality.",
  buttonText = "Get started",
  buttonLink = "/#contact-us"
}: ActionProps) {
  return (
    <div className={styles.actionCard}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <a href={buttonLink}>
          <button className={clsx(styles.button, styles[buttonStyle])}>{buttonText}</button>
        </a>
      </div>
      <div className={styles.image}>
        <div className={clsx(styles.imageWrapper, styles[theme])}>
          <Image 
            src={image} 
            alt="Action Image"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </div>
  );
}
