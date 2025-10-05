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

    // track progress on scroll
    function onScroll(){
      const total = container.scrollHeight - container.clientHeight
      const pos = container.scrollTop
      const pct = total > 0 ? (pos / total) * 100 : 0
      if (progressRef.current) progressRef.current.style.height = `${pct}%`
    }
    container.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // keyboard navigation
    function onKey(e){
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault(); goTo(Math.min(active + 1, sectionEls.length - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault(); goTo(Math.max(active - 1, 0))
      } else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
      else if (e.key === 'End') { e.preventDefault(); goTo(sectionEls.length - 1) }
    }
    window.addEventListener('keydown', onKey)

    return () => {
      observer.disconnect()
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [active, sections])

  function goTo(idx) {
    const container = document.getElementById('sections')
    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const target = sectionEls[idx]
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="right-nav" aria-hidden={false}>
      <div className="label">SECTION</div>
      <div className="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={0}>
        <div ref={progressRef} className="progress-fill" />
      </div>

      <div style={{height:12}} />

      {sections.map((s, i) => (
        <div key={s.id} className="nav-row" style={{display:'flex', alignItems:'center', gap:8}}>
          <button
            aria-label={`Go to ${s.label}`}
            title={s.label}
            className={`nav-dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
          <div className="dot-label" style={{marginLeft:8, color:'var(--muted)'}}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
