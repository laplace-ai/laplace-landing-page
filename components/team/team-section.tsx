'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

const linkClass = 'underline decoration-[var(--blue-primary)] underline-offset-2 hover:text-[var(--blue-primary)] transition-colors duration-200'

function BioLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

export function TeamSection() {
  const { t } = useI18n()

  const founders = [
    {
      ...TEAM_MEMBERS[0],
      tagline: t('team.pedro.tagline'),
      education: t('team.pedro.education'),
      bio: null as ReactNode,
    },
    {
      ...TEAM_MEMBERS[1],
      tagline: t('team.gabriel.tagline'),
      education: t('team.gabriel.education'),
      bio: null as ReactNode,
    },
  ]

  // Pedro bio with hyperlinks
  founders[0].bio = t('team.pedro.bio').includes('Digital Twin') ? (
    <>
      {t('team.pedro.bio').split('Digital Twin')[0]}
      <BioLink href="https://ieeexplore.ieee.org/document/10407531">Digital Twin</BioLink>
      {t('team.pedro.bio').split('Digital Twin')[1]}
    </>
  ) : t('team.pedro.bio')

  // Gabriel bio with hyperlinks
  founders[1].bio = t('team.gabriel.bio').includes('patenteou') ? (
    <>
      {t('team.gabriel.bio').split('patenteou')[0]}
      <BioLink href="https://patents.google.com/patent/US11897750B2">patenteou</BioLink>
      {t('team.gabriel.bio').split('patenteou')[1]}
    </>
  ) : t('team.gabriel.bio').includes('patented') ? (
    <>
      {t('team.gabriel.bio').split('patented')[0]}
      <BioLink href="https://patents.google.com/patent/US11897750B2">patented</BioLink>
      {t('team.gabriel.bio').split('patented')[1]}
    </>
  ) : t('team.gabriel.bio')

  return (
    <section id="founders" className="relative px-6 md:px-8" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ maxWidth: '32rem', marginBottom: '5rem' }}>
          <ScrollReveal>
            <p className="text-sm tracking-widest uppercase text-[var(--blue-primary)] font-medium mb-4">
              {t('team.label')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              {t('team.heading')}
            </h2>
          </ScrollReveal>
        </div>

        {/* Founders */}
        <div className="flex flex-col gap-24 md:gap-32">
          {founders.map((founder, idx) => {
            const isReversed = idx % 2 !== 0

            return (
              <ScrollReveal key={founder.name} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 lg:gap-16 ${
                    isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center`}
                >
                  {/* Photo — large */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4 / 5' }}>
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`w-full lg:w-1/2 ${isReversed ? 'lg:text-right' : ''}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                      {founder.name}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--blue-primary)] font-medium mt-2">
                      {founder.role}
                    </p>

                    {/* Tagline */}
                    <p className="mt-4 text-xs md:text-sm font-mono text-[var(--text-tertiary)] tracking-wider">
                      {founder.tagline}
                    </p>
                    <p className="mt-1 text-xs md:text-sm font-mono text-[var(--text-tertiary)] tracking-wider">
                      {founder.education}
                    </p>

                    {/* Bio */}
                    <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                      {founder.bio}
                    </p>

                    {/* LinkedIn */}
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-6 inline-flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--blue-primary)] transition-colors duration-200 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                      >
                        <Linkedin className="size-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
