'use client'

import { useEffect, useRef } from 'react'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { useI18n } from '@/lib/i18n'
import { Mail } from 'lucide-react'

function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const size = 256
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const imageData = ctx.createImageData(size, size)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255
      data[i] = v
      data[i + 1] = v
      data[i + 2] = v
      data[i + 3] = 255
    }

    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity: 0.05,
        mixBlendMode: 'soft-light',
      }}
    />
  )
}

export function FooterSection() {
  const { t } = useI18n()

  return (
    <footer className="relative overflow-hidden" style={{ borderRadius: '3.5rem 3.5rem 0 0' }}>
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            var(--gradient-mid) 0%,
            var(--gradient-end) 100%
          )`,
        }}
      />

      {/* Aurora blurred orbs — softer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '10%',
            left: '-10%',
            background: 'rgba(58, 141, 255, 0.12)',
            filter: 'blur(160px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '20%',
            left: '25%',
            background: 'rgba(139, 92, 246, 0.1)',
            filter: 'blur(150px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            top: '30%',
            left: '50%',
            background: 'rgba(52, 211, 153, 0.06)',
            filter: 'blur(140px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '15%',
            right: '-8%',
            background: 'rgba(236, 72, 153, 0.08)',
            filter: 'blur(150px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '350px',
            bottom: '-80px',
            left: '20%',
            background: 'rgba(67, 56, 202, 0.08)',
            filter: 'blur(130px)',
          }}
        />
      </div>

      {/* Canvas-generated grain noise texture */}
      <NoiseTexture />

      {/* Content */}
      <div className="relative z-10 pt-20 md:pt-28 pb-12 px-6 md:px-8">
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              {t('footer.heading')}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-[var(--text-secondary)] font-light">
              {t('footer.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 mb-8">
              <a
                href="mailto:hello@laplacelog.com"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--blue-primary)] hover:bg-[var(--blue-hover)] text-white text-sm font-normal transition-all duration-200"
                style={{ paddingLeft: '18px', paddingRight: '18px', height: '38px' }}
              >
                <Mail className="size-4" />
                hello@laplacelog.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-tertiary)]">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">
              {t('footer.location')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
