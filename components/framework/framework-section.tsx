'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FRAMEWORK_LAYERS } from '@/lib/constants'
import { LayerStack } from './layer-stack'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function FrameworkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress to active layer index (0-5)
  const activeIndexFloat = useTransform(scrollYProgress, [0.15, 0.75], [0, 5.99])

  return (
    <section
      id="framework"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-8"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto mb-16 md:mb-24">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-[var(--blue-primary)] font-medium mb-4">
            Arquitetura
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            O Digital Twin
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-xl font-light">
            Seis camadas que transformam dados brutos em decisoes inteligentes.
          </p>
        </ScrollReveal>
      </div>

      {/* Layer stack visualization */}
      <LayerStack
        layers={FRAMEWORK_LAYERS}
        activeIndexFloat={activeIndexFloat}
      />
    </section>
  )
}
