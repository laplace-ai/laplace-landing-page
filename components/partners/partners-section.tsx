'use client'

import { PARTNERS } from '@/lib/constants'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import Image from 'next/image'

export function PartnersSection() {
  return (
    <section id="parceiros" className="relative py-16 md:py-24 px-6 md:px-8 border-t border-[var(--border-default)]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm tracking-widest uppercase text-[var(--text-tertiary)] font-medium mb-10">
            Parceiros & Programas
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="flex items-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  /* Text fallback when no logo is provided */
                  <span className="text-sm md:text-base font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors duration-300 tracking-wide">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
