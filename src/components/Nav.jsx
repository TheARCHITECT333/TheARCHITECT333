import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ hero, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0 || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const initials = (hero?.name || '')
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="Home">
          <span className="nav__brand-mark">{initials}</span>
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${activeId === link.href.slice(1) ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="nav__cmdk"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            title="Command palette"
          >
            <span className="nav__cmdk-text">⌘</span>
            <span className="nav__cmdk-text">K</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
