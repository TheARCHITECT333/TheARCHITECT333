import { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from '../theme.jsx'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CommandPalette({ open, setOpen, config }) {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Build the action list from config.
  const commands = useMemo(() => {
    const list = []

    SECTIONS.forEach((s) => {
      if (document.getElementById(s.id)) {
        list.push({
          id: `go-${s.id}`,
          label: `Go to ${s.label}`,
          hint: 'Section',
          icon: '→',
          run: () => scrollToId(s.id),
        })
      }
    })

    list.push({
      id: 'theme',
      label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
      hint: 'Appearance',
      icon: theme === 'dark' ? '☀' : '☾',
      run: () => toggleTheme(),
    })

    if (config?.contact?.email) {
      list.push({
        id: 'copy-email',
        label: 'Copy email address',
        hint: config.contact.email,
        icon: '⎘',
        run: () => navigator.clipboard?.writeText(config.contact.email),
      })
    }
    if (config?.hero?.resumeUrl) {
      list.push({
        id: 'resume',
        label: 'Open résumé',
        hint: 'New tab',
        icon: '↗',
        run: () => window.open(config.hero.resumeUrl, '_blank', 'noopener'),
      })
    }
    config?.socials?.forEach((s) => {
      list.push({
        id: `social-${s.label}`,
        label: `Open ${s.label}`,
        hint: 'External',
        icon: '↗',
        run: () => window.open(s.href, '_blank', 'noopener'),
      })
    })

    return list
  }, [config, theme, toggleTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.hint?.toLowerCase().includes(q))
  }, [commands, query])

  // Global ⌘K / Ctrl+K shortcut.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  // Reset + focus when opening; lock background scroll.
  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      const id = requestAnimationFrame(() => inputRef.current?.focus())
      document.body.style.overflow = 'hidden'
      return () => {
        cancelAnimationFrame(id)
        document.body.style.overflow = ''
      }
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  if (!open) return null

  const choose = (cmd) => {
    if (!cmd) return
    setOpen(false)
    // Defer so the palette closes before the action (e.g. theme reveal) runs.
    requestAnimationFrame(() => cmd.run())
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      choose(filtered[active])
    }
  }

  return (
    <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="cmdk__backdrop" onClick={() => setOpen(false)} />
      <div className="cmdk__panel" onKeyDown={onKeyDown}>
        <div className="cmdk__search">
          <span className="cmdk__search-icon">⌕</span>
          <input
            ref={inputRef}
            className="cmdk__input"
            placeholder="Jump to a section, switch theme…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="cmdk__esc">esc</kbd>
        </div>
        <ul className="cmdk__list" ref={listRef}>
          {filtered.length === 0 && <li className="cmdk__empty">No results</li>}
          {filtered.map((cmd, i) => (
            <li key={cmd.id}>
              <button
                type="button"
                className={`cmdk__item ${i === active ? 'is-active' : ''}`}
                onMouseMove={() => setActive(i)}
                onClick={() => choose(cmd)}
              >
                <span className="cmdk__item-icon">{cmd.icon}</span>
                <span className="cmdk__item-label">{cmd.label}</span>
                {cmd.hint && <span className="cmdk__item-hint">{cmd.hint}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
