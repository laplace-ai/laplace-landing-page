'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { useI18n } from '@/lib/i18n'

const ROTATING_WORDS_PT = ['simular', 'prever', 'otimizar', 'testar']
const ROTATING_WORDS_EN = ['simulate', 'predict', 'optimize', 'test']

export function ValueSection() {
  const { locale, t } = useI18n()
  const [wordIndex, setWordIndex] = useState(0)

  const words = locale === 'pt' ? ROTATING_WORDS_PT : ROTATING_WORDS_EN

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative px-6 md:px-8" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
            {t('value.heading')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl font-light text-[var(--text-secondary)]">
            {locale === 'pt' ? 'Com essa réplica em mãos, o que você iria ' : 'With this replica in hand, what would you '}
            <span className="relative inline-block">
              <span className="invisible">{words[0]}?</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 text-[var(--blue-primary)]"
                >
                  {words[wordIndex]}?
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
