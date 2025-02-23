import React from 'react';
import Image from 'next/image';
import styles from './ContentBlocks.module.scss';
import { MediaBlock, MediaItem } from '../../types/content';
import clsx from 'clsx';

function MediaContent({ item }: { item: MediaItem }) {
  if (item.type === 'video') {
    return (
      <video
        src={item.url}
        poster={item.poster}
        controls
        autoPlay={item.autoplay}
        loop={item.loop}
        muted={item.muted}
        playsInline
        className={styles.mediaContent}
      />
    );
  }

  return (
    <Image
      src={item.url}
      alt={item.alt || ''}
      width={item.width || 1920}
      height={item.height || 1080}
      className={styles.mediaContent}
    />
  );
}

export function Media({ 
  title,
  titleAccent,
  description,
  items,
  layout = 'grid',
  aspectRatio = '16:9'
}: MediaBlock) {
  return (
    <div className={styles.media}>
      {(title || description) && (
        <div className={styles.header}>
          {title && (
            <h2>
              {titleAccent && <span>{titleAccent}</span>}
              {title}
            </h2>
          )}
          {description && <p>{description}</p>}
        </div>
      )}
      
      <div 
        className={clsx(
          styles.mediaContainer,
          styles[layout],
          styles[`aspect${aspectRatio.replace(':', '')}`]
        )}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.mediaItem}>
            <MediaContent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
