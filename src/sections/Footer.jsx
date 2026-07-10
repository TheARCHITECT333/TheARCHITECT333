export default function Footer({ data, socials }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__meta">
          <span data-scramble>© {year} · {data?.text}</span>
          {data?.note && <span className="footer__note" data-scramble>{data.note}</span>}
        </div>
        {socials?.length > 0 && (
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
