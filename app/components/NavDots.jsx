// app/components/NavDots.jsx
'use client'
import { useEffect, useState, useRef } from 'react'

export default function NavDots({ sections }) {
  const [active, setActive] = useState(0)
  const progressRef = useRef(null)

  useEffect(() => {
    const container = document.getElementById('sections')
    if (!container) return

    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sectionEls.indexOf(entry.target)
            if (idx >= 0) setActive(idx)
            const id = entry.target.id
            if (id) history.replaceState(null, '', `#${id}`)
          }
        })
      },
      { root: container, threshold: 0.6 }
    )

    sectionEls.forEach(el => observer.observe(el))

    function onScroll(){
      const total = container.scrollHeight - container.clientHeight
      const pos = container.scrollTop
      const pct = total > 0 ? (pos / total) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
    }
    container.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      container.removeEventListener('scroll', onScroll)
    }
  }, [sections])

  function goTo(idx) {
    const container = document.getElementById('sections')
    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const target = sectionEls[idx]
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="top-nav-row" aria-hidden={false}>
      <div className="nav-row-inner" role="navigation" aria-label="Sections">
        {sections.map((s,i) => (
          <button
            key={s.id}
            aria-label={`Go to ${s.label}`}
            title={s.label}
            className={`nav-dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i)}
            style={{marginRight:12}}
          >
            <span className="sr-only">{s.label}</span>
          </button>
        ))}
      </div>
      <div className="progress-line" aria-hidden>
        <div ref={progressRef} className="progress-fill-h" />
      </div>
    </div>
  )
}
