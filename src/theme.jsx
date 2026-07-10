import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  // The inline script in index.html already resolved this before paint.
  const current = document.documentElement.getAttribute('data-theme')
  if (current === 'light' || current === 'dark') return current
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }, [theme])

  // Toggle with a circular reveal anchored at `origin` ({x, y} in viewport px).
  const toggleTheme = useCallback((origin) => {
    const apply = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!document.startViewTransition || reduceMotion) {
      apply()
      return
    }

    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? window.innerHeight / 2
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(apply)
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
