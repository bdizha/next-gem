"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import { Action } from '../../components/Action/Action'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('film');

  const projects = {
    film: {
      theme: "purple",
      title: "Film & Media",
      items: [
        {
          src: "/cast/bold-girls/Welcome.png",
          title: "Bold Girls",
        },
        {
          src: "/cast/tribal-combat/Welcome.png",
          title: "Tribal Combat",
        },
        {
          src: "/cast/bold-man/Welcome.png",
          title: "Bold Man",
        },
        {
          src: "/cast/royal-bride/Welcome.png",
          title: "Royal Bride",
        },
        {
          src: "/cast/bold-and-famous/Welcome.png",
          title: "Bold & Famous",
        },
      ],
    },
    fashion: {
      theme: "purple",
      title: "Fashion & Retail",
      items: [
        {
          src: "/cast/bold-girls/Welcome.png",
          title: "Fashion Collection",
        },
        {
          src: "/cast/tribal-combat/Welcome.png",
          title: "Retail Showcase",
        },
      ],
    },
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            <span className="text-purple">Our</span> craftsmanship
          </h2>
          <p>
            We are a creative design and development agency specializing in brand identity, 
            web development, and digital marketing solutions.
          </p>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsContent}>
          <div className={styles.tabs}>
            {Object.entries(projects).map(([key, project]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`${styles.tab} ${activeTab === key ? styles.active : ''}`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className={styles.projectsGrid}>
            {projects[activeTab as keyof typeof projects].items.map((item, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className={styles.projectImage}
                  />
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Action 
        theme="pink"
        accent=""
        image="/icons/GD-Icon-005.png"
        title={<>
          <span className="text-green">Unleash</span> your brand
        </>}
        subtitle={<>
          <span className="text-pink">Graphigem</span> helps brands create value in the virtual world. 
          We are a strategic and creative digital service guiding businesses through digital branding, 
          character branding and the Virtual World.
        </>}
      />
    </main>
  )
}
