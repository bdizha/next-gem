'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import clsx from 'clsx';

export type SlideItem = {
  src: string;
  title: string;
  width?: number;
  height?: number;
};

type SliderProps = {
  items: SlideItem[];
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function Slider({ items, className, imageWidth = 300, imageHeight = 450 }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!items?.length) return null;

  const visibleItems = items.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  return (
    <div className={clsx(styles.slider, className)}>
      <button 
        className={clsx(styles.navButton, styles.prevButton)} 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      
      <div className={styles.track} style={{ 
        transform: `translateX(-${currentSlide * 100}%)`,
      }}>
        {visibleItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={item.src}
              alt={item.title}
              width={item.width || imageWidth}
              height={item.height || imageHeight}
              className={styles.image}
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <button 
        className={clsx(styles.navButton, styles.nextButton)} 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={clsx(styles.dot, {
              [styles.activeDot]: currentSlide === index,
            })}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
