// app/components/NavDots.jsx
'use client'
import { useEffect, useState } from 'react'

export default function NavDots({ sections }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const container = document.getElementById('sections')
    if (!container) return

    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sectionEls.indexOf(entry.target)
            if (idx >= 0) setActive(idx)
            // update URL anchor (without adding to history stack)
            const id = entry.target.id
            if (id) history.replaceState(null, '', `#${id}`)
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    sectionEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function goTo(idx) {
    const container = document.getElementById('sections')
    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const target = sectionEls[idx]
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="nav-dots" aria-hidden={false}>
      {sections.map((s, i) => (
        <button
          key={s.id}
          aria-label={`Go to ${s.label}`}
          className={`nav-dot ${i === active ? 'active' : ''}`}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  )
}
