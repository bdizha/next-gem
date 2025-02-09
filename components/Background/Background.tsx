import React from 'react';
import styles from './Background.module.scss';
import clsx from 'clsx';

interface BackgroundProps {
  theme?: 'purple' | 'darkPurple';
  className?: string;
}

export default function Background({ theme = 'purple', className }: BackgroundProps) {
  return (
    <div className={clsx(styles.background, styles[theme], className)} />
  );
}
