import Section from '../components/Section.jsx'
import CountUp from '../components/CountUp.jsx'

export default function About({ data }) {
  return (
    <Section id="about" label="01" title={data.headline || 'About'}>
      <div className="about">
        <div className="about__body" data-reveal>
          {data.body?.map((para, i) => (
            <p key={i} className="about__para" data-scramble>{para}</p>
          ))}
        </div>
        {data.highlights?.length > 0 && (
          <ul className="about__stats">
            {data.highlights.map((h, i) => (
              <li key={h.label} className="stat" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="stat__value"><CountUp value={h.value} /></span>
                <span className="stat__label">{h.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
