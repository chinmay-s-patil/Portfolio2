'use client'

import { useState, useEffect, useRef } from 'react'

// ─── Word-by-word slide-up reveal ────────────────────────────────────────────
// Each word sits in an overflow:hidden clip and slides upward with stagger.
// `triggered` flips to true when you want the animation to fire.
function RevealText({
  text,
  triggered = false,
  baseDelay = 0,       // ms — global offset before first word
  stagger = 60,        // ms — per-word delay increment
  duration = 700,      // ms — each word's slide duration
  ease = 'cubic-bezier(0.16, 1, 0.3, 1)',
  style = {},          // applied to each word span
  className = '',
  splitBy = 'words',   // 'words' | 'chars'
}) {
  const units = splitBy === 'chars'
    ? text.split('')
    : text.split(/(\s+)/)   // keeps spaces as tokens so layout is preserved

  return (
    <span style={{ display: 'inline', ...style }} className={className} aria-label={text}>
      {units.map((unit, i) => {
        // whitespace tokens — render as-is, no animation needed
        if (/^\s+$/.test(unit)) {
          return <span key={i} aria-hidden="true">{unit}</span>
        }

        const delay = baseDelay + i * stagger

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'bottom',  // prevents line-height gap at bottom of clip
              marginRight: splitBy === 'words' ? '0.25em' : '0',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                transform: triggered ? 'translateY(0)' : 'translateY(110%)',
                opacity:   triggered ? 1 : 0,
                transition: triggered
                  ? `transform ${duration}ms ${ease} ${delay}ms, opacity ${Math.round(duration * 0.4)}ms ease ${delay}ms`
                  : 'none',
              }}
            >
              {unit}
            </span>
          </span>
        )
      })}
    </span>
  )
}

// ─── Section Intro Hook ───────────────────────────────────────────────────────
// Returns:
//   sectionRef   — attach to outer wrapper
//   overlayJSX   — the bg-cover + card overlay
//   textRevealed — true once overlay has fully lifted (trigger text animations)
function useSectionIntro({ label = 'Education History', duration = 400 } = {}) {
  const sectionRef   = useRef(null)
  const animatingRef = useRef(false)

  const [overlayMounted, setOverlayMounted] = useState(false)
  const [bgVisible,      setBgVisible]      = useState(false)
  const [cardVisible,    setCardVisible]    = useState(false)
  const [cardZoomOut,    setCardZoomOut]    = useState(false)
  const [textRevealed,   setTextRevealed]   = useState(false)

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) {
      setTextRevealed(true)   // skip intro, fire text immediately
      return
    }

    const el = sectionRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            triggerIntro()
          }
        })
      },
      { root: null, threshold: [0.45] }
    )

    io.observe(el)
    return () => io.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function triggerIntro() {
    if (animatingRef.current) return
    animatingRef.current = true

    // Reset text
    setTextRevealed(false)

    // Mount overlay with bg
    setCardZoomOut(false)
    setCardVisible(false)
    setOverlayMounted(true)
    setBgVisible(true)

    // Pop card in
    requestAnimationFrame(() => {
      setCardVisible(true)
    })

    // Hold → zoom-out card → fade bg → unmount → fire text reveal
    const hold = Math.max(300, duration)
    setTimeout(() => {
      setCardZoomOut(true)

      // bg starts fading as card finishes blowing up
      setTimeout(() => {
        setBgVisible(false)

        // bg fade complete → unmount overlay → start word-reveal
        setTimeout(() => {
          setOverlayMounted(false)
          setCardVisible(false)
          setCardZoomOut(false)
          setTextRevealed(true)            // ← triggers all RevealText components

          setTimeout(() => { animatingRef.current = false }, 120)
        }, 220)
      }, 600)
    }, hold)
  }

  let cardClass = 'edu-intro-card'
  if (cardVisible) cardClass += ' visible'
  if (cardZoomOut) cardClass += ' zoom-out'

  const colonIdx  = label.indexOf(':')
  const smallText = colonIdx >= 0 ? label.slice(0, colonIdx).trim() : 'Education'
  const bigText   = colonIdx >= 0 ? label.slice(colonIdx + 1).trim() : label

  const overlayJSX = overlayMounted ? (
    <div className="edu-intro-overlay" aria-hidden="true">
      <div className="edu-intro-bg" style={{ opacity: bgVisible ? 1 : 0 }} />
      <div className={cardClass} role="status" aria-live="polite">
        <span className="edu-intro-small">{smallText}</span>
        <strong className="edu-intro-big">{bigText}</strong>
      </div>
    </div>
  ) : null

  return { sectionRef, overlayJSX, textRevealed }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function EducationNormalized() {
  const [activeTab, setActiveTab] = useState('masters')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scale, setScale] = useState(1)

  const BASE_WIDTH  = 1920
  const BASE_HEIGHT = 1080

  const { sectionRef, overlayJSX, textRevealed } = useSectionIntro({
    label:    'Education History',
    duration: 800,
  })

  useEffect(() => {
    const calculateScale = () => {
      const widthScale  = window.innerWidth  / BASE_WIDTH
      const heightScale = window.innerHeight / BASE_HEIGHT
      setScale(Math.min(widthScale, heightScale))
    }
    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  const mastersImages = [
    '/Education/TUM/TUM (1).jpg',
    '/Education/TUM/TUM (2).jpg',
    '/Education/TUM/TUM (3).jpg',
    '/Education/TUM/TUM (4).jpg',
    '/Education/TUM/TUM (5).jpg',
    '/Education/TUM/TUM (6).jpg',
    '/Education/TUM/TUM (7).jpg',
  ]

  const bachelorsImages = [
    '/Education/VITC/VITC (1).jpeg',
    '/Education/VITC/VITC (10).jpg',
    '/Education/VITC/VITC (11).jpg',
    '/Education/VITC/VITC (2).JPG',
    '/Education/VITC/VITC (3).jpg',
    '/Education/VITC/VITC (4).jpg',
    '/Education/VITC/VITC (5).jpg',
    '/Education/VITC/VITC (6).jpg',
    '/Education/VITC/VITC (7).jpg',
    '/Education/VITC/VITC (8).jpg',
    '/Education/VITC/VITC (9).jpg',
    '/Education/VITC/VITC (1).jpg',
    '/Education/VITC/VITC (1).png',
  ]

  const mastersData = {
    degree: 'Aerospace Engineering',
    title: 'Master of Science',
    institution: 'Technical University of Munich (TUM)',
    period: 'October 2025 - Present',
    description: 'Pursuing advanced studies in aerospace engineering with specialization in computational fluid dynamics and aerodynamics. Engaging with cutting-edge research in turbulence modeling, high-performance computing, and numerical methods for complex flow simulations.',
    skills: ['Advanced CFD'],
  }

  const bachelorsData = {
    degree: 'Mechanical Engineering',
    title: 'Bachelor of Technology',
    institution: 'VIT Chennai',
    period: 'June 2021 - May 2025',
    description: 'Completed comprehensive undergraduate program in mechanical engineering, developing strong fundamentals in thermodynamics, fluid mechanics, and computational methods. Gained hands-on experience through laboratory work, projects, and industry internships.',
    skills: [
      'Fluid Mechanics',
      'Computational Fluid Dynamics',
      'Heat Transfer',
      'Thermodynamics',
      'Engineering Analysis',
      'Mechanical Design',
    ],
  }

  const currentImages = activeTab === 'masters' ? mastersImages : bachelorsImages
  const currentData   = activeTab === 'masters' ? mastersData   : bachelorsData

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [currentImages.length])

  useEffect(() => { setCurrentImageIndex(0) }, [activeTab])

  // Word counts for delay chaining:
  // kicker: 2 words  → title starts at 2 * 60 + 80 gap ≈ 200ms
  // title: 3 words   → desc starts at title offset + 3 * 60 + 100 gap ≈ 580ms
  const kickerWordCount = 'Education History'.split(/\s+/).length
  const titleWordCount  = 'Where I Studied'.split(/\s+/).length
  const STAGGER         = 70
  const KICKER_BASE     = 0
  const TITLE_BASE      = kickerWordCount * STAGGER + 80
  const DESC_BASE       = TITLE_BASE + titleWordCount * STAGGER + 100

  return (
    <>
      {overlayJSX}

      <div
        ref={sectionRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          position: 'relative',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '1400px',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ── Header ── */}
          <div style={{ flexShrink: 0, marginBottom: '0px' }}>

            {/* Kicker — slide up word by word */}
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              lineHeight: '1.4',
            }}>
              <RevealText
                text="Education History"
                triggered={textRevealed}
                baseDelay={KICKER_BASE}
                stagger={STAGGER}
                duration={600}
                style={{ color: 'hsl(140, 70%, 60%)' }}
              />
            </div>

            {/* Title — larger stagger for impact */}
            <h2 style={{
              fontSize: '56px',
              fontWeight: '700',
              marginBottom: '16px',
              lineHeight: '1.1',
            }}>
              <RevealText
                text="Where I Studied"
                triggered={textRevealed}
                baseDelay={TITLE_BASE}
                stagger={STAGGER}
                duration={800}
                ease="cubic-bezier(0.16, 1, 0.3, 1)"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'whitesmoke',
                  backgroundClip: 'text',
                }}
              />
            </h2>

            {/* Description — word-by-word, slightly faster */}
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '3px',
              color: 'rgba(255,255,255,0.68)',
              maxWidth: '900px',
            }}>
              <RevealText
                text="Explore my academic foundation - from fundamental engineering principles to cutting-edge computational research."
                triggered={textRevealed}
                baseDelay={DESC_BASE}
                stagger={28}
                duration={550}
                ease="cubic-bezier(0.22, 1, 0.36, 1)"
              />
            </p>
          </div>

          {/* ── Tabs — fade in after description ── */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '32px',
              flexShrink: 0,
              justifyContent: 'center',
              opacity: textRevealed ? 1 : 0,
              transform: textRevealed ? 'translateY(0)' : 'translateY(16px)',
              transition: textRevealed
                ? `opacity 500ms ease ${DESC_BASE + 600}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${DESC_BASE + 600}ms`
                : 'none',
            }}
          >
            {['masters', 'bachelors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  background: activeTab === tab
                    ? 'linear-gradient(135deg, hsl(var(--accent), 0.25), hsl(var(--accent), 0.1))'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === tab
                    ? '2px solid hsl(var(--accent))'
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  color: activeTab === tab
                    ? 'hsl(var(--accent))'
                    : 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeTab === tab
                    ? '0 6px 24px hsl(var(--accent) / 0.25)'
                    : 'none',
                }}
              >
                {tab === 'masters' ? "Master's" : "Bachelor's"}
              </button>
            ))}
          </div>

          {/* ── Main Content — slide up as a whole, slightly after tabs ── */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center',
              minHeight: 0,
              opacity: textRevealed ? 1 : 0,
              transform: textRevealed ? 'translateY(0)' : 'translateY(24px)',
              transition: textRevealed
                ? `opacity 600ms ease ${DESC_BASE + 750}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${DESC_BASE + 750}ms`
                : 'none',
            }}
          >
            {/* Left: Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
                {currentData.title}
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'hsl(var(--accent))' }}>
                {currentData.degree}
              </div>
              <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', fontWeight: '500', marginBottom: '8px' }}>
                {currentData.institution}
              </div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px', fontStyle: 'italic' }}>
                {currentData.period}
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: 'rgba(255,255,255,0.68)' }}>
                {currentData.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {currentData.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{
                      padding: '8px 20px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: '500',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Slideshow */}
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
              <div style={{
                position: 'absolute',
                left: 0, top: 0, bottom: 0,
                width: '120px',
                background: 'linear-gradient(to right, rgba(10,14,26,1) 0%, rgba(10,14,26,0.8) 40%, rgba(10,14,26,0) 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(20,20,30,0.5)',
              }}>
                {currentImages.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: idx === currentImageIndex ? 1 : 0,
                      transition: 'opacity 1.2s ease-in-out',
                      zIndex: idx === currentImageIndex ? 1 : 0,
                    }}
                  >
                    <img
                      src={img}
                      alt={`${currentData.institution} - Image ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Overlay ── */
        .edu-intro-overlay {
          position: fixed;
          inset: 0;
          display: grid;
          place-items: center;
          pointer-events: none;
          z-index: 1200;
        }

        .edu-intro-bg {
          position: absolute;
          inset: 0;
          background: #0a0e1a;
          transition: opacity 200ms ease;
        }

        .edu-intro-card {
          position: relative;
          z-index: 1;
          background: rgba(8, 10, 15, 0.9);
          color: #e6eef8;
          padding: 2.2rem 3rem;
          border-radius: 12px;
          text-align: center;
          transform-origin: center;
          will-change: transform, opacity;
          opacity: 0;
          transform: scale(0.85);
          transition: transform 360ms cubic-bezier(.2,.9,.3,1), opacity 260ms ease;
          box-shadow: 0 12px 40px rgba(2, 6, 23, 0.6);
          max-width: 85%;
          backdrop-filter: blur(6px) saturate(120%);
        }

        .edu-intro-card.visible {
          opacity: 1;
          transform: scale(1);
        }

        .edu-intro-card.zoom-out {
          transition: transform 600ms cubic-bezier(.2,.9,.1,1), opacity 380ms ease;
          transform: scale(8);
          opacity: 0;
        }

        .edu-intro-small {
          display: block;
          font-weight: 600;
          color: hsl(140, 70%, 60%);
          font-size: 14px;
          margin-bottom: 6px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .edu-intro-big {
          display: block;
          font-size: clamp(22px, 4vw, 40px);
          font-weight: 700;
          color: #e6eef8;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .edu-intro-bg { display: none; }
          .edu-intro-card,
          .edu-intro-card.zoom-out {
            transition: none !important;
            transform: none !important;
          }
          .edu-intro-card.zoom-out { opacity: 0; }
        }
      `}</style>
    </>
  )
}