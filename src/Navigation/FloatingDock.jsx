/**
 * FloatingDock.jsx
 *
 * • Hidden (slides below viewport) while the landing section is active.
 * • Collapsed:  [🏠] | [···] | [📞]
 * • Expanded (hover/focus):  Home + Contact fade out, 9 nav icons spring in.
 * • Tooltip appears on hover over any nav icon.
 * • Keyboard: Tab to focus, Enter/Space to open, Escape to close.
 * • ARIA: role="navigation", aria-expanded, aria-label on every interactive el.
 * • prefers-reduced-motion: all transitions disabled.
 * • iOS safe-area: env(safe-area-inset-bottom).
 */

import { useState, useRef, useEffect, useCallback } from 'react'

// ─── Section manifest ────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'education', label: 'Education',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    id: 'experience', label: 'Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    id: 'skills', label: 'Skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    id: 'projects', label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12,2 2,7 12,12 22,7"/>
        <polyline points="2,17 12,22 22,17"/>
        <polyline points="2,12 12,17 22,12"/>
      </svg>
    ),
  },
  {
    id: 'openfoam', label: 'OpenFOAM',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="15" y1="3" x2="15" y2="21"/>
      </svg>
    ),
  },
  {
    id: 'cad', label: 'CAD',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    id: 'visualization', label: 'Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    id: 'events', label: 'Events',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    id: 'upcoming', label: 'Upcoming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
  },
]

const ALL_IDS   = ['landing', ...SECTIONS.map(s => s.id), 'contact']
const ICON_SIZE = 34  // px
const GAP       = 5   // px

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────
// Rendered inside a position:relative parent that has overflow:visible,
// so it can escape upward without being clipped.
function Tooltip({ label }) {
  return (
    <div
      role="tooltip"
      style={{
        position: 'absolute',
        bottom: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(8,12,22,0.96)',
        border: '1px solid rgba(255,255,255,0.13)',
        color: 'rgba(255,255,255,0.88)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.04em',
        padding: '4px 9px',
        borderRadius: '7px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        // sit above everything else in the pill
        zIndex: 20,
      }}
    >
      {label}
    </div>
  )
}

// ─── Collapsing slot — wraps Home/Contact + their adjacent dividers ──────────
// When `hidden` transitions width→0 and opacity→0 so they vacate space.
function CollapsingSlot({ hidden, reduced, children }) {
  return (
    <div
      aria-hidden={hidden}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        // overflow:hidden clips width during collapse; but this sits OUTSIDE
        // the pill shell flex row so tooltips from children still escape via
        // their own stacking (they use position:fixed or are clipped separately)
        overflow: 'hidden',
        // width collapses to 0; we use maxWidth so the browser can animate it
        maxWidth: hidden ? 0 : 200,
        opacity: hidden ? 0 : 1,
        transition: reduced ? 'none'
          : hidden
            ? 'max-width 0.22s cubic-bezier(0.4,0,1,1), opacity 0.14s ease'
            : 'max-width 0.28s cubic-bezier(0.22,0.9,0.28,1) 0.04s, opacity 0.18s ease 0.04s',
        pointerEvents: hidden ? 'none' : 'auto',
      }}
    >
      {children}
    </div>
  )
}

// ─── Home / Contact anchor buttons ───────────────────────────────────────────
function AnchorBtn({ sectionId, label, active, children }) {
  const [hov, setHov] = useState(false)
  return (
    // overflow:visible here so the tooltip escapes CollapsingSlot's clip.
    // The CollapsingSlot clips via max-width which collapses the button,
    // but the tooltip is hidden while expanded anyway (CollapsingSlot is aria-hidden).
    <div
      style={{ position: 'relative', overflow: 'visible' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {hov && <Tooltip label={label} />}
      <button
        onClick={() => scrollTo(sectionId)}
        aria-label={label}
        aria-current={active ? 'true' : undefined}
        style={{
          width: 36, height: 36,
          borderRadius: 10,
          border: active ? '1px solid rgba(140,255,190,0.5)' : '1px solid rgba(255,255,255,0.09)',
          background: active ? 'rgba(140,255,190,0.13)' : hov ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
          color: active ? 'hsl(145,70%,66%)' : 'rgba(255,255,255,0.75)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, padding: 0,
          transition: 'background 0.15s, border-color 0.15s, transform 0.15s',
          transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        {children}
      </button>
    </div>
  )
}

// ─── Individual nav icon ──────────────────────────────────────────────────────
// Tooltip clipping fix:
//   outer div  →  overflow: visible, fixed width (always ICON_SIZE)
//                 tooltip positioned here, can escape upward freely
//   inner div  →  overflow: hidden, animated width
//                 clips the button during width animation
function NavIcon({ section, active, expanded, index, total, onNavigate }) {
  const [hov, setHov] = useState(false)
  const reduced = prefersReducedMotion()
  const staggerIn  = index * 22
  const staggerOut = (total - 1 - index) * 12

  const widthTransition = reduced ? 'none' : expanded
    ? `width 0.32s cubic-bezier(0.34,1.4,0.64,1) ${staggerIn}ms`
    : `width 0.18s cubic-bezier(0.4,0,1,1) ${staggerOut}ms`

  const opacityTransition = reduced ? 'none' : expanded
    ? `opacity 0.18s ease ${Math.round(staggerIn * 0.5)}ms`
    : 'opacity 0.10s ease'

  return (
    // outer: position:relative for Tooltip, fixed width so tooltip never clips
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        overflow: 'visible',
        // FIXED: Always use full width, never collapse to 0
        width: ICON_SIZE,
        flexShrink: 0,
        opacity: expanded ? 1 : 0,
        transition: opacityTransition,
      }}
    >
      {/* Tooltip renders here — escapes upward freely */}
      {hov && expanded && <Tooltip label={section.label} />}

      {/* inner: overflow:hidden clips the button during width morph */}
      <div
        style={{
          width: expanded ? ICON_SIZE : 0,
          overflow: 'hidden',
          transition: widthTransition,
        }}
      >
        <button
          onClick={() => { scrollTo(section.id); onNavigate?.() }}
          tabIndex={expanded ? 0 : -1}
          aria-label={section.label}
          aria-current={active ? 'true' : undefined}
          style={{
            width: ICON_SIZE, height: ICON_SIZE,
            borderRadius: 9,
            border: active ? '1px solid rgba(140,255,190,0.5)' : '1px solid rgba(255,255,255,0.08)',
            background: active ? 'rgba(140,255,190,0.13)' : hov ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
            color: active ? 'hsl(145,70%,66%)' : 'rgba(255,255,255,0.70)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 0,
            transition: 'background 0.15s, border-color 0.15s, transform 0.15s',
            transform: hov ? 'translateY(-2px)' : 'translateY(0)',
          }}
        >
          <div style={{ width: 15, height: 15, flexShrink: 0 }}>{section.icon}</div>
        </button>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FloatingDock() {
  const [expanded, setExpanded]           = useState(false)
  const [dockVisible, setDockVisible]     = useState(false)
  const [activeSection, setActiveSection] = useState('landing')

  const leaveTimer  = useRef(null)
  const midZoneRef  = useRef(null)
  const reduced     = prefersReducedMotion()

  // Calculate expanded width: 9 icons * 34px + 8 gaps * 5px = 306 + 40 = 346px
  const EXPANDED_WIDTH = SECTIONS.length * ICON_SIZE + (SECTIONS.length - 1) * GAP

  // Show dock whenever we're past landing
  useEffect(() => {
    setDockVisible(activeSection !== 'landing')
  }, [activeSection])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const els = ALL_IDS.map(id => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { root: null, threshold: 0.4 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const expand = useCallback(() => {
    clearTimeout(leaveTimer.current)
    setExpanded(true)
  }, [])

  const collapse = useCallback(() => {
    setExpanded(false)
    midZoneRef.current?.focus()
  }, [])

  const scheduleCollapse = useCallback(() => {
    leaveTimer.current = setTimeout(() => setExpanded(false), 120)
  }, [])

  const cancelCollapse = useCallback(() => {
    clearTimeout(leaveTimer.current)
  }, [])

  useEffect(() => () => clearTimeout(leaveTimer.current), [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && expanded) {
      e.stopPropagation()
      collapse()
    }
  }, [expanded, collapse])

  const dockTransform = dockVisible
    ? 'translateX(-50%) translateY(0)'
    : 'translateX(-50%) translateY(130%)'

  const dockTransition = reduced ? 'none' : dockVisible
    ? 'transform 0.38s cubic-bezier(0.22,0.9,0.28,1), opacity 0.22s ease'
    : 'transform 0.28s cubic-bezier(0.4,0,1,1), opacity 0.18s ease'

  const divider = (
    <div
      aria-hidden="true"
      style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.10)', flexShrink: 0 }}
    />
  )

  return (
    <nav
      aria-label="Page navigation"
      onKeyDown={handleKeyDown}
      onMouseEnter={cancelCollapse}
      onMouseLeave={scheduleCollapse}
      style={{
        position: 'fixed',
        bottom: 'calc(28px + env(safe-area-inset-bottom, 0px))',
        left: '50%',
        transform: dockTransform,
        zIndex: 200,
        pointerEvents: dockVisible ? 'auto' : 'none',
        opacity: dockVisible ? 1 : 0,
        transition: dockTransition,
        willChange: 'transform, opacity',
        overflow: 'visible',
      }}
    >
      {/* Pill shell — overflow:visible critical for tooltips */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        padding: '7px 9px',
        background: 'rgba(8,12,22,0.88)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderRadius: 17,
        border: '1px solid rgba(255,255,255,0.11)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
        overflow: 'visible',
      }}>

        {/* Home + left divider — collapse when expanded */}
        <CollapsingSlot hidden={expanded} reduced={reduced}>
          <AnchorBtn sectionId="landing" label="Home" active={activeSection === 'landing'}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </AnchorBtn>
          {divider}
        </CollapsingSlot>

        {/* Middle zone — ··· dissolves ↔ nav icons spring in */}
        <div
          ref={midZoneRef}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-label="Browse sections"
          onMouseEnter={expand}
          onFocus={expand}
          onBlur={scheduleCollapse}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); expand() }
          }}
          style={{
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: 36,
            width: expanded ? EXPANDED_WIDTH : 36,
            outline: 'none',
            borderRadius: 6,
            overflow: 'visible',
            transition: reduced ? 'none' : 'width 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* ··· dots */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              display: 'flex', gap: 4, alignItems: 'center',
              opacity: expanded ? 0 : 1,
              transform: expanded ? 'scale(0.4)' : 'scale(1)',
              transition: reduced ? 'none' : 'opacity 0.14s ease, transform 0.14s ease',
              pointerEvents: 'none',
            }}
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.45)' }} />
            ))}
          </div>

          {/* Nav icons */}
          <div
            role="group"
            aria-label="Section links"
            style={{
              display: 'flex', alignItems: 'center',
              gap: expanded ? GAP : 0,
              transition: reduced ? 'none' : 'width 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'visible',
            }}
          >
            {SECTIONS.map((section, i) => (
              <NavIcon
                key={section.id}
                section={section}
                active={activeSection === section.id}
                expanded={expanded}
                index={i}
                total={SECTIONS.length}
                onNavigate={scheduleCollapse}
              />
            ))}
          </div>
        </div>

        {/* Right divider + Contact — collapse when expanded */}
        <CollapsingSlot hidden={expanded} reduced={reduced}>
          {divider}
          <AnchorBtn sectionId="contact" label="Contact" active={activeSection === 'contact'}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </AnchorBtn>
        </CollapsingSlot>

      </div>
    </nav>
  )
}

