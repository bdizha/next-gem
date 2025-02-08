import React from 'react';
import Image from 'next/image';
import styles from './ContentBlocks.module.scss';

interface ActionProps {
  title: string;
  description: string;
  image: string;
}

export function Action({ title, description, image }: ActionProps) {
  return (
    <div className={styles.action}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
}
