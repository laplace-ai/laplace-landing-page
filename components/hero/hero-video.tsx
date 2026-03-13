'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect, useRef } from 'react'

export function HeroVideo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = !mounted || resolvedTheme === 'dark'
  const videoSrc = isDark
    ? '/videos/dark_Hero_video_short.mp4'
    : '/videos/light_Hero_video_short.mp4'

  // When theme changes, reload the video
  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      })
    }
  }, [isDark, mounted])

  return (
    <div className="absolute inset-0">
      {/* Video background — high opacity for Gotham-style full-bleed look */}
      <video
        ref={videoRef}
        key={isDark ? 'dark' : 'light'}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: isDark ? 0.55 : 0.45 }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback gradient (behind video, visible if video fails to load) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at 30% 50%, #0f172a 0%, #0A0A0A 50%, #050505 100%)'
              : 'radial-gradient(ellipse at 30% 50%, #e0e7ff 0%, #FFFFFF 50%, #F7F7F5 100%)',
          }}
        />
      </div>
    </div>
  )
}
