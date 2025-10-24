'use client'
import { useState, useEffect, useRef } from 'react'

export default function Events() {
  const SCALE = 0.75
  const [selectedEvent, setSelectedEvent] = useState(null)
  const EVENTS_PER_PAGE = 3
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

  const events = [
    {
      id: 1,
      title: 'International Symposium on Wind Energy',
      location: 'VIT Chennai',
      date: 'March 2025',
      year: '2025',
      type: 'Symposium',
      images: [
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (1).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (10).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (11).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (12).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (13).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (14).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (15).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (16).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (17).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (18).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (19).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (2).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (20).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (21).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (22).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (3).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (4).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (5).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (6).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (7).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (8).jpg',
        '\Events\International Symposium of Advanced Wind Energy\International Symposium of Advanced Wind Energy (9).jpg',
      ],
      description: 'Intensive hands-on sessions covering advanced meshing strategies, turbulence modeling best practices, and comprehensive validation methodologies for industrial CFD applications.',
      tags: ['Meshing', 'Turbulence', 'Validation'],
      rotation: -2,
      color: '#14ffc8'
    },
    {
      id: 2,
      title: 'IISc Do Drones Workshop',
      location: 'Bangalore, India',
      date: 'March 2025',
      year: '2025',
      type: 'Hands-on Workshop',
      images: [
        '/Events/IISc Do Drone/IISc Do Drone (1).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (2).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (3).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (4).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (5).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (6).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (7).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (8).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (9).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (10).jpg',
        '/Events/IISc Do Drone/IISc Do Drone (11).jpg',
      ],
      description: 'Participated in a hands-on Drone Workshop organized by the Do Drones club at IISc Bangalore. The session began with understanding the theoretical aspects of multirotor flight and control systems. We then spent a full day assembling, calibrating, performing pre-flight checks, and finally flying the S450 drone ourselves. The workshop concluded with an inspiring surprise visit from Dr. S. Somnath, former Chairman of ISRO, who shared valuable insights on India’s advancements in aerospace and drone technologies.',
      tags: ['Workshop', 'Drones', 'Aerospace'],
      rotation: 3,
      color: '#00d4aa'
    },
    {
      id: 3,
      title: 'National Conference of Wind Engineering (NCWE)',
      location: 'VIT Chennai',
      date: 'March 2024',
      year: '2024',
      type: 'Organizer',
      images: [
        '/Events/NCWE/NCWE (1).jpg',
        '/Events/NCWE/NCWE (2).jpg',
        '/Events/NCWE/NCWE (3).jpg',
        '/Events/NCWE/NCWE (4).jpg',
        '/Events/NCWE/NCWE (5).jpg',
        '/Events/NCWE/NCWE (6).jpg',
        '/Events/NCWE/NCWE (7).jpg',
        '/Events/NCWE/NCWE (8).jpg',
      ],
      description: 'Served as a member of the organizing committee for the National Conference of Wind Engineering (NCWE) held in March 2024. The event brought together leading experts and researchers in the field, with participation from international delegates and professors from the UK, Italy, Japan, and Germany. Numerous technical papers were presented, accompanied by insightful talks and discussions on the latest advances in wind engineering.',
      tags: ['Organizing', 'Wind Engineering', 'Conference'],
      rotation: 1,
      color: '#005fa3'
    },
    {
      "id": 4,
      "title": "Drone Workshop and Flight Training",
      "location": "VIT Chennai",
      "date": "February 2024",
      "year": "2024",
      "type": "Workshop",
      "images": [
        "/Events/Drone VITC/Drone VITC (1).jpg",
        "/Events/Drone VITC/Drone VITC (2).jpg",
        "/Events/Drone VITC/Drone VITC (3).jpg",
        "/Events/Drone VITC/Drone VITC (4).jpg",
        "/Events/Drone VITC/Drone VITC (5).jpg",
        "/Events/Drone VITC/Drone VITC (6).jpg",
        "/Events/Drone VITC/Drone VITC (7).jpg",
      ],
      "description": "Participated in a hands-on drone workshop at VIT Chennai focusing on UAV fundamentals and flight dynamics. Disassembled and studied a variety of drones, from simple toy models to an S500 kit, and gained practical experience flying the DJI Mavic Pro 3.",
      "tags": ["Drones", "Aerospace", "Flight Dynamics", "UAV"],
      "rotation": -1,
      "color": "#00b890"
    },

  ]

  const [imageIndices, setImageIndices] = useState(
    events.reduce((acc, event) => ({ ...acc, [event.id]: 0 }), {})
  )

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE)

  // Auto-advance slideshows
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev }
        events.forEach(event => {
          newIndices[event.id] = (prev[event.id] + 1) % event.images.length
        })
        return newIndices
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [events])

  // Scroll detection
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const containerWidth = container.clientWidth
      const page = Math.round(scrollLeft / containerWidth)
      setCurrentPage(Math.min(page, totalPages - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [totalPages])

  const scrollToPage = (pageIndex) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const containerWidth = container.clientWidth
    container.scrollTo({
      left: containerWidth * pageIndex,
      behavior: 'smooth'
    })
  }

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1)
    }
  }

  const goToPrevious = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1)
    }
  }

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top', flexShrink: 0, marginBottom: '2rem' }}>
        <div className="kicker">Conferences & Workshops</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & Presentations</h2>
        <p className="muted text-lg" style={{ maxWidth: '60ch' }}>
          A visual journey through technical conferences, workshops, and speaking engagements.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        style={{
          flex: 1,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          display: 'flex',
          gap: '2rem',
          padding: '2rem 0'
        }}
      >
        {events.map((event, idx) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
            style={{
              cursor: 'pointer',
              transform: `rotate(${event.rotation}deg) scale(${selectedEvent?.id === event.id ? 1.05 : 1})`,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              minWidth: 'calc(33.333% - 1.35rem)',
              maxWidth: 'calc(33.333% - 1.35rem)',
              flexShrink: 0,
              scrollSnapAlign: 'start'
            }}
            className="polaroid-card"
          >
            {/* Polaroid Frame */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
              padding: '1rem',
              paddingBottom: '4rem',
              borderRadius: '8px',
              boxShadow: selectedEvent?.id === event.id
                ? `0 20px 60px ${event.color}40, 0 0 0 3px ${event.color}`
                : '0 10px 30px rgba(0, 0, 0, 0.5), 0 1px 8px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Year Badge */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                fontSize: '1.25rem',
                fontWeight: '900',
                color: event.color,
                zIndex: 10,
                border: `2px solid ${event.color}60`,
                boxShadow: `0 4px 12px ${event.color}30`
              }}>
                {event.year}
              </div>

              {/* Photo Slideshow */}
              <div style={{
                width: '100%',
                height: '280px',
                background: `linear-gradient(135deg, ${event.color}20, ${event.color}05)`,
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem'
              }}>
                {event.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: imageIndices[event.id] === imgIdx ? 1 : 0,
                      filter: selectedEvent?.id === event.id ? 'brightness(1)' : 'brightness(0.9)',
                      transition: 'opacity 1s ease-in-out, filter 0.3s ease'
                    }}
                  />
                ))}
                
                {/* Fallback */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: '900',
                  color: event.color,
                  opacity: 0.15
                }}>
                  {event.year}
                </div>

                {/* Type Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.4rem 0.9rem',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: event.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {event.type}
                </div>

                {/* Slideshow Indicators */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '0.4rem',
                  zIndex: 10
                }}>
                  {event.images.map((_, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        width: imageIndices[event.id] === imgIdx ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: imageIndices[event.id] === imgIdx 
                          ? event.color 
                          : 'rgba(255, 255, 255, 0.4)',
                        transition: 'all 0.3s ease',
                        boxShadow: imageIndices[event.id] === imgIdx 
                          ? `0 0 8px ${event.color}80` 
                          : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Caption Area */}
              <div style={{
                fontFamily: "'Caveat', cursive",
                fontSize: '1.2rem',
                color: '#e0e0e0',
                textAlign: 'center',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                {event.title}
              </div>

              <div style={{
                fontSize: '0.85rem',
                color: '#a0a0a0',
                textAlign: 'center',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {event.location}
              </div>

              <div style={{
                fontSize: '0.8rem',
                color: '#808080',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                {event.date}
              </div>

              {/* Expanded Info */}
              <div style={{
                maxHeight: selectedEvent?.id === event.id ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease'
              }}>
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '2px solid #333'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    color: '#c0c0c0',
                    marginBottom: '1rem',
                    textAlign: 'left'
                  }}>
                    {event.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: `${event.color}15`,
                          color: event.color,
                          border: `1.5px solid ${event.color}40`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tape Effect */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-2deg)',
                width: '80px',
                height: '20px',
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(2px)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }} />
            </div>

            {/* Click hint */}
            {selectedEvent?.id !== event.id && (
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '0.4rem 0.8rem',
                borderRadius: '12px',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              className="click-hint"
              >
                Click to expand
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '2rem',
        flexShrink: 0
      }}>
        <button
          onClick={goToPrevious}
          disabled={currentPage === 0}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: currentPage === 0 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === 0 ? 0.3 : 1,
            transition: 'all 0.3s ease'
          }}
          aria-label="Previous page"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{ 
          display: 'flex', 
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToPage(idx)}
              style={{
                width: idx === currentPage ? '48px' : '32px',
                height: '6px',
                borderRadius: '3px',
                background: idx === currentPage 
                  ? 'hsl(var(--accent))' 
                  : 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: idx === currentPage 
                  ? '0 0 12px hsl(var(--accent) / 0.5)' 
                  : 'none'
              }}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages - 1}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: currentPage === totalPages - 1 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === totalPages - 1 ? 0.3 : 1,
            transition: 'all 0.3s ease'
          }}
          aria-label="Next page"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');

        .events-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .polaroid-card:hover {
          transform: rotate(0deg) scale(1.02) translateY(-8px) !important;
          z-index: 10;
        }

        .polaroid-card:hover .click-hint {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .polaroid-card {
            transform: rotate(0deg) !important;
            min-width: 80% !important;
            max-width: 80% !important;
          }
        }

        @media (max-width: 1024px) {
          .polaroid-card {
            min-width: calc(50% - 1rem) !important;
            max-width: calc(50% - 1rem) !important;
          }
        }
      `}</style>
    </div>
  )
}