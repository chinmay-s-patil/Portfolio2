'use client'
import { useEffect, useState, useRef } from 'react'

export default function NavDots({ sections }) {
  const [active, setActive] = useState(0)
  const progressRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const container = document.getElementById('sections')
    if (!container) return

    const sectionEls = Array.from(container.querySelectorAll('.section'))
    
    // Intersection Observer for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = sectionEls.indexOf(entry.target)
            if (idx >= 0) {
              setActive(idx)
              const id = entry.target.id
              if (id && window.history.replaceState) {
                window.history.replaceState(null, '', `#${id}`)
              }
              // Add active class for animations
              sectionEls.forEach((el, i) => {
                el.classList.toggle('active', i === idx)
              })
            }
          }
        })
      },
      { 
        root: container, 
        threshold: [0.5, 0.6, 0.7],
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    sectionEls.forEach(el => observer.observe(el))

    // Scroll progress tracking
    function onScroll() {
      const total = container.scrollHeight - container.clientHeight
      const pos = container.scrollTop
      const pct = total > 0 ? (pos / total) * 100 : 0
      if (progressRef.current) {
        progressRef.current.style.height = `${pct}%`
      }

      // Debounce scrolling state
      setIsScrolling(true)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Keyboard navigation
    function onKey(e) {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        goTo(Math.min(active + 1, sectionEls.length - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(Math.max(active - 1, 0))
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(sectionEls.length - 1)
      }
    }

    window.addEventListener('keydown', onKey)

    return () => {
      observer.disconnect()
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [active, sections])

  function goTo(idx) {
    const container = document.getElementById('sections')
    const sectionEls = Array.from(container.querySelectorAll('.section'))
    const target = sectionEls[idx]
    if (!target) return
    
    target.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <div className="right-nav" aria-label="Section navigation">
      <div className="label">SECTIONS</div>
      
      {/* Progress bar */}
      <div 
        className="progress-track" 
        role="progressbar" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-valuenow={Math.round((active / (sections.length - 1)) * 100)}
        aria-label="Scroll progress"
      >
        <div ref={progressRef} className="progress-fill" />
      </div>

      <div style={{ height: '1rem' }} />

      {/* Navigation dots */}
      {sections.map((s, i) => (
        <div 
          key={s.id} 
          className="nav-row"
        >
          <button
            aria-label={`Go to ${s.label} section`}
            aria-current={i === active ? 'true' : 'false'}
            title={s.label}
            className={`nav-dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i)}
            style={{
              transform: i === active ? 'scale(1.4)' : isScrolling && i !== active ? 'scale(0.9)' : 'scale(1)'
            }}
          />
          <div 
            className="dot-label"
            style={{
              fontWeight: i === active ? '600' : '400'
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}