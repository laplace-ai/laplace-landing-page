'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, type MotionValue, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { FrameworkLayer } from '@/lib/constants'

interface LayerStackProps {
  layers: FrameworkLayer[]
  activeIndexFloat: MotionValue<number>
}

export function LayerStack({ layers, activeIndexFloat }: LayerStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  // Subscribe to scroll-driven active index
  useEffect(() => {
    const unsubscribe = activeIndexFloat.on('change', (v) => {
      const idx = Math.min(Math.floor(v), layers.length - 1)
      if (idx >= 0) setActiveIndex(idx)
    })
    return unsubscribe
  }, [activeIndexFloat, layers.length])

  const displayIndex = hoverIndex ?? activeIndex
  const activeLayer = layers[displayIndex]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Layer stack visualization */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            className="relative w-full max-w-md"
            style={{
              perspective: '1000px',
            }}
          >
            <div
              className="relative"
              style={{
                transform: 'rotateX(45deg) rotateZ(-10deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {layers.map((layer, i) => {
                const isActive = i === displayIndex
                const isPast = i <= displayIndex

                return (
                  <motion.div
                    key={layer.id}
                    className={cn(
                      'relative w-full h-14 md:h-16 rounded-lg border cursor-pointer transition-all duration-500',
                      isActive
                        ? 'border-[var(--blue-primary)]/40 shadow-lg shadow-[var(--blue-primary)]/10 z-10'
                        : isPast
                          ? 'border-[var(--border-default)] opacity-80'
                          : 'border-[var(--border-subtle)] opacity-40'
                    )}
                    style={{
                      backgroundColor: `var(--layer-${i + 1})`,
                      marginBottom: '8px',
                      transform: isActive ? 'scale(1.03) translateZ(10px)' : 'scale(1) translateZ(0px)',
                      transition: 'transform 0.5s ease, opacity 0.5s ease',
                    }}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 flex items-center px-4 md:px-6 overflow-hidden">
                      <layer.icon
                        className={cn(
                          'size-4 md:size-5 mr-3 flex-shrink-0 transition-colors duration-300',
                          isActive ? 'text-[var(--blue-primary)]' : ''
                        )}
                        style={{ color: isActive ? 'var(--blue-primary)' : `var(--layer-text-${i + 1})` }}
                      />
                      <span
                        className="text-xs md:text-sm font-medium tracking-wide truncate"
                        style={{ color: `var(--layer-text-${i + 1})` }}
                      >
                        {layer.title}
                      </span>
                    </div>

                    {/* Active glow */}
                    {isActive && (
                      <motion.div
                        layoutId="layer-glow"
                        className="absolute inset-0 rounded-lg border-2 border-[var(--blue-primary)]/30"
                        style={{
                          boxShadow: '0 0 30px rgba(58, 141, 255, 0.15), inset 0 0 30px rgba(58, 141, 255, 0.05)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Description panel */}
        <div className="w-full lg:w-1/2 min-h-[200px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-[var(--blue-subtle)] flex items-center justify-center">
                  <activeLayer.icon className="size-5 text-[var(--blue-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    {activeLayer.title}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-tertiary)] tracking-wider">
                    {activeLayer.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
                {activeLayer.description}
              </p>

              {activeLayer.examples && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeLayer.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-default)]"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              )}

              {/* Layer indicator */}
              <div className="mt-8 flex gap-1.5">
                {layers.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'h-1 rounded-full transition-all duration-300',
                      i === displayIndex
                        ? 'w-8 bg-[var(--blue-primary)]'
                        : i <= displayIndex
                          ? 'w-3 bg-[var(--blue-primary)]/30'
                          : 'w-3 bg-[var(--border-default)]'
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
