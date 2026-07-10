import Section from '../components/Section.jsx'

export default function Experience({ data }) {
  return (
    <Section id="experience" label="03" title="Experience">
      <ol className="timeline">
        {data.map((job, i) => (
          <li key={i} className="timeline__item" data-reveal>
            <div className="timeline__marker" />
            <div className="timeline__content">
              <div className="timeline__head">
                <h3 className="timeline__role" data-scramble>
                  {job.role} <span className="timeline__at">@ {job.company}</span>
                </h3>
                <span className="timeline__period" data-scramble>{job.period}</span>
              </div>
              {(job.location || job.summary) && (
                <p className="timeline__summary" data-scramble>
                  {job.location && <span className="timeline__loc">{job.location}</span>}
                  {job.location && job.summary && ' — '}
                  {job.summary}
                </p>
              )}
              {job.achievements?.length > 0 && (
                <ul className="timeline__list">
                  {job.achievements.map((a, j) => (
                    <li key={j} data-scramble>{a}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
