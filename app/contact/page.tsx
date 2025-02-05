import React from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import { Action } from '../../components/Action/Action'

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            <span className="text-purple">Get</span> in touch
          </h2>
          <p>
            Let's discuss your project and explore how we can help bring your vision to life.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <div className={styles.infoItem}>
              <Image 
                src="/icons/email.svg" 
                alt="Email"
                width={24}
                height={24}
              />
              <a href="mailto:hello@graphigem.com">hello@graphigem.com</a>
            </div>
            <div className={styles.infoItem}>
              <Image 
                src="/icons/phone.svg" 
                alt="Phone"
                width={24}
                height={24}
              />
              <a href="tel:+27110835500">+27 11 083 5500</a>
            </div>
            <div className={styles.infoItem}>
              <Image 
                src="/icons/location.svg" 
                alt="Location"
                width={24}
                height={24}
              />
              <address>
                Johannesburg, South Africa
              </address>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
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
