import { useEffect } from 'react'

// Observes all [data-reveal] elements and adds `is-in` as they enter the viewport.
// Elements stay hidden only while the `js-reveal` class is on <html>, so the page
// is fully visible if JS is disabled or IntersectionObserver is unsupported.
export default function useScrollReveal(active) {
  useEffect(() => {
    if (!active) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      // Reveal everything immediately; never hide.
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [active])
}
