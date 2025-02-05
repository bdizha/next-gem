import React from 'react';
import styles from './page.module.scss'
import { Action } from '../../components/Action/Action'

export default function Privacy() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            <span className="text-purple">Privacy</span> Policy
          </h2>
          <p>
            We take your privacy seriously and are committed to protecting your personal information.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.section}>
            <h3>Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Communication preferences</li>
              <li>Project requirements and specifications</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Information Sharing</h3>
            <p>
              We do not sell or rent your personal information to third parties. We may share your 
              information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to maintain the security 
              of your personal information, including encryption, access controls, and secure data storage.
            </p>
          </div>

          <div className={styles.section}>
            <h3>Your Rights</h3>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about our privacy practices or would like to exercise your rights, 
              please contact us at:
            </p>
            <p className={styles.contact}>
              Email: privacy@graphigem.com<br />
              Phone: +27 11 083 5500<br />
              Address: Johannesburg, South Africa
            </p>
          </div>
        </div>
      </section>

      <Action 
        theme="purple"
        accent=""
        image="/icons/GD-Icon-005.png"
        title={<>
          <span className="text-green">Protect</span> your data
        </>}
        subtitle={<>
          We are committed to protecting your privacy and ensuring the security of your personal information.
        </>}
      />
    </main>
  )
}
