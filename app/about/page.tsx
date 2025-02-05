"use client"

import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import { Action } from '../../components/Action/Action';

export default function About() {
  const values = [
    {
      src: "/icons/GD-Icon-014.png",
      theme: "pink",
      accent: "",
      title: <span className="text-pink">Adventure</span>,
      text: <><span className="text-pink">We</span> serve unique and disruptive brands of all sizes and are fanatical about their success. We explore the impossible of dreams.</>,
    },
    {
      src: "/icons/GD-Icon-012.png",
      theme: "green",
      accent: "",
      title: <span className="text-green">Autonomy</span>,
      text: <><span className="text-green">It's</span> about dreaming big and changing the game. We are proud to create delightful branding solutions for clients who dream bold ideas.</>,
    },
    {
      src: "/icons/GD-Icon-007.png",
      theme: "yellow",
      accent: "",
      title: <span className="text-yellow">Courage</span>,
      text: <><span className="text-yellow">We</span> always seek ways to challenge the status quo as we routinely build, apply, evaluate and repeat at every turn of the clock of each day.</>,
    },
    {
      src: "/icons/GD-Icon-003.png",
      theme: "purple",
      accent: "",
      title: <span className="text-purple">Trust</span>,
      text: <><span className="text-purple">We</span> practise trust and transparency within a context of a supportive network of digital and media partners from diverse industries we serve.</>,
    },
  ]

  const team = [
    {
      theme: "purple",
      src: "/team/Bold-Team-Drijke-WB.png",
      title: "Creative Art",
      subtitle: "Drijke Wessels",
      text: "Always and expanding my knowledge scope while spreading magic around the world through a futuristic lense of imagination.",
    },
    {
      theme: "yellow",
      src: "/team/Bold-Team-KG-WB.png",
      title: "3D Modeling",
      subtitle: "Kagiso Silindane",
      text: "I am a diligent animator who is dedicated to introducing new and unique skills into the field of animation and art.",
    },
    {
      theme: "purple",
      src: "/team/Bold-Team-Bata-01WB.png",
      title: "Technologist",
      subtitle: "Batanayi Matuku",
      text: "Obsessed with ideating and architecting branding solutions and building bold things for innovative and unique brands.",
    },
    {
      theme: "green",
      src: "/team/Bold-Team-Sibu-WB.png",
      title: "3D Artist",
      subtitle: "Sibusiso Nkosi",
      text: "Everday we dream it, we'll make it the best we can. If you just think of the job, the credit will automatically follow.",
    },
    {
      theme: "purple",
      src: "/team/Bold-Team-Casey-WB.png",
      title: "3D Animation",
      subtitle: "Casey Watson",
      text: "I'm an enthusiastic creative, and am always eager to learn more. Aside from Asset production and animation, I enjoy singing, dancing and acting.",
    },
    {
      theme: "pink",
      src: "/team/Bold-Team-Jason-WB.png",
      title: "3D Artist",
      subtitle: "Jason Grobler",
      text: "All creative people want to do the unexpected and the crazy stuff too. I find myself happy with little things like drawing.",
    },
    {
      theme: "yellow",
      src: "/team/Bold-Team-Michaela-WB.png",
      title: "3D Modelling",
      subtitle: "Michaela Bothner",
      text: "I'm a highly creative, energetic and innovative 3D modeller with a strong background in character design and development.",
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.about}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>
              <span className="text-purple">About</span> us
            </h2>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className={styles.storyContent}>
            <div className={styles.storyCard}>
              <h2>Our <span className="text-green">Story</span></h2>
              <p>
                We are a dynamic team of creative professionals passionate about crafting unique digital experiences. 
                Our journey began with a simple vision: to help brands stand out in the digital landscape through 
                innovative design and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.icon}>
                <Image src={value.src} alt="" width={64} height={64} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <div className={styles.teamContent}>
            <h2>Our <span className="text-green">Team</span></h2>
            <div className={styles.teamGrid}>
              {team.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.avatar}>
                    <Image src={member.src} alt={member.subtitle} width={120} height={120} />
                  </div>
                  <h3>{member.subtitle}</h3>
                  <h4>{member.title}</h4>
                  <p>{member.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <Action 
          theme="pink"
          accent=""
          image="/icons/GD-Icon-005.png"
          title={<>
            <span className="text-green">Unleash</span> your brand
          </>}
          subtitle={<>
            Ready to transform your brand? Let's create something amazing together.
          </>}
        />
      </div>
    </main>
  )
}
