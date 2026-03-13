"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="size-9 rounded-full bg-white/10 flex items-center justify-center">
        <div className="size-4" />
      </div>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-9 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] flex items-center justify-center transition-colors duration-200 border border-[var(--border-default)]"
      aria-label={isDark ? "Modo claro" : "Modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
    >
      {isDark ? (
        <Sun className="size-4 text-[var(--text-secondary)]" />
      ) : (
        <Moon className="size-4 text-[var(--text-secondary)]" />
      )}
    </button>
  )
}
