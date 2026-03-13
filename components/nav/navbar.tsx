'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { NAV_LINKS } from '@/lib/constants'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[var(--bg-overlay)] backdrop-blur-xl border-b border-[var(--border-default)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="size-8 rounded-lg overflow-hidden">
              <svg width="32" height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <rect className="fill-[var(--text-primary)]" width="180" height="180" rx="37" />
                  <g style={{ transform: 'scale(95%)', transformOrigin: 'center' }}>
                    <path className="fill-[var(--bg-base)]"
                      d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z" />
                    <path className="fill-[var(--bg-base)]"
                      d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="180" height="180" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
              Laplace
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
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
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:hello@laplacelog.com"
              className="hidden md:flex items-center px-5 h-9 rounded-full bg-[var(--blue-primary)] hover:bg-[var(--blue-hover)] text-white text-sm font-medium transition-colors duration-200"
            >
              Fale Conosco
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
            className="fixed inset-x-0 top-16 z-40 bg-[var(--bg-base)] border-b border-[var(--border-default)] md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
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
                href="mailto:hello@laplacelog.com"
                className="mt-2 flex items-center justify-center px-5 h-10 rounded-full bg-[var(--blue-primary)] text-white text-sm font-medium"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
