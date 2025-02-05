import React from 'react';
import styles from './page.module.scss'
import { Action } from '../../components/Action/Action'

export default function Security() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>
            <span className="text-purple">Security</span> Policy
          </h2>
          <p>
            We are committed to maintaining the security and confidentiality of your information.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentWrapper}>
          <div className={styles.section}>
            <h3>Data Protection</h3>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>End-to-end encryption for data transmission</li>
              <li>Secure data storage with regular backups</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Infrastructure Security</h3>
            <p>
              Our infrastructure is designed with security in mind:
            </p>
            <ul>
              <li>Cloud security best practices</li>
              <li>Network security monitoring</li>
              <li>DDoS protection</li>
              <li>Regular vulnerability assessments</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Employee Security</h3>
            <p>
              Our team follows strict security protocols:
            </p>
            <ul>
              <li>Security awareness training</li>
              <li>Access control policies</li>
              <li>Confidentiality agreements</li>
              <li>Regular security reviews</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Incident Response</h3>
            <p>
              We have a comprehensive incident response plan:
            </p>
            <ul>
              <li>24/7 monitoring and alerts</li>
              <li>Rapid incident response team</li>
              <li>Regular incident response drills</li>
              <li>Post-incident analysis and improvements</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Compliance</h3>
            <p>
              We adhere to international security standards:
            </p>
            <ul>
              <li>GDPR compliance</li>
              <li>ISO 27001 principles</li>
              <li>Regular compliance audits</li>
              <li>Industry best practices</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Contact Security Team</h3>
            <p>
              For security-related inquiries or to report security issues:
            </p>
            <p className={styles.contact}>
              Email: security@graphigem.com<br />
              Emergency: +27 11 083 5500<br />
              PGP Key: Available upon request
            </p>
          </div>
        </div>
      </section>

      <Action 
        theme="purple"
        accent=""
        image="/icons/GD-Icon-005.png"
        title={<>
          <span className="text-green">Secure</span> by design
        </>}
        subtitle={<>
          Security is not just a feature, it's a fundamental aspect of everything we do.
        </>}
      />
    </main>
  )
}
