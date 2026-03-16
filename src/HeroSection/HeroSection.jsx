'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [vw, setVw] = useState(1920)
  const [vh, setVh] = useState(1080)

  // Sync viewport dimensions
  useEffect(() => {
    const sync = () => { setVw(window.innerWidth); setVh(window.innerHeight) }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  // Entry animation
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Track scroll from the snap container
  useEffect(() => {
    const el = document.getElementById('sections')
    if (!el) return
    const fn = () => setScrollY(el.scrollTop)
    el.addEventListener('scroll', fn, { passive: true })
    return () => el.removeEventListener('scroll', fn)
  }, [])

  // ── Animation math ────────────────────────────────────────────────────────
  // Parallax — reduced so photo stays inside its tighter inset
  const parallaxOffset = scrollY * 0.18

  // Progress 0→1 over the first 55% of one viewport-height of scroll
  const rawP = Math.min(scrollY / (vh * 0.55), 1)
  const p    = 1 - Math.pow(1 - rawP, 3) // cubic ease-out

  const lerp = (a, b, t) => a + (b - a) * t

  // Font size: large hero → compact brand header
  const heroPx = Math.min(vw * 0.094, 148)   // matches original clamp(~80px, 9.4vw, 148px)
  const headPx = 19
  const fontSize = lerp(heroPx, headPx, p)

  // Two-line name height approximation
  const nameH = fontSize * 2 * 0.93

  // Vertical: near-bottom → near-top
  const startTop = vh * 0.855 - nameH
  const endTop   = 28   // ≈ 1.75rem
  const nameTop  = lerp(startTop, endTop, p)

  // Horizontal: 6vw → 28px
  const nameLeft = lerp(vw * 0.06, 28, p)

  const lineH    = lerp(0.92, 1.15, p)
  const tracking = lerp(0.02, 0.01, p)

  // Eyebrow: positioned just above the name, fades out quickly
  const eyebrowOpacity = loaded ? Math.max(0, 1 - p * 2.5) : 0

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500&display=swap');

        /* ── root ──────────────────────────────────────────────────────── */
        .hr {
          position: relative;
          width: 100%; height: 100%;
          overflow: hidden;
          background: #0a0e1a;   /* matches --bg site token */
        }

        /* ── portrait ──────────────────────────────────────────────────── */
        .hr-photo {
          position: absolute;
          inset: 20% 0 11% 0;
          background-image: url('/Me2.jpg');
          background-size: cover;
          background-position: center 28%;
          will-change: transform;
          transition: opacity 1.4s ease;
        }

        /* ── overlay — lighter so the face reads clearly ───────────────── */
        .hr-overlay {
          position: absolute;
          inset: 0;
          background:
            /* bottom: strong fade to bg colour */
            linear-gradient(to top, #0a0e1a 0%, rgba(10,14,26,0.92) 14%, rgba(10,14,26,0.22) 40%, transparent 58%),
            /* left edge: subtle fade for the name readability */
            linear-gradient(to right, rgba(10,14,26,0.32) 0%, rgba(10,14,26,0.04) 28%, transparent 48%),
            /* top edge: fade from bg into image */
            linear-gradient(to bottom, #0a0e1a 0%, rgba(10,14,26,0.42) 8%, transparent 22%);
        }

        /* ── grain: very faint — doesn't muddy the face ────────────────── */
        .hr-grain {
          position: absolute; inset: 0;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px;
          pointer-events: none;
        }

        /* ── divider ───────────────────────────────────────────────────── */
        .hr-divider {
          position: absolute;
          bottom: calc(7vh + 2.25rem); left: 6%;
          width: 0; height: 2px;
          background: linear-gradient(90deg, hsl(140,65%,58%), transparent);
          transition: width 1.1s cubic-bezier(0.4,0,0.2,1) 0.72s;
        }
        .hr-divider.in { width: min(500px, 52%); }

        /* ── right-side badges ─────────────────────────────────────────── */
        .hr-badges {
          position: absolute;
          bottom: 7vh; right: 6%;
          display: flex; flex-direction: column; align-items: flex-end; gap: 10px;
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.7s ease 0.95s, transform 0.7s ease 0.95s;
        }
        .hr-badges.in { opacity: 1; transform: none; }

        .hr-badge {
          font-family: 'Barlow', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; gap: 10px;
        }
        .hr-badge::after {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
          background: hsl(140,65%,58%);
          box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.22);
          animation: hr-dot 2.4s ease-in-out infinite;
        }
        @keyframes hr-dot {
          0%,100% { box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.22); }
          50%     { box-shadow: 0 0 0 6px hsl(140 65% 58% / 0);    }
        }

        .hr-location {
          font-family: 'Barlow', sans-serif;
          font-size: 11px; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
        }

        /* ── scroll cue ────────────────────────────────────────────────── */
        .hr-scroll {
          position: absolute;
          bottom: 36px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          cursor: pointer; opacity: 0;
          transition: opacity 0.6s ease 1.3s;
        }
        .hr-scroll.in { opacity: 1; }

        .hr-scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.35));
          position: relative; overflow: hidden;
        }
        .hr-scroll-line::after {
          content: ''; position: absolute;
          top: -100%; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent, hsl(140,65%,58%));
          animation: hr-drop 1.8s ease-in-out infinite;
        }
        @keyframes hr-drop {
          0%   { top: -100%; opacity: 1; }
          100% { top:  200%; opacity: 0; }
        }

        .hr-scroll-label {
          font-family: 'Barlow', sans-serif;
          font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
        }
      `}</style>

      {/* ── Hero shell ─────────────────────────────────────────────────── */}
      <div className="hr">
        <div
          className="hr-photo"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="hr-overlay" />
        <div className="hr-grain" />

        {/* Divider line at the bottom */}
        <div className={`hr-divider${loaded ? ' in' : ''}`} />

        {/* Right-side status badges */}
        <div className={`hr-badges${loaded ? ' in' : ''}`}>
          <div className="hr-badge">Available for collaboration</div>
          <div className="hr-location">Munich, Germany</div>
        </div>

        {/* Scroll cue */}
        <div
          className={`hr-scroll${loaded ? ' in' : ''}`}
          onClick={() =>
            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <div className="hr-scroll-line" />
          <span className="hr-scroll-label">Scroll</span>
        </div>
      </div>

      {/* ── Eyebrow: fixed, sits above the name, fades as name rises ──── */}
      {/*   position: fixed escapes the overflow:hidden of .hr               */}
      <div
        style={{
          position: 'fixed',
          top:  `${nameTop - 28}px`,
          left: `${nameLeft}px`,
          zIndex: 80,
          fontFamily: "'Barlow', sans-serif",
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'hsl(140, 65%, 58%)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          opacity: eyebrowOpacity,
          // Short transition so it responds smoothly to scroll;
          // the initial 0→1 snap is imperceptible at 11px text
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {/* decorative rule */}
        <span
          style={{
            display: 'inline-block',
            width: 32, height: 1,
            background: 'hsl(140, 65%, 58%)',
            flexShrink: 0,
          }}
        />
        Aerospace Engineering · CFD · OpenFOAM
      </div>

      {/* ── Name: fixed — large at bottom, small at top-left ──────────── */}
      <div
        style={{
          position: 'fixed',
          top:  `${nameTop}px`,
          left: `${nameLeft}px`,
          zIndex: 80,
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: `${fontSize}px`,
          lineHeight: lineH,
          letterSpacing: `${tracking}em`,
          color: '#fff',
          // One-time fade-in on load; after that opacity stays 1
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.9s ease 0.35s',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Chinmay
        <br />
        Patil
      </div>
    </>
  )
}