import { useTheme } from '../theme.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const onClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onClick}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className={`theme-toggle__icon ${isDark ? 'is-dark' : 'is-light'}`}>
        {/* Sun */}
        <svg className="theme-toggle__sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="12" y1="2.5" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="21.5" y2="12" />
            <line x1="5.3" y1="5.3" x2="7" y2="7" />
            <line x1="17" y1="17" x2="18.7" y2="18.7" />
            <line x1="5.3" y1="18.7" x2="7" y2="17" />
            <line x1="17" y1="7" x2="18.7" y2="5.3" />
          </g>
        </svg>
        {/* Moon */}
        <svg className="theme-toggle__moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
        </svg>
      </span>
    </button>
  )
}
