import { useEffect } from 'react'
import 'particles.js'
import { useTheme } from '../theme.jsx'

// Tear down any existing particles instance + leftover canvas so we can
// re-initialize cleanly (e.g. with a new color when the theme changes).
function destroyParticles() {
  try {
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom.forEach((dom) => {
        try { dom.pJS.fn.vendors.destroypJS() } catch (e) { /* ignore */ }
      })
      window.pJSDom = []
    }
  } catch (e) { /* ignore */ }
  const container = document.getElementById('particles-js')
  if (container) container.querySelectorAll('canvas').forEach((c) => c.remove())
}

export default function ParticlesBackground() {
  const { theme } = useTheme()

  // Re-initialize whenever the theme changes so the particles stay visible
  // against the current background (accent on dark, near-black on light).
  useEffect(() => {
    try {
      if (typeof window.particlesJS !== 'function') return

      // particles.js uses arguments.callee which is banned in strict mode (ESM).
      // Supply a compliant deepExtend before calling.
      Object.deepExtend = function deepExtend(out, src) {
        for (var key in src) {
          if (src[key] && src[key].constructor && src[key].constructor === Object) {
            out[key] = out[key] || {}
            deepExtend(out[key], src[key])
          } else {
            out[key] = src[key]
          }
        }
        return out
      }

      destroyParticles()

      // --accent is theme-independent, so we branch on the theme directly to
      // avoid depending on [data-theme] being applied before this effect runs.
      const style = getComputedStyle(document.documentElement)
      const accent = style.getPropertyValue('--accent').trim() || '#5eead4'
      const color = theme === 'light' ? '#18181b' : accent

      window.particlesJS('particles-js', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: color },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
          opacity: { value: 0.35, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: false, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 180, line_linked: { opacity: 0.35 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      })
    } catch (e) {
      console.warn('[Particles] init failed:', e)
    }

    return () => destroyParticles()
  }, [theme])

  return <div id="particles-js" />
}
