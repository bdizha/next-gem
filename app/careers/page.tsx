import Image from 'next/image'
import styles from './page.module.scss'
import { Action } from '@/components/Action/Action'

export default function Careers() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2>
              <span className="text-purple">Join</span> our team
            </h2>
            <p>
              Join our mostly creative team, needless to mention, coupled
              with creative art, characters, technologists and gaming
              experts that are also part of our digital services packages
              that we offer our clients. Jump in and take part in our
              journey as we grow the organisation and our client centric
              services. We are a strategic and creative consultancy
              guiding businesses through virtual apparel, avatars, branded
              collections, blockchain apps and the Metaverse at large.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image src="/icons/GD-Icon-011.png" alt="Join Our Team" width={600} height={600} />
          </div>
        </div>
      </section>

      <section className={styles.craft}>
        <div className={styles.craftContent}>
          <div className={styles.craftText}>
            <h2>
              <span className="text-green">Our</span> craft
            </h2>
            <p>
              Graphigem Digital is on the lookout for talented, recent
              graduates, market leading individuals, who enjoy taking a
              creative role in an unconventional digital agency set up. So
              to mention, we all work remotely and like it more that way.
              We're only able to achieve this success because we like
              to think that only self-motivated individuals can make up a
              great team.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.positions}>
        <div className={styles.positionsContent}>
          <Action 
            theme="purple"
            accent=""
            image="/icons/GD-Icon-012.png"
            title={<span>Creative <span className="text-purple">Designer</span></span>}
            subtitle={<span>Join our creative team and help shape the future of digital experiences.</span>}
          />
          <Action 
            theme="green"
            accent=""
            image="/icons/GD-Icon-005.png"
            title={<span>Software <span className="text-green">Engineer</span></span>}
            subtitle={<span>Build innovative solutions and push the boundaries of technology.</span>}
          />
          <Action 
            theme="pink"
            accent=""
            image="/icons/GD-Icon-006.png"
            title={<span>Digital <span className="text-pink">Artist</span></span>}
            subtitle={<span>Create stunning visuals and bring ideas to life in the digital realm.</span>}
          />
        </div>
      </section>
    </main>
  )
}
