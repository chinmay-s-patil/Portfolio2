// app/sections/Experience.jsx
'use client'
import { useEffect, useRef } from 'react'

export default function Experience(){
  const wrapperRef = useRef(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    // intercept vertical wheel to scroll horizontally while possible
    function onWheel(e){
      // only when vertical intent (prevent small sideways swipes)
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return

      const atLeft = el.scrollLeft === 0
      const atRight = Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) < 2

      // if we can scroll horizontally, translate vertical wheel to horizontal scroll
      if ((e.deltaY > 0 && !atRight) || (e.deltaY < 0 && !atLeft)) {
        e.preventDefault()
        el.scrollBy({ left: e.deltaY, behavior: 'smooth' })
      }
      // otherwise allow the natural vertical scroll to proceed (so outer container will scroll)
    }

    // touch support: allow horizontal swipe naturally via overflow-x scroll
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>

      <p className="muted mb-6">Scroll vertically to reach the Experience section. Once there, continued scrolling will move horizontally between Internships and Jobs, then resume vertical scrolling.</p>

      <div
        ref={wrapperRef}
        className="exp-horizontal"
        style={{
          display:'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: 8
        }}
        tabIndex={0}
        aria-label="Experience panels"
      >
        <div
          className="exp-panel card"
          style={{
            minWidth: '100%',
            scrollSnapAlign: 'start'
          }}
        >
          <h3 className="font-semibold">Internships</h3>
          <div className="mt-3">
            <div className="muted text-sm">Full Stack Intern — Appbell Technologies</div>
            <ul className="mt-2 list-disc ml-5 muted">
              <li>Built facial recognition API and integrated it for attendance.</li>
              <li>Worked on Android integration for the API consumer app.</li>
            </ul>
          </div>

          <div className="mt-6">
            <div className="muted text-sm">Research Intern — CSIR SERC</div>
            <ul className="mt-2 list-disc ml-5 muted">
              <li>OpenFOAM experiments for propeller efficiency.</li>
              <li>Wind tunnel and validation support.</li>
            </ul>
          </div>
        </div>

        <div
          className="exp-panel card"
          style={{
            minWidth: '100%',
            scrollSnapAlign: 'start'
          }}
        >
          <h3 className="font-semibold">Jobs & Projects</h3>
          <div className="mt-3">
            <div className="muted text-sm">CFD Engineer / Freelance</div>
            <ul className="mt-2 list-disc ml-5 muted">
              <li>CFD simulations, meshing, postprocessing and dashboarding.</li>
              <li>Project management and visualization for stakeholders.</li>
            </ul>
          </div>

          <div className="mt-6">
            <strong>Selected</strong>
            <p className="muted mt-2">Drone propeller simulation • Solar Vortex Engine • Immersion Cooling analyses</p>
          </div>
        </div>
      </div>

      <p className="muted mt-6">Tip: use the mouse wheel / touchpad to move between the two panels. Use left/right arrow keys to focus horizontally when the panel is focused.</p>
    </div>
  )
}
