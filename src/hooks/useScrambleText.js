import { useEffect } from 'react'
import { animate, scrambleText } from 'animejs'

function scramble(el) {
  animate(el, {
    innerHTML: scrambleText({
      duration: 600,
      settleDuration: 200,
      perturbation: 0.2,
      cursor: '░',
    }),
    easing: 'easeOutCubic',
  })
}

export default function useScrambleText(active) {
  useEffect(() => {
    if (!active) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    if (!('IntersectionObserver' in window)) return

    const els = document.querySelectorAll('[data-scramble]')
    if (!els.length) return

    // Scramble each element the first time it enters the viewport.
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scramble(entry.target)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.3 })

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [active])
}
