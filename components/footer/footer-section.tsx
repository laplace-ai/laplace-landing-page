'use client'

import { ScrollReveal } from '@/components/shared/scroll-reveal'
import { Mail, Linkedin } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* Chroma-inspired gradient background */}
      <div className="absolute inset-0">
        {/* Base gradient: bg-base → deep purple/indigo → dark */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, var(--gradient-start) 0%, var(--gradient-mid) 40%, var(--gradient-end) 100%)',
          }}
        />

        {/* Aurora / rainbow wave at the bottom — stronger */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px]">
          {/* Blue band */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 60% at 25% 100%, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
            }}
          />
          {/* Teal-green band */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(52, 211, 153, 0.15) 0%, transparent 60%)',
            }}
          />
          {/* Purple band */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 55% at 75% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 65%)',
            }}
          />
          {/* Warm accent */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 40% at 90% 100%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
            }}
          />
          {/* Final diffuse glow line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[120px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(59, 130, 246, 0.15), rgba(52, 211, 153, 0.12), rgba(251, 191, 36, 0.08), rgba(239, 68, 68, 0.06), rgba(139, 92, 246, 0.15))',
              filter: 'blur(60px)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-28 md:pt-36 pb-12 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              Vamos Conversar
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-[var(--text-secondary)] font-light">
              Quer entender como o Digital Twin pode transformar sua operacao?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8">
              <a
                href="mailto:hello@laplacelog.com"
                className="inline-flex items-center px-8 h-12 rounded-full bg-[var(--blue-primary)] hover:bg-[var(--blue-hover)] text-white text-sm font-medium transition-colors duration-200 gap-2"
              >
                <Mail className="size-4" />
                hello@laplacelog.com
              </a>
            </div>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/laplace-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-[var(--bg-surface)]/50 hover:bg-[var(--bg-surface)] flex items-center justify-center transition-colors border border-[var(--border-default)]/50"
              >
                <Linkedin className="size-4 text-[var(--text-secondary)]" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[var(--border-default)]/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-tertiary)]">
              &copy; {new Date().getFullYear()} Laplace Log. Todos os direitos reservados.
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">
              Sao Paulo, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
