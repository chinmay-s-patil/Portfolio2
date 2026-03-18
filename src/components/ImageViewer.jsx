import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * ImageViewer — reusable lightbox component
 *
 * Props:
 *   images      — array of src strings (required)
 *   startIndex  — which image to open on (default 0)
 *   onClose     — called when viewer should close (required)
 *
 * Usage:
 *   <ImageViewer images={['a.png','b.png']} startIndex={1} onClose={() => setOpen(false)} />
 *
 * To add the magnifying-glass cursor to any <img>, wrap it with <ZoomableImage>:
 *   import { ZoomableImage } from './ImageViewer'
 *   <ZoomableImage src="..." alt="..." onClick={(src) => { setImages([src]); setOpen(true) }} />
 */

// ─── Magnifying-glass cursor SVG as a data URL ────────────────────────────────
const MAGNIFY_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='13' cy='13' r='9' fill='none' stroke='white' stroke-width='2.5'/%3E%3Cline x1='20' y1='20' x2='28' y2='28' stroke='white' stroke-width='2.5' stroke-linecap='round'/%3E%3Cline x1='10' y1='13' x2='16' y2='13' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cline x1='13' y1='10' x2='13' y2='16' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") 14 14, zoom-in`

// ─── ZoomableImage — drop-in wrapper that adds the cursor + click handler ─────
export function ZoomableImage({ src, alt, style, className, onClick, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...style,
        cursor: MAGNIFY_CURSOR,
        transition: 'transform 0.2s ease, filter 0.2s ease',
      }}
      className={className}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(src)
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'brightness(1.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = ''
      }}
      {...rest}
    />
  )
}

// ─── ImageViewer — the full-screen lightbox ───────────────────────────────────
export default function ImageViewer({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const imgRef = useRef(null)

  // Reset zoom/pan when switching images
  useEffect(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [current])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === '+' || e.key === '=') zoomIn()
      if (e.key === '-') zoomOut()
      if (e.key === '0') resetZoom()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, images.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const zoomIn  = () => setZoom((z) => Math.min(z + 0.5, 5))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.5, 1))
  const resetZoom = () => { setZoom(1); setPan({ x: 0, y: 0 }) }

  // Scroll wheel zoom
  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY < 0 ? 0.25 : -0.25
    setZoom((z) => Math.min(Math.max(z + delta, 1), 5))
  }

  // Drag to pan (only when zoomed in)
  const handleMouseDown = (e) => {
    if (zoom <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setPan({ x: dragStart.current.panX + dx, y: dragStart.current.panY + dy })
  }

  const handleMouseUp = () => setIsDragging(false)

  // Touch pinch-to-zoom
  const lastTouchDist = useRef(null)
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (lastTouchDist.current !== null) {
        const delta = (dist - lastTouchDist.current) * 0.01
        setZoom((z) => Math.min(Math.max(z + delta, 1), 5))
      }
      lastTouchDist.current = dist
    }
  }
  const handleTouchEnd = () => { lastTouchDist.current = null }

  const hasMultiple = images.length > 1

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'ivFadeIn 0.2s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >

      {/* ── Top toolbar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        flexShrink: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
        zIndex: 10,
      }}>
        {/* Counter */}
        <span style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.08em',
        }}>
          {hasMultiple ? `${current + 1} / ${images.length}` : ''}
        </span>

        {/* Zoom controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {[
            { label: '−', action: zoomOut, disabled: zoom <= 1 },
            { label: `${Math.round(zoom * 100)}%`, action: null, isLabel: true },
            { label: '+', action: zoomIn,  disabled: zoom >= 5 },
            { label: '↺', action: resetZoom, title: 'Reset (0)' },
          ].map((btn, i) => (
            btn.isLabel ? (
              <span key={i} style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'monospace',
                minWidth: '44px',
                textAlign: 'center',
              }}>
                {btn.label}
              </span>
            ) : (
              <button
                key={i}
                onClick={btn.action}
                title={btn.title}
                disabled={btn.disabled}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.07)',
                  color: btn.disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
                  fontSize: '18px',
                  lineHeight: 1,
                  cursor: btn.disabled ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!btn.disabled) e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                }}
              >
                {btn.label}
              </button>
            )
          ))}

          {/* Divider */}
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* ── Main image area ── */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
        onWheel={handleWheel}
        onClick={(e) => {
          // Click backdrop (not image) to close
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <img
          ref={imgRef}
          src={images[current]}
          alt={`Image ${current + 1}`}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          draggable={false}
          style={{
            maxWidth: zoom === 1 ? '90%' : 'none',
            maxHeight: zoom === 1 ? '100%' : 'none',
            width: zoom === 1 ? 'auto' : undefined,
            height: zoom === 1 ? 'auto' : undefined,
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.2s ease',
            userSelect: 'none',
            borderRadius: '4px',
            boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
          }}
        />

        {/* ── Prev arrow ── */}
        {hasMultiple && (
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s, transform 0.15s',
              zIndex: 5,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.6)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* ── Next arrow ── */}
        {hasMultiple && (
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s, transform 0.15s',
              zIndex: 5,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.6)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {hasMultiple && (
        <div style={{
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 24px 24px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
          overflowX: 'auto',
        }}>
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: idx === current ? '56px' : '44px',
                height: idx === current ? '56px' : '44px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: idx === current
                  ? '2px solid hsl(140, 70%, 60%)'
                  : '2px solid rgba(255,255,255,0.1)',
                opacity: idx === current ? 1 : 0.5,
                cursor: 'pointer',
                padding: 0,
                flexShrink: 0,
                transition: 'all 0.2s ease',
                background: 'rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) => {
                if (idx !== current) e.currentTarget.style.opacity = '0.8'
              }}
              onMouseLeave={(e) => {
                if (idx !== current) e.currentTarget.style.opacity = '0.5'
              }}
            >
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Hint bar ── */}
      <div style={{
        position: 'absolute',
        bottom: hasMultiple ? '90px' : '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        padding: '8px 20px',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '100px',
        border: '1px solid rgba(255,255,255,0.08)',
        pointerEvents: 'none',
      }}>
        {[
          hasMultiple && '← → navigate',
          'scroll to zoom',
          zoom > 1 && 'drag to pan',
          'esc to close',
        ].filter(Boolean).map((hint, i) => (
          <span key={i} style={{
            fontSize: '11px',
            color: 'rgba(255,255,255,0.35)',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
          }}>
            {hint}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ivFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}