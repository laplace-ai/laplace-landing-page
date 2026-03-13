'use client'

import { useI18n } from '@/lib/i18n'
import { useFrameworkLayers } from '@/lib/constants'
import { LayerStack } from './layer-stack'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function FrameworkSection() {
  const { t } = useI18n()
  const layers = useFrameworkLayers()

  return (
    <section
      id="framework"
      className="relative px-6 md:px-8"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      {/* Section header */}
      <div style={{ maxWidth: '64rem', margin: '0 auto 4rem' }}>
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-[var(--blue-primary)] font-medium mb-4">
            {t('framework.label')}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            {t('framework.heading')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] font-light" style={{ maxWidth: '36rem' }}>
            {t('framework.description')}
          </p>
        </ScrollReveal>
      </div>

      {/* Layer stack visualization */}
      <LayerStack layers={layers} />
    </section>
  )
}
