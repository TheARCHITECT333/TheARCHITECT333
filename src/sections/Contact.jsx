import Section from '../components/Section.jsx'

export default function Contact({ data, socials }) {
  return (
    <Section id="contact" label="05" title={data.headline || 'Contact'}>
      <div className="contact" data-reveal>
        {data.body && <p className="contact__body" data-scramble>{data.body}</p>}
        {data.email && (
          <a href={`mailto:${data.email}`} className="contact__email" data-scramble>
            {data.email}
          </a>
        )}
        {socials?.length > 0 && (
          <div className="contact__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__social">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
