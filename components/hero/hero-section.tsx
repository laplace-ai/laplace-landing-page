'use client'

import { motion } from 'framer-motion'
import { HeroVideo } from './hero-video'

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background video or fallback */}
      <HeroVideo />

      {/* Softer gradient overlay — just enough for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-base)] pointer-events-none" />

      {/* Giant "Laplace Log" text — rendered ABOVE the overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="select-none text-center"
        >
          <span className="block text-[15vw] md:text-[14vw] lg:text-[13vw] font-extralight tracking-tight leading-[0.85] text-[var(--text-primary)]">
            Laplace
          </span>
          <span className="block text-[10vw] md:text-[9vw] lg:text-[8vw] font-thin tracking-tight leading-[0.85] text-[var(--text-secondary)]">
            Log
          </span>
        </motion.h1>
      </div>

      {/* Tagline at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-10 left-0 right-0 text-center z-10"
      >
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--text-tertiary)] font-light">
          Digital Twin para Redes Logisticas
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-8 hidden md:block z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--text-tertiary)] to-transparent"
        />
      </motion.div>
    </section>
  )
}
