'use client'

import { useState, useEffect, useRef } from 'react'

const L1 = 'Chinmay'
const L2 = 'Patil'

export default function HeroSection() {
  const [loaded,  setLoaded]  = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mouse,   setMouse]   = useState({ x: 0, y: 0 })
  const [vw,      setVw]      = useState(1920)
  const [vh,      setVh]      = useState(1080)
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const ptRef     = useRef([])

  // ── Viewport ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const sync = () => { setVw(window.innerWidth); setVh(window.innerHeight) }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  // ── Entry delay ───────────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120)
    return () => clearTimeout(t)
  }, [])

  // ── Scroll ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const el = document.getElementById('sections')
    if (!el) return
    const fn = () => setScrollY(el.scrollTop)
    el.addEventListener('scroll', fn, { passive: true })
    return () => el.removeEventListener('scroll', fn)
  }, [])

  // ── Mouse parallax (throttled ~30 fps) ───────────────────────────────────
  useEffect(() => {
    let last = 0
    const fn = (e) => {
      const now = performance.now()
      if (now - last < 33) return
      last = now
      setMouse({
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }
    window.addEventListener('mousemove', fn, { passive: true })
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  // ── Ambient particles ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    ptRef.current = Array.from({ length: 38 }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      r:  Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.10,
      vy: (Math.random() - 0.5) * 0.10,
      o:  Math.random() * 0.028 + 0.008,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ptRef.current.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,200,255,${p.o})`
        ctx.fill()
        p.x = ((p.x + p.vx) % canvas.width  + canvas.width)  % canvas.width
        p.y = ((p.y + p.vy) % canvas.height + canvas.height) % canvas.height
      })
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  // ── Animation math ────────────────────────────────────────────────────────
  const lerp         = (a, b, t) => a + (b - a) * t
  const rawP         = Math.min(scrollY / (vh * 0.55), 1)
  const p            = 1 - Math.pow(1 - rawP, 3)   // cubic ease-out
  const parallaxBase = scrollY * 0.18

  // name geometry
  const heroPx   = Math.min(vw * 0.094, 148)
  const nameH    = heroPx * 2 * 0.93              // hero-state name height (px)
  const fontSize = lerp(heroPx, 17, p)
  const nameTop  = lerp(vh * 0.855 - nameH, 24, p)
  const nameLeft = lerp(vw * 0.06, 24, p)
  const lineH    = lerp(0.92, 1.25, p)
  const tracking = lerp(0.02, 0, p)

  // pill styling (emerges as user scrolls)
  const pillBg     = `rgba(255,255,255,${lerp(0, 0.06, p)})`
  const pillBorder = `1px solid rgba(255,255,255,${lerp(0, 0.12, p)})`
  const pillRadius = lerp(0, 14, p)
  const pillPadX   = lerp(0, 18, p)
  const pillPadY   = lerp(0,  8, p)
  const pillBlur   = lerp(0, 12, p)
  const pillShadow = p > 0.7 ? `0 4px 24px rgba(0,0,0,${lerp(0, 0.35, p)})` : 'none'

  // mouse → photo shift (±8 px x, ±5 px y)
  const mx = mouse.x * 16
  const my = mouse.y * 10

  // .hr-info bottom edge sits 80 px above the top of the hero name
  // calc breakdown: 14.5vh = bottom of name from screen-bottom, nameH = name height
  const infoBottom = `calc(14.5vh + ${Math.round(nameH + 80)}px)`

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap');

        /* ── shell ──────────────────────────────────────────────────────── */
        .hr {
          position: relative; width: 100%; height: 100%;
          overflow: hidden; background: #0a0e1a;
        }

        /* ── photo layer ─────────────────────────────────────────────────── */
        .hr-photo {
          position: absolute; inset: 18% 0 10% 0;
          background-image: url('/Me2.jpg');
          background-size: cover; background-position: center 28%;
          will-change: transform; transition: opacity 1.5s ease;
        }

        /* ── cinematic blue grade ────────────────────────────────────────── */
        .hr-grade {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(160deg, rgba(8,18,52,0.34), rgba(0,8,32,0.22));
          mix-blend-mode: multiply;
        }

        /* ── radial spotlight on subject ─────────────────────────────────── */
        .hr-spotlight {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background: radial-gradient(
            ellipse 54% 68% at 50% 46%,
            rgba(255,255,255,0.09)  0%,
            rgba(0,0,0,0.44)       55%,
            rgba(0,0,0,0.68)      100%
          );
        }

        /* ── smooth multi-stop overlay ───────────────────────────────────── */
        .hr-overlay {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background:
            linear-gradient(to top,
              #0a0e1a 0%,
              rgba(10,14,26,0.86) 11%,
              rgba(10,14,26,0.10) 33%,
              transparent 50%),
            linear-gradient(to right,
              rgba(10,14,26,0.24) 0%,
              transparent 28%),
            linear-gradient(to bottom,
              #0a0e1a 0%,
              rgba(10,14,26,0.36) 7%,
              transparent 17%);
        }

        /* ── film grain ──────────────────────────────────────────────────── */
        .hr-grain {
          position: absolute; inset: 0; z-index: 4; opacity: 0.022; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px;
        }

        /* ── particles canvas ────────────────────────────────────────────── */
        .hr-canvas { position: absolute; inset: 0; z-index: 5; pointer-events: none; }

        /* ── engineering identity + CTA block ───────────────────────────── */
        .hr-info {
          position: absolute; left: 6%; z-index: 10;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.75s ease 1.5s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 1.5s;
        }
        .hr-info.in { opacity: 1; transform: none; }

        /* ── divider ─────────────────────────────────────────────────────── */
        .hr-divider {
          position: absolute; z-index: 6; left: 6%;
          bottom: calc(7vh + 2.25rem);
          width: 0; height: 2px;
          background: linear-gradient(90deg, hsl(140,65%,58%), transparent);
          transition: width 1.1s cubic-bezier(0.4,0,0.2,1) 1.1s;
        }
        .hr-divider.in { width: min(460px, 46%); }

        /* ── right badges ────────────────────────────────────────────────── */
        .hr-badges {
          position: absolute; z-index: 6; bottom: 7vh; right: 6%;
          display: flex; flex-direction: column; align-items: flex-end; gap: 10px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease 1.3s, transform 0.7s ease 1.3s;
        }
        .hr-badges.in { opacity: 1; transform: none; }

        .hr-badge {
          font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 10px;
        }
        .hr-badge::after {
          content: ''; width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
          background: hsl(140,65%,58%);
          box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.22);
          animation: hr-dot 2.4s ease-in-out infinite;
        }
        @keyframes hr-dot {
          0%,100% { box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.22); }
          50%     { box-shadow: 0 0 0 6px hsl(140 65% 58% / 0);    }
        }
        .hr-location {
          font-family: 'Barlow', sans-serif; font-size: 11px;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── mouse-scroll indicator ──────────────────────────────────────── */
        .hr-scroll {
          position: absolute; z-index: 6;
          bottom: 26px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          cursor: pointer; opacity: 0;
          transition: opacity 0.6s ease 2.0s;
        }
        .hr-scroll.in   { opacity: 1; }
        .hr-scroll:hover { opacity: 0.62; }

        .hr-scroll-mouse {
          width: 22px; height: 36px;
          border: 2px solid rgba(255,255,255,0.22); border-radius: 11px;
          display: flex; align-items: flex-start; justify-content: center;
          padding-top: 6px;
        }
        .hr-scroll-wheel {
          width: 3px; height: 7px;
          background: hsl(140,65%,58%); border-radius: 2px;
          animation: wheel-scroll 1.9s ease-in-out infinite;
        }
        @keyframes wheel-scroll {
          0%     { transform: translateY(0);    opacity: 1; }
          55%    { transform: translateY(10px); opacity: 0; }
          55.01% { transform: translateY(0);    opacity: 0; }
          100%   { transform: translateY(0);    opacity: 1; }
        }
        .hr-scroll-label {
          font-family: 'Barlow', sans-serif; font-size: 10px;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.24);
        }

        /* ── letter stagger reveal ───────────────────────────────────────── */
        @keyframes letterReveal {
          from { opacity: 0; transform: translateY(0.15em); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .l-h  { opacity: 0; }
        .l-in { animation: letterReveal 0.62s cubic-bezier(0.22, 1, 0.36, 1) both; }

        /* ── CTA buttons ─────────────────────────────────────────────────── */
        .hr-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 28px; border-radius: 11px;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 13.5px; font-weight: 600;
          text-decoration: none; cursor: pointer; user-select: none;
          letter-spacing: 0.02em;
          transition: transform 0.2s ease, box-shadow 0.2s ease,
                      background 0.2s ease, border-color 0.2s ease;
        }
        .hr-cta-p {
          background: rgba(255,255,255,0.96); color: #0a0e1a;
          border: 1px solid transparent;
        }
        .hr-cta-p:hover {
          background: #fff; transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.50);
        }
        .hr-cta-s {
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.88);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        }
        .hr-cta-s:hover {
          background: rgba(255,255,255,0.11); border-color: rgba(255,255,255,0.26);
          transform: translateY(-2px);
        }

        /* ── brand pill hover ────────────────────────────────────────────── */
        .hr-brand { transition: background 0.15s ease, border-color 0.15s ease; }
        .hr-brand:hover {
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.18) !important;
        }
      `}</style>

      {/* ════════════════════════ HERO SHELL ════════════════════════════════ */}
      <div className="hr">

        {/* [1] Background photo with mouse + scroll parallax */}
        <div
          className="hr-photo"
          style={{
            opacity:   loaded ? 1 : 0,
            transform: `translate(${mx}px, ${parallaxBase + my}px) scale(1.06)`,
          }}
        />

        {/* [2] Cinematic colour grade */}
        <div className="hr-grade" />

        {/* [3] Radial spotlight — pulls eye to subject */}
        <div className="hr-spotlight" />

        {/* [4] Smooth multi-stop overlay */}
        <div className="hr-overlay" />

        {/* [5] Film grain */}
        <div className="hr-grain" />

        {/* [6] Floating ambient particles */}
        <canvas ref={canvasRef} className="hr-canvas" />

        {/* [7] Engineering identity + CTA buttons */}
        <div
          className={`hr-info${loaded ? ' in' : ''}`}
          style={{ bottom: infoBottom }}
        >
          {/* Identity tag */}
          <div style={{
            fontFamily:    "'Barlow', sans-serif",
            fontSize:      '11px',
            fontWeight:    500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'hsl(140, 65%, 58%)',
            display:       'flex',
            alignItems:    'center',
            gap:           '14px',
            marginBottom:  '24px',
          }}>
            <span style={{
              display: 'inline-block', width: 26, height: 1,
              background: 'hsl(140,65%,58%)', flexShrink: 0,
            }} />
            Aerospace Engineer · CFD · OpenFOAM
          </div>

          {/* CTA row */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="#landing"
              className="hr-cta hr-cta-p"
              onClick={e => {
                e.preventDefault()
                document.getElementById('landing')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Work
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="#education"
              className="hr-cta hr-cta-s"
              onClick={e => {
                e.preventDefault()
                document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Me
            </a>
          </div>
        </div>

        {/* [8] Divider */}
        <div className={`hr-divider${loaded ? ' in' : ''}`} />

        {/* [9] Right-side availability + location */}
        <div className={`hr-badges${loaded ? ' in' : ''}`}>
          <div className="hr-badge">Available for collaboration</div>
          <div className="hr-location">Munich, Germany</div>
        </div>

        {/* [10] Mouse-scroll indicator */}
        <div
          className={`hr-scroll${loaded ? ' in' : ''}`}
          onClick={() =>
            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <div className="hr-scroll-mouse">
            <div className="hr-scroll-wheel" />
          </div>
          <span className="hr-scroll-label">Scroll</span>
        </div>
      </div>

      {/* ═══════════════ NAME — fixed, letter stagger → brand pill ═══════════ */}
      <div
        className="hr-brand"
        style={{
          position:              'fixed',
          top:                   `${nameTop}px`,
          left:                  `${nameLeft}px`,
          zIndex:                80,
          fontFamily:            "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize:              `${fontSize}px`,
          fontWeight:            700,
          lineHeight:            lineH,
          letterSpacing:         `${tracking}em`,
          color:                 '#fff',
          pointerEvents:         p > 0.85 ? 'auto' : 'none',
          cursor:                p > 0.85 ? 'pointer' : 'default',
          userSelect:            'none',
          whiteSpace:            'nowrap',
          background:            pillBg,
          backdropFilter:        `blur(${pillBlur}px)`,
          WebkitBackdropFilter:  `blur(${pillBlur}px)`,
          border:                pillBorder,
          borderRadius:          `${pillRadius}px`,
          padding:               `${pillPadY}px ${pillPadX}px`,
          boxShadow:             pillShadow,
        }}
        onClick={() =>
          p > 0.85 && document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        {/* "Chinmay" — letters stagger in */}
        <div style={{ display: 'block' }}>
          {L1.split('').map((ch, i) => (
            <span
              key={i}
              className={loaded ? 'l-in' : 'l-h'}
              style={{ display: 'inline-block', animationDelay: `${0.3 + i * 0.05}s` }}
            >
              {ch}
            </span>
          ))}
        </div>

        {/* "Patil" — letters stagger in after "Chinmay" */}
        <div style={{ display: 'block' }}>
          {L2.split('').map((ch, i) => (
            <span
              key={i}
              className={loaded ? 'l-in' : 'l-h'}
              style={{ display: 'inline-block', animationDelay: `${0.3 + (L1.length + i) * 0.05}s` }}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}