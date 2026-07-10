export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section__head" data-reveal>
        {label && <span className="section__label">{label}</span>}
        {title && <h2 className="section__title" data-scramble>{title}</h2>}
      </div>
      {children}
    </section>
  )
}
