'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FrameworkLayer } from '@/lib/constants'

interface LayerStackProps {
  layers: FrameworkLayer[]
  activeIndexFloat?: unknown // kept for compat, not used
}

export function LayerStack({ layers }: LayerStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Reverse: bottom = physical (index 0), top = application (index 5)
  const reversed = [...layers].reverse()
  const activeLayer = layers[activeIndex]

  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Layer stack — vertical bars, top = application, bottom = physical */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            {reversed.map((layer, visualIdx) => {
              const dataIndex = layers.length - 1 - visualIdx
              const isActive = dataIndex === activeIndex
              const isLast = visualIdx === reversed.length - 1

              return (
                <div key={layer.id} className="w-full flex flex-col items-center">
                  <motion.button
                    onClick={() => setActiveIndex(dataIndex)}
                    className={cn(
                      'relative w-full text-left rounded-lg border transition-all duration-300 cursor-pointer',
                      'flex items-center gap-3 px-5 py-4',
                      isActive
                        ? 'border-[var(--blue-primary)]/40 shadow-lg shadow-[var(--blue-primary)]/10'
                        : 'border-[var(--border-default)] hover:border-[var(--text-tertiary)]/30 hover:bg-[var(--bg-surface)]'
                    )}
                    style={{
                      backgroundColor: isActive ? 'var(--layer-active)' : 'transparent',
                    }}
                    whileHover={{ scale: isActive ? 1 : 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Layer number badge */}
                    <span
                      className={cn(
                        'flex-shrink-0 size-7 rounded-md flex items-center justify-center text-xs font-mono font-bold',
                        isActive
                          ? 'bg-[var(--blue-primary)]/20 text-[var(--blue-primary)]'
                          : 'bg-[var(--bg-surface)] text-[var(--text-tertiary)]'
                      )}
                    >
                      {dataIndex + 1}
                    </span>

                    <layer.icon
                      className="size-4 md:size-5 flex-shrink-0"
                      style={{
                        color: isActive ? 'var(--layer-active-text)' : 'var(--text-tertiary)',
                      }}
                    />
                    <span
                      className={cn(
                        'text-sm md:text-base font-medium tracking-wide',
                        isActive ? '' : 'text-[var(--text-secondary)]'
                      )}
                      style={isActive ? { color: 'var(--layer-active-text)' } : undefined}
                    >
                      {layer.title}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-layer"
                        className="absolute inset-0 rounded-lg border-2 border-[var(--blue-primary)]/30"
                        style={{
                          boxShadow: '0 0 20px rgba(58, 141, 255, 0.1)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>

                  {/* Arrow between layers */}
                  {!isLast && (
                    <div className="py-1 flex items-center justify-center">
                      <ChevronUp
                        className="size-4"
                        style={{ color: 'var(--layer-arrow)' }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Description panel */}
        <div className="w-full lg:w-1/2 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              {/* Layer number + title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-[var(--blue-primary)] tracking-wider">
                  LAYER {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>

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

              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
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

              {/* Layer indicator dots */}
              <div className="mt-8 flex gap-1.5">
                {layers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      'h-1 rounded-full transition-all duration-300 cursor-pointer',
                      i === activeIndex
                        ? 'w-8 bg-[var(--blue-primary)]'
                        : 'w-3 bg-[var(--border-default)] hover:bg-[var(--text-tertiary)]'
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
