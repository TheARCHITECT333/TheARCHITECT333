import Section from '../components/Section.jsx'

export default function Projects({ data }) {
  // Track the cursor within a card so the spotlight glow can follow it.
  const onMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Section id="projects" label="04" title="Selected Projects">
      <div className="projects">
        {data.map((p, i) => (
          <article
            key={p.name}
            className={`card ${p.featured ? 'card--featured' : ''}`}
            onMouseMove={onMove}
            data-reveal
            style={{ '--reveal-delay': `${i * 80}ms` }}
          >
            <div className="card__glow" aria-hidden="true" />
            {p.image && (
              <div className="card__media">
                <img
                  className="card__img"
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <div className="card__body">
              <div className="card__head">
                <h3 className="card__title" data-scramble>{p.name}</h3>
                {p.featured && <span className="card__star" aria-label="Featured">★</span>}
              </div>
              <p className="card__desc" data-scramble>{p.description}</p>
              {p.tags?.length > 0 && (
                <ul className="card__tags">
                  {p.tags.map((t) => (
                    <li key={t} className="card__tag">{t}</li>
                  ))}
                </ul>
              )}
              {p.links?.length > 0 && (
                <div className="card__links">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link"
                      aria-label={`${p.name} — ${l.label} (opens in new tab)`}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
