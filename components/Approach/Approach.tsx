import Image from 'next/image'
import Link from 'next/link'
import styles from './Approach.module.scss'
import { Action } from '../Action/Action'

export function Approach() {
  const steps = [
    {
      theme: "purple",
      accent: "",
      image: "/icons/GD-Icon-012.png",
      title: <span>Envision <span className="text-purple">It</span></span>,
      subtitle: <span>Unleash new insights and discover opportunities to build unique brand experiences that resonate with your audience.</span>
    },
    {
      theme: "green",
      accent: "",
      image: "/icons/GD-Icon-005.png",
      title: <span>Apply <span className="text-green">It</span></span>,
      subtitle: <span>Transform insights into action by implementing strategic branding solutions that drive engagement and loyalty.</span>
    },
    {
      theme: "yellow",
      accent: "",
      image: "/icons/GD-Icon-006.png",
      title: <span>Evaluate <span className="text-yellow">It</span></span>,
      subtitle: <span>Measure impact and refine strategies to ensure continuous improvement and optimal results.</span>
    }
  ]

  return (
    <section className={styles.approach}>
      <div className={styles.approachContent}>
        <div className={styles.approachHeader}>
          <h2>
            <span className="text-green">Our</span> approach
          </h2>
          <p>
            We envision a fully immersive and character-centric branding future, catalyzing creativity for unique brands through consumer-tailored strategies while building a fully engaged and delighted customer base.
          </p>
          <Link href="/contact">
            <button className={styles.button}>Get started</button>
          </Link>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Action
              key={index}
              theme={step.theme}
              accent={step.accent}
              image={step.image}
              title={step.title}
              subtitle={step.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
