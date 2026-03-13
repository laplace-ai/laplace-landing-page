'use client'

import { TEAM_MEMBERS } from '@/lib/constants'
import { TeamCard } from './team-card'
import { ScrollReveal } from '@/components/shared/scroll-reveal'

export function TeamSection() {
  return (
    <section id="equipe" className="relative py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-widest uppercase text-[var(--blue-primary)] font-medium mb-4 text-center">
            Equipe
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-16">
            Quem esta construindo
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.name} delay={0.1 * (i + 1)}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
