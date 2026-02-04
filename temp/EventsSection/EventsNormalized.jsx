'use client'

import { useState, useEffect, useRef, useCallback, memo, Suspense } from 'react'
import dynamic from 'next/dynamic'
import eventsList from './EventsList'
import EventsCard from './EventsCard'

// Heavy modal loaded dynamically ONLY when needed
const EventsModal = dynamic(() => import('./EventsModal'), {
  ssr: false,
  loading: () => (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ color: 'white', fontSize: '18px' }}>Loading...</div>
    </div>
  )
})

// Memoized page component to prevent re-renders
const EventPage = memo(function EventPage({ events, pageIndex, scale, onCardClick }) {
  return (
    <div
      style={{
        minWidth: '100%',
        width: '100%',
        height: '100%',
        flexShrink: 0,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        contain: 'layout style paint' // Aggressive containment
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        alignItems: 'start',
        width: '100%',
        height: 'fit-content'
      }}>
        {events.map((event) => (
          <EventsCard 
            key={event.id} 
            event={event} 
            onClick={onCardClick}
            scale={scale}
          />
        ))}
      </div>
    </div>
  )
})

export default function EventsNormalized() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [scale, setScale] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)
  const [visiblePages, setVisiblePages] = useState([0, 1]) // Only render current + next
  const scrollContainerRef = useRef(null)
  
  const BASE_WIDTH = 1920
  const BASE_HEIGHT = 1080
  const EVENTS_PER_PAGE = 3

  // Aggressive scale calculation with debounce
  useEffect(() => {
    let timeoutId
    const calculateScale = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const widthScale = viewportWidth / BASE_WIDTH
        const heightScale = viewportHeight / BASE_HEIGHT
        setScale(Math.min(widthScale, heightScale))
      }, 100) // Debounce resize
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => {
      window.removeEventListener('resize', calculateScale)
      clearTimeout(timeoutId)
    }
  }, [])

  const events = eventsList
  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE)

  // Optimized scroll handler with intersection observer instead of scroll events
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = parseInt(entry.target.dataset.pageIndex)
            setCurrentPage(pageIndex)
            // Keep current, prev, and next pages rendered
            setVisiblePages(prev => {
              const newPages = [pageIndex]
              if (pageIndex > 0) newPages.push(pageIndex - 1)
              if (pageIndex < totalPages - 1) newPages.push(pageIndex + 1)
              return [...new Set([...prev, ...newPages])].sort((a,b) => a-b)
            })
          }
        })
      },
      { 
        root: container,
        threshold: 0.5
      }
    )

    // Observe all pages
    const pages = container.querySelectorAll('[data-page]')
    pages.forEach(page => observer.observe(page))

    return () => observer.disconnect()
  }, [totalPages])

  // Cleanup visible pages when far away
  useEffect(() => {
    const cleanup = setInterval(() => {
      setVisiblePages(prev => prev.filter(p => 
        Math.abs(p - currentPage) <= 1
      ))
    }, 5000) // Every 5s, remove pages far from current
    
    return () => clearInterval(cleanup)
  }, [currentPage])

  const scrollToPage = useCallback((index) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const containerWidth = container.clientWidth
    container.scrollTo({ left: containerWidth * index, behavior: 'smooth' })
  }, [])

  const openModal = useCallback((event) => {
    setSelectedEvent(event)
    const slug = event.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    window.history.pushState(null, '', `#events#${slug}`)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedEvent(null)
    window.history.pushState(null, '', '#events')
  }, [])

  // Deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const eventMatch = hash.match(/#events#(.+)/)
      
      if (eventMatch) {
        const eventSlug = eventMatch[1]
        const event = events.find(e => 
          e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === eventSlug
        )
        if (event) setSelectedEvent(event)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [events])

  return (
    <>
      <div
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
          contain: 'layout' // Prevent layout recalculation
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '1400px',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
          }}
        >
          {/* Header */}
          <div style={{ flexShrink: 0, marginBottom: '32px' }}>
            <div style={{
              fontSize: '14px',
              color: 'hsl(140, 70%, 60%)',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              Conferences & Workshops
            </div>
            <h2 style={{
              fontSize: '56px',
              fontWeight: '700',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1'
            }}>
              Events & Presentations
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.68)',
              maxWidth: '900px'
            }}>
              A visual journey through technical conferences, workshops, and speaking engagements.
            </p>
          </div>

          {/* Page Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px',
            flexShrink: 0
          }}>
            <button
              onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: currentPage === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: currentPage === 0 ? 0.3 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToPage(idx)}
                  style={{
                    width: idx === currentPage ? '48px' : '36px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === currentPage ? 'hsl(var(--accent))' : 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: idx === currentPage ? '0 0 12px hsl(var(--accent) / 0.5)' : 'none'
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: currentPage === totalPages - 1 ? 0.3 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            style={{
              flex: 1,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              display: 'flex',
              WebkitOverflowScrolling: 'touch',
              minHeight: 0
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                data-page="true"
                data-page-index={pageIndex}
                style={{
                  minWidth: '100%',
                  width: '100%',
                  height: '100%',
                  flexShrink: 0,
                  // Don't render off-screen pages to save memory
                  display: visiblePages.includes(pageIndex) ? 'flex' : 'none'
                }}
              >
                {visiblePages.includes(pageIndex) && (
                  <EventPage
                    events={events.slice(pageIndex * EVENTS_PER_PAGE, (pageIndex + 1) * EVENTS_PER_PAGE)}
                    pageIndex={pageIndex}
                    scale={1}
                    onCardClick={openModal}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <Suspense fallback={null}>
          <EventsModal
            event={selectedEvent}
            onClose={closeModal}
            scale={scale}
          />
        </Suspense>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');
        
        .polaroid-card:hover {
          transform: rotate(0deg) scale(1.05) translateY(-8px) !important;
          z-index: 10;
        }

        button:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(1.1);
        }

        div::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}