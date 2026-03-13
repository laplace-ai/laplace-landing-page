'use client'

import { motion } from 'framer-motion'
import { HeroVideo } from './hero-video'
import { useI18n } from '@/lib/i18n'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <HeroVideo />

      {/* Top gradient — subtle, for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--bg-base)]/60 to-transparent pointer-events-none z-[1]" />
      {/* Bottom gradient — fades into next section */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[var(--bg-base)] via-[var(--bg-base)]/60 to-transparent pointer-events-none z-[1]" />

      {/* Giant "Laplace Log" — bottom-left, Gotham-inspired */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute bottom-[5vw] left-0 z-10 px-6 md:px-10 lg:px-14 select-none flex items-baseline"
      >
        <span className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-extralight tracking-tighter leading-none text-[var(--text-hero)]">
          Laplace
        </span>
        <span className="inline-block w-[3vw]" />
        <span className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-extralight tracking-tighter leading-none text-[var(--text-hero)]">
          Log
        </span>
      </motion.h1>

      {/* Tagline — separately positioned, pinned to very bottom */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-[3vw] left-0 right-0 z-10 text-center text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--text-secondary)] font-light"
      >
        {t('hero.tagline')}
      </motion.p>

      {/* Scroll indicator — subtle animated line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-8 hidden md:block z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[var(--text-tertiary)]/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
