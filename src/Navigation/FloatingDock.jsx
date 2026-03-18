import { useState, useRef, useEffect } from 'react'

const SECTIONS = [
  {
    id: 'education', label: 'Education',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  },
  {
    id: 'experience', label: 'Experience',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    id: 'skills', label: 'Skills',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    id: 'projects', label: 'Projects',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/><polyline points="2,12 12,17 22,12"/></svg>,
  },
  {
    id: 'openfoam', label: 'OpenFOAM',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
  },
  {
    id: 'cad', label: 'CAD',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
  {
    id: 'visualization', label: 'Tools',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  },
  {
    id: 'events', label: 'Events',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    id: 'upcoming', label: 'Upcoming',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  },
]

const ALL_IDS = ['landing', ...SECTIONS.map(s => s.id), 'contact']
const ICON_SIZE = 32
const GAP = 4

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ label }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(8,12,22,0.97)',
      border: '1px solid rgba(255,255,255,0.14)',
      color: 'rgba(255,255,255,0.9)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      padding: '4px 9px',
      borderRadius: '7px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: 999,
    }}>
      {label}
    </div>
  )
}

const basePill = {
  display: 'flex',
  alignItems: 'center',
  padding: '6px 8px',
  background: 'rgba(8,12,22,0.88)',
  backdropFilter: 'blur(28px)',
  WebkitBackdropFilter: 'blur(28px)',
  borderRadius: 14,
  border: '1px solid rgba(255,255,255,0.11)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
}

// ─── Anchor icon button ───────────────────────────────────────────────────────
function AnchorBtn({ sectionId, label, active, children }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {hov && <Tooltip label={label} />}
      <button
        onClick={() => scrollTo(sectionId)}
        aria-label={label}
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          border: active ? '1px solid rgba(140,255,190,0.5)' : '1px solid rgba(255,255,255,0.09)',
          background: active ? 'rgba(140,255,190,0.13)' : hov ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
          color: active ? 'hsl(145,70%,66%)' : 'rgba(255,255,255,0.75)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          transition: 'all 0.15s ease',
          transform: hov ? 'translateY(-2px)' : 'none',
        }}
      >
        <div style={{ width: 15, height: 15 }}>{children}</div>
      </button>
    </div>
  )
}

// ─── Contact icon button (opens overlay) ─────────────────────────────────────
function ContactBtn({ active }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {hov && <Tooltip label="Contact" />}
      <button
        onClick={() => window.openContactOverlay?.()}
        aria-label="Contact"
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          border: active ? '1px solid rgba(140,255,190,0.5)' : '1px solid rgba(255,255,255,0.09)',
          background: active ? 'rgba(140,255,190,0.13)' : hov ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
          color: active ? 'hsl(145,70%,66%)' : 'rgba(255,255,255,0.75)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          transition: 'all 0.15s ease',
          transform: hov ? 'translateY(-2px)' : 'none',
        }}
      >
        <div style={{ width: 15, height: 15 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.57 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
      </button>
    </div>
  )
}

// ─── Nav icon ─────────────────────────────────────────────────────────────────
function NavIcon({ section, active, expanded, index, total, onNavigate }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        overflow: 'visible',
        flexShrink: 0,
        width: expanded ? ICON_SIZE : 0,
        opacity: expanded ? 1 : 0,
        transition: [
          `width ${expanded ? 0.28 : 0.16}s cubic-bezier(${expanded ? '0.34,1.4,0.64,1' : '0.4,0,1,1'}) ${expanded ? index * 20 : (total - 1 - index) * 10}ms`,
          `opacity ${expanded ? 0.18 : 0.10}s ease ${expanded ? index * 10 : 0}ms`,
        ].join(', '),
      }}
    >
      {hov && expanded && <Tooltip label={section.label} />}
      <button
        onClick={() => { scrollTo(section.id); onNavigate?.() }}
        tabIndex={expanded ? 0 : -1}
        aria-label={section.label}
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          borderRadius: 8,
          border: active ? '1px solid rgba(140,255,190,0.5)' : '1px solid rgba(255,255,255,0.08)',
          background: active ? 'rgba(140,255,190,0.13)' : hov ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
          color: active ? 'hsl(145,70%,66%)' : 'rgba(255,255,255,0.70)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          flexShrink: 0,
          transition: 'all 0.15s ease',
          transform: hov ? 'translateY(-2px)' : 'none',
        }}
      >
        <div style={{ width: 14, height: 14 }}>{section.icon}</div>
      </button>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FloatingDock() {
  const [expanded, setExpanded] = useState(false)
  const [activeSection, setActiveSection] = useState('landing')
  const timerRef = useRef(null)

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

  const open  = () => { clearTimeout(timerRef.current); setExpanded(true) }
  const close = () => { timerRef.current = setTimeout(() => setExpanded(false), 180) }
  const keep  = () => { clearTimeout(timerRef.current) }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <nav
      aria-label="Page navigation"
      onKeyDown={e => { if (e.key === 'Escape') setExpanded(false) }}
      style={{
        position: 'fixed',
        bottom: 'calc(28px + env(safe-area-inset-bottom, 0px))',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      {/* ── Home ── */}
      <div style={basePill}>
        <AnchorBtn sectionId="landing" label="Home" active={activeSection === 'landing'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </AnchorBtn>
      </div>

      {/* ── Dots / nav pill ── */}
      <div
        onMouseEnter={open}
        onMouseLeave={close}
        style={{
          ...basePill,
          position: 'relative',
          overflow: 'visible',
          cursor: expanded ? 'default' : 'pointer',
          transition: 'padding 0.25s ease',
          padding: expanded ? '6px 8px' : '6px 14px',
          minWidth: 52,
          justifyContent: 'center',
        }}
      >
        {/* three dots — shown when collapsed */}
        <div style={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',
          position: 'absolute',
          opacity: expanded ? 0 : 1,
          pointerEvents: 'none',
          transition: 'opacity 0.12s ease',
        }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>

        {/* icons row — shown when expanded */}
        <div
          onMouseEnter={keep}
          onMouseLeave={close}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: expanded ? GAP : 0,
            overflow: 'visible',
            transition: 'gap 0.25s ease',
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
              onNavigate={close}
            />
          ))}
        </div>
      </div>

      {/* ── Contact — opens overlay ── */}
      <div style={basePill}>
        <ContactBtn active={activeSection === 'contact'} />
      </div>
    </nav>
  )
}