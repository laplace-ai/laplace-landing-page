'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { useI18n } from '@/lib/i18n'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const { resolvedTheme } = useTheme()
  const { locale, toggleLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Product', href: '#framework' },
    { label: 'Founders', href: '#founders' },
  ]

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[var(--bg-base)] border-b border-[var(--border-default)]'
            : 'bg-[var(--bg-base)]'
        )}
      >
        <div className="relative w-full flex items-center justify-between h-20" style={{ paddingLeft: '2.5vw', paddingRight: '2.5vw' }}>
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <Image
              src={mounted && resolvedTheme === 'dark' ? '/images/logos/logo-dark.png' : '/images/logos/logo.png'}
              alt="Laplace"
              width={140}
              height={36}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop nav links — absolutely centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-2.5 h-8 rounded-full text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="size-3.5" />
              <span className="uppercase">{locale === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            <ThemeToggle />

            <a
              href="https://www.linkedin.com/in/p-bacelar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center rounded-lg bg-[var(--blue-primary)] hover:bg-[var(--blue-hover)] text-white text-sm font-normal transition-all duration-200" style={{ paddingLeft: '18px', paddingRight: '18px', height: '38px' }}
            >
              Demo
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden size-9 rounded-full bg-[var(--bg-surface)] flex items-center justify-center border border-[var(--border-default)]"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="size-4 text-[var(--text-secondary)]" />
              ) : (
                <Menu className="size-4 text-[var(--text-secondary)]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-[var(--bg-base)] border-b border-[var(--border-default)] md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/p-bacelar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center rounded-lg bg-[var(--blue-primary)] text-white text-sm font-normal" style={{ paddingLeft: '18px', paddingRight: '18px', height: '38px' }}
              >
                Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
