import { useEffect, useRef, useState } from 'react'

// Parses a string like "99.98%", "12k", "30+" into { prefix, number, suffix, decimals }.
function parseValue(raw) {
  const match = String(raw).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const [, prefix, numStr, suffix] = match
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { prefix, number: parseFloat(numStr), suffix, decimals }
}

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUp({ value, duration = 1300 }) {
  const parsed = parseValue(value)
  const ref = useRef(null)
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value)

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const current = parsed.number * easeOutCubic(progress)
        setDisplay(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          run()
          obs.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration]) // eslint-disable-line react-hooks/exhaustive-deps

  // If unparseable, just render the raw value.
  if (!parsed) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{display}</span>
}
