'use client'
export default function SectionWrapper({ id, index, children }) {
  return (
    <section id={id} className={`section`} data-section-index={index}>
      <div className="section-inner">
        {children}
      </div>
    </section>
  )
}
