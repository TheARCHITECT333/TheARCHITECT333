import Section from '../components/Section.jsx'

export default function Skills({ data }) {
  return (
    <Section id="skills" label="02" title="Skills & Stack">
      <div className="skills">
        {data.map((group, i) => (
          <div key={group.category} className="skills__group" data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <h3 className="skills__category" data-scramble>{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="chip" data-scramble>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
