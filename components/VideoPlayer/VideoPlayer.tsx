"use client"

import { useState, useRef, useEffect } from "react"
import * as Tooltip from '@radix-ui/react-tooltip'
import { PlayIcon, PauseIcon, ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import styles from "./VideoPlayer.module.scss"

interface VideoPlayerProps {
  src: string
  description: string
}

export function VideoPlayer({ src, description }: VideoPlayerProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [channel, setChannel] = useState(1)
  const [volume, setVolume] = useState(100)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
      setIsPaused(!isPaused)
    }
  }

  const handleChannelUp = () => {
    setChannel(prev => prev + 1)
  }

  const handleChannelDown = () => {
    setChannel(prev => Math.max(1, prev - 1))
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play()
    }
  }, [])

  return (
    <div className={styles.videoPlayerWrapper}>
      <div className={styles.videoPlayer}>
        <div className={styles.videoPlayerContainer}>
          <video
            ref={videoRef}
            src={src}
            loop
            autoPlay
            playsInline
            muted
            className={styles.videoPlayerVideo}
          />

          <div className={styles.videoPlayerVideoOverlay} />

          <div className={styles.videoPlayerControls}>
            <div className={styles.videoPlayerControlButton} onClick={handlePlayPause}>
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </div>

            <div className={styles.videoPlayerChannelControls}>
              <div className={styles.videoPlayerChannelIndicator}>
                Channel {channel}
              </div>
              <div className={styles.videoPlayerControlButton} onClick={handleChannelDown}>
                <ChevronDownIcon />
              </div>
              <div className={styles.videoPlayerControlButton} onClick={handleChannelUp}>
                <ChevronUpIcon />
              </div>
            </div>
          </div>

          {description && (
            <div className={styles.videoPlayerDescriptionOverlay}>
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}