'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { PARTNERS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'
import { ScrollReveal } from '@/components/shared/scroll-reveal'
import Image from 'next/image'

export function PartnersSection() {
  const { t } = useI18n()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <section id="partners" className="relative py-16 md:py-24 px-6 md:px-8 border-t border-[var(--border-default)]">
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <ScrollReveal>
          <p className="text-center text-2xl md:text-3xl tracking-widest uppercase text-[var(--text-tertiary)] font-light mb-14">
            {t('partners.label')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center gap-16 md:gap-24 flex-wrap">
            {PARTNERS.map((partner) => {
              const logoSrc = partner.logo
                ? partner.logo
                : isDark
                  ? partner.logoDark
                  : partner.logoLight

              return (
                <div key={partner.name} className="flex items-center">
                  {logoSrc && mounted ? (
                    <Image
                      src={logoSrc}
                      alt={partner.name}
                      width={400}
                      height={120}
                      className="h-20 md:h-28 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <span className="text-sm md:text-base font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors duration-300 tracking-wide">
                      {partner.name}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
