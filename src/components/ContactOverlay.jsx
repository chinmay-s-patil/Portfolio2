import { useEffect, useState } from 'react'

// No border ring. Text uses letterSpacing to spread around the arc
// with a visible gap between start and end.
// Each circleText ends with a separator that creates the gap visually.

const CONTACT_OPTIONS = [
  {
    id: 'project',
    label: 'Start a Project',
    circleText: 'PROJECT ENQUIRY',
    action: () => { window.location.href = 'mailto:patil.chinmay3031@gmail.com?subject=Project Enquiry' },
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M8 32 L20 8 L32 32 M13 25 h14" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'hire',
    label: 'Hire Me',
    circleText: 'OPEN TO WORK',
    action: () => { window.open('https://www.linkedin.com/in/chinmay-shashikant-patil/', '_blank') },
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="9" y="14" width="22" height="16" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
        <path d="M15 14V11a5 5 0 0 1 10 0v3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="2.5" fill="rgba(255,255,255,0.9)"/>
      </svg>
    ),
  },
  {
    id: 'work',
    label: 'Watch My Work',
    circleText: 'WATCH  ·  MY WORK',
    action: () => { window.open('https://www.youtube.com/@ChinDoesSims', '_blank') },
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="11" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
        <circle cx="20" cy="20" r="4" fill="rgba(255,255,255,0.9)"/>
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'hi',
    label: 'Say Hi',
    circleText: 'GET IN TOUCH',
    action: () => { window.location.href = 'mailto:patil.chinmay3031@gmail.com' },
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="7" y="10" width="26" height="20" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
        <path d="M7 13l13 9 13-9" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ContactOverlay({ isOpen, onClose }) {
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: isOpen ? 'rgba(0,0,0,0.72)' : 'rgba(0,0,0,0)',
          backdropFilter: isOpen ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: isOpen ? 'blur(8px)' : 'none',
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'background 0.45s ease, backdrop-filter 0.45s ease',
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 301,
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isOpen ? 'all' : 'none',
        }}
      >
        <div style={{
          background: 'rgba(10,14,26,0.97)',
          borderRadius: '24px 24px 0 0',
          padding: '28px 64px 40px',
          boxShadow: '0 -12px 80px rgba(0,0,0,0.7)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}>

          {/* Drag handle */}
          <div style={{
            width: '44px',
            height: '4px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '2px',
            margin: '0 auto 36px',
          }} />

          {/* Header row */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '52px',
          }}>
            <div>
              <p style={{
                fontSize: '11px',
                fontWeight: '700',
                color: 'hsl(140, 70%, 60%)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '8px',
                fontFamily: 'Inter, sans-serif',
              }}>
                Chinmay Patil
              </p>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#fff',
                margin: 0,
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.1,
              }}>
                How can I help?
              </h2>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '18px',
                lineHeight: 1,
                transition: 'background 0.2s, color 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Option circles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginBottom: '48px',
          }}>
            {CONTACT_OPTIONS.map((opt) => {
              const isHov = hovered === opt.id
              return (
                <div
                  key={opt.id}
                  onClick={opt.action}
                  onMouseEnter={() => setHovered(opt.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '18px',
                    cursor: 'pointer',
                    padding: '8px',
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '160px',
                    height: '160px',
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: isHov ? 'scale(1.08)' : 'scale(1)',
                  }}>
                    {/*
                      SVG viewBox 100×100.
                      Text arc path radius = 40 (close to edge, no border circle).
                      Arc circumference = 2 * π * 40 ≈ 251.
                      We DON'T set textLength — instead we use letterSpacing="8"
                      so characters spread naturally and leave a visible gap
                      between where the text ends and where it began.
                    */}
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        transition: 'transform 0.7s ease',
                        transform: isHov ? 'rotate(360deg)' : 'rotate(0deg)',
                      }}
                    >
                      {/* NO circle border — text only */}
                      <defs>
                        <path
                          id={`arc-${opt.id}`}
                          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                        />
                      </defs>
                      <text
                        fontSize="8.5"
                        fill={isHov ? 'hsl(140, 70%, 60%)' : 'rgba(255,255,255,0.45)'}
                        fontFamily="Inter, Helvetica Neue, Arial, sans-serif"
                        fontWeight="600"
                        letterSpacing="8"
                        style={{ transition: 'fill 0.3s ease' }}
                      >
                        <textPath href={`#arc-${opt.id}`} startOffset="5%">
                          {opt.circleText}
                        </textPath>
                      </text>
                    </svg>

                    {/* Center icon — stays still while ring rotates */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.35s ease',
                      transform: isHov ? 'scale(1.12)' : 'scale(1)',
                    }}>
                      {opt.icon}
                    </div>
                  </div>

                  {/* Label below */}
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: isHov ? '#fff' : 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.04em',
                    fontFamily: 'Inter, sans-serif',
                    textAlign: 'center',
                    transition: 'color 0.2s ease',
                  }}>
                    {opt.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { label: 'patil.chinmay3031@gmail.com', href: 'mailto:patil.chinmay3031@gmail.com' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chinmay-s-patil' },
                { label: 'YouTube', href: 'https://www.youtube.com/@chinmay-s-patil' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.45)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '7px 16px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    fontFamily: 'Inter, sans-serif',
                    background: 'transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'hsl(140, 70%, 60%)'
                    e.currentTarget.style.borderColor = 'hsl(140, 70%, 60%)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <span style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.04em',
            }}>
              Munich, Germany · Available for collaboration
            </span>
          </div>

        </div>
      </div>
    </>
  )
}