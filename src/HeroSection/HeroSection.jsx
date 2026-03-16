'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const container = document.getElementById('sections')
    if (!container) return
    const onScroll = () => setScrollY(container.scrollTop)
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxOffset = scrollY * 0.35

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;500&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #060a12;
        }

        .hero-photo {
          position: absolute;
          inset: -8% 0 -8% 0;
          background-image: url('/Me2.jpg');
          background-size: cover;
          background-position: center 30%;
          will-change: transform;
          transition: opacity 1.4s ease;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top,   rgba(4, 7, 16, 0.96) 0%,  rgba(4, 7, 16, 0.6) 30%, transparent 60%),
            linear-gradient(to right, rgba(4, 7, 16, 0.55) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(4, 7, 16, 0.45) 0%, transparent 25%);
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px;
          pointer-events: none;
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 6% 7vh;
        }

        .hero-eyebrow {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: hsl(140, 65%, 58%);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }

        .hero-eyebrow.in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: hsl(140, 65%, 58%);
          flex-shrink: 0;
        }

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(68px, 10vw, 148px);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s;
        }

        .hero-name.in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-name span {
          color: hsl(140, 65%, 58%);
        }

        .hero-divider {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(140, 65%, 58%), transparent);
          margin: 28px 0;
          transition: width 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s;
        }

        .hero-divider.in {
          width: min(520px, 55%);
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease 0.9s, transform 0.7s ease 0.9s;
        }

        .hero-bottom.in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-tagline {
          font-family: 'Barlow', sans-serif;
          font-size: clamp(15px, 1.8vw, 20px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.72);
          max-width: 480px;
          line-height: 1.65;
        }

        .hero-tagline strong {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
        }

        .hero-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .hero-badge {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-badge::after {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(140, 65%, 58%);
          box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.2);
          animation: dotpulse 2.4s ease-in-out infinite;
        }

        @keyframes dotpulse {
          0%, 100% { box-shadow: 0 0 0 3px hsl(140 65% 58% / 0.2); }
          50%       { box-shadow: 0 0 0 6px hsl(140 65% 58% / 0.0); }
        }

        .hero-location {
          font-family: 'Barlow', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
          margin-top: 2px;
        }

        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.6s ease 1.3s;
          cursor: pointer;
        }

        .hero-scroll.in {
          opacity: 1;
        }

        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.35));
          position: relative;
          overflow: hidden;
        }

        .hero-scroll-line::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, hsl(140, 65%, 58%));
          animation: scrolldrop 1.8s ease-in-out infinite;
        }

        @keyframes scrolldrop {
          0%   { top: -100%; opacity: 1; }
          100% { top: 200%;  opacity: 0; }
        }

        .hero-scroll-label {
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
        }

        .hero-corner-tag {
          position: absolute;
          top: 40px;
          right: 48px;
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.2);
          writing-mode: vertical-rl;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }

        .hero-corner-tag.in {
          opacity: 1;
        }
      `}</style>

      <div className="hero-root" ref={heroRef}>
        <div
          className="hero-photo"
          style={{ opacity: loaded ? 1 : 0, transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="hero-overlay" />
        <div className="hero-grain" />

        <div className="hero-content">
          <p className={`hero-eyebrow${loaded ? ' in' : ''}`}>
            Aerospace Engineering · CFD · OpenFOAM
          </p>

          <h1 className={`hero-name${loaded ? ' in' : ''}`}>
            Chinmay<br />
            <span>S.</span> Patil
          </h1>

          <div className={`hero-divider${loaded ? ' in' : ''}`} />

          <div className={`hero-bottom${loaded ? ' in' : ''}`}>
            <p className="hero-tagline">
              Turning aerodynamic questions into{' '}
              <strong>reliable numbers</strong> — through high-fidelity CFD,
              OpenFOAM simulation, and precise engineering analysis.
            </p>

            <div className="hero-badges">
              <div className="hero-badge">Available for collaboration</div>
              <div className="hero-location">Munich, Germany</div>
            </div>
          </div>
        </div>

        <div
          className={`hero-scroll${loaded ? ' in' : ''}`}
          onClick={() => {
            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div className="hero-scroll-line" />
          <span className="hero-scroll-label">Scroll</span>
        </div>

        <div className={`hero-corner-tag${loaded ? ' in' : ''}`}>
          Portfolio · 2025
        </div>
      </div>
    </>
  )
}