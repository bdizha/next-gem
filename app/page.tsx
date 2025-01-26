import { Metadata } from "next"
import { Header } from "components/Header/Header"
import { Footer } from "components/Footer/Footer"
import { VideoPlayer } from "components/VideoPlayer/VideoPlayer"
import styles from "./page.module.scss"

export const metadata: Metadata = {
  title: "BoldIcon - Virtual mobility platform",
  description: "Experience the future of entertainment with BoldLand",
  openGraph: {
    title: "BoldIcon - Virtual mobility platform",
    description: "Experience the future of entertainment with BoldLand",
    type: "website",
  },
}

// Video examples data
export const VIDEOS = {
  boldman: {
    src: "/videos/BoldIcon/BOLDMAN-ENTERING-PEEP.mp4",
    description: "Experience the power of innovation with BoldLand's next-generation science platform. Watch as we transform the future of scientific discovery..."
  }
} as const

export type VideoKey = keyof typeof VIDEOS

export default function Web() {
  return (
    <main className={styles.main}>
      <Header />
      
      <VideoPlayer 
        src={VIDEOS.boldman.src}
        description={VIDEOS.boldman.description}
      />

      <Footer />
    </main>
  )
}