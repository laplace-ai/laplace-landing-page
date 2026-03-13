'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function PlatformSection() {
  const { t } = useI18n()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true
  const screenshotSrc = isDark
    ? '/images/platform/dark_platform.jpeg'
    : '/images/platform/light_platform.jpeg'

  return (
    <section className="relative px-6 md:px-8" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Text header */}
        <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-16 mb-12">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <p className="text-sm tracking-widest uppercase text-[var(--blue-primary)] font-medium mb-4">
                {t('platform.label')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                {t('platform.heading')}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                {t('platform.description')}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Full-width device frame */}
        <ScrollReveal delay={0.25}>
          <div
            className="relative rounded-xl overflow-hidden border border-[var(--border-default)]"
            style={{
              boxShadow: isDark
                ? '0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(58, 141, 255, 0.05)'
                : '0 25px 60px -12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {/* Browser chrome bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border-default)]"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              {/* Traffic light dots */}
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-[#FF5F57]" />
                <div className="size-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="size-2.5 rounded-full bg-[#28C840]" />
              </div>

              {/* URL bar */}
              <div
                className="flex-1 mx-4 px-3 py-1 rounded-md text-xs font-mono text-[var(--text-tertiary)] truncate"
                style={{ backgroundColor: 'var(--bg-base)' }}
              >
                app.laplacelog.com
              </div>
            </div>

            {/* Screenshot — full width, negative margin to crop browser chrome */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              {mounted && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-90px',
                    left: 0,
                    right: 0,
                    bottom: '-90px',
                  }}
                >
                  <Image
                    src={screenshotSrc}
                    alt="Laplace Platform"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'left 35%' }}
                    sizes="(max-width: 1024px) 100vw, 72rem"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
