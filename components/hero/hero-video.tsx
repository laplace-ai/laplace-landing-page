'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export function HeroVideo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = !mounted || theme === 'dark'

  // Check if video files exist by trying to render them
  // Fallback: animated gradient with subtle logistics silhouettes
  return (
    <div className="absolute inset-0">
      {/* Try video first */}
      <video
        key={isDark ? 'dark' : 'light'}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        onError={(e) => {
          // Hide video element if file doesn't exist
          (e.target as HTMLVideoElement).style.display = 'none'
        }}
      >
        <source
          src="/videos/Hero_video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback: Animated gradient background (always rendered behind video) */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse at 30% 50%, #0f172a 0%, #0A0A0A 50%, #050505 100%)'
              : 'radial-gradient(ellipse at 30% 50%, #e0e7ff 0%, #FFFFFF 50%, #F7F7F5 100%)',
          }}
        />

        {/* Subtle animated grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle logistics silhouettes */}
        <LogisticsSilhouettes isDark={isDark} />
      </div>
    </div>
  )
}

function LogisticsSilhouettes({ isDark }: { isDark: boolean }) {
  const color = isDark ? 'rgba(58, 141, 255, 0.03)' : 'rgba(58, 141, 255, 0.05)'

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Container silhouette */}
      <svg
        className="absolute -right-20 top-1/4 w-[400px] h-[200px] opacity-30"
        viewBox="0 0 400 200"
        fill="none"
      >
        <rect x="20" y="40" width="360" height="140" rx="4" stroke={color} strokeWidth="1.5" />
        <line x1="100" y1="40" x2="100" y2="180" stroke={color} strokeWidth="1" />
        <line x1="180" y1="40" x2="180" y2="180" stroke={color} strokeWidth="1" />
        <line x1="260" y1="40" x2="260" y2="180" stroke={color} strokeWidth="1" />
        <line x1="340" y1="40" x2="340" y2="180" stroke={color} strokeWidth="1" />
        {/* Container ridges */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={30 + i * 18}
            y1="45"
            x2={30 + i * 18}
            y2="175"
            stroke={color}
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Truck silhouette */}
      <svg
        className="absolute -left-10 bottom-1/4 w-[300px] h-[150px] opacity-20"
        viewBox="0 0 300 150"
        fill="none"
      >
        {/* Trailer */}
        <rect x="10" y="30" width="200" height="90" rx="3" stroke={color} strokeWidth="1.5" />
        {/* Cab */}
        <path d="M210 60 L270 60 L280 90 L280 120 L210 120 Z" stroke={color} strokeWidth="1.5" fill="none" />
        {/* Wheels */}
        <circle cx="60" cy="125" r="15" stroke={color} strokeWidth="1.5" />
        <circle cx="150" cy="125" r="15" stroke={color} strokeWidth="1.5" />
        <circle cx="260" cy="125" r="15" stroke={color} strokeWidth="1.5" />
      </svg>

      {/* Pallet silhouette */}
      <svg
        className="absolute right-1/4 bottom-1/6 w-[120px] h-[100px] opacity-15"
        viewBox="0 0 120 100"
        fill="none"
      >
        {/* Pallet base */}
        <rect x="10" y="70" width="100" height="8" rx="1" stroke={color} strokeWidth="1" />
        <rect x="15" y="60" width="12" height="10" stroke={color} strokeWidth="1" />
        <rect x="54" y="60" width="12" height="10" stroke={color} strokeWidth="1" />
        <rect x="93" y="60" width="12" height="10" stroke={color} strokeWidth="1" />
        {/* Boxes on pallet */}
        <rect x="15" y="20" width="35" height="40" rx="1" stroke={color} strokeWidth="1" />
        <rect x="55" y="30" width="30" height="30" rx="1" stroke={color} strokeWidth="1" />
        <rect x="25" y="5" width="25" height="15" rx="1" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  )
}
