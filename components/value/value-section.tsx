'use client'

import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function ValueSection() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
            Imagine um modelo digital atualizado
            <br className="hidden md:block" />
            {' '}da sua rede logistica.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl font-light text-[var(--blue-primary)]">
            O que voce simularia?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-light text-[var(--blue-primary)] opacity-70">
            O que voce preveria?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p className="mt-10 md:mt-14 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light">
            Um gemeo digital que possibilita simulacao, otimizacao e predicao
            em toda sua operacao logistica — do operacional ao estrategico.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
