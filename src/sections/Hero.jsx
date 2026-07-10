export default function Hero({ data }) {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        {data.availability && (
          <span className="hero__badge" data-scramble>
            <span className="hero__badge-dot" />
            {data.availability}
          </span>
        )}
        <h1 className="hero__name" data-scramble>{data.name}</h1>
        <p className="hero__role" data-scramble>
          {data.role}
          {data.location && <span className="hero__loc"> · {data.location}</span>}
        </p>
        {data.tagline && <p className="hero__tagline" data-scramble>{data.tagline}</p>}
        {data.cta?.length > 0 && (
          <div className="hero__cta">
            {data.cta.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className={`btn ${c.primary ? 'btn--primary' : 'btn--ghost'}`}
              >
                {c.label}
              </a>
            ))}
            {data.resumeUrl && (
              <a href={data.resumeUrl} className="btn btn--link" target="_blank" rel="noreferrer">
                Résumé ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
