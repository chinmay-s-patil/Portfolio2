'use client'
import { useState, useEffect } from 'react'

export default function Events() {
  const SCALE = 0.75
  const [selectedEvent, setSelectedEvent] = useState(null)
  const EVENTS_PER_PAGE = 3
  const [currentPage, setCurrentPage] = useState(0)
  const [slideshowIndices, setSlideshowIndices] = useState({})

  const events = [
    {
      id: 1,
      title: 'International Symposium on Wind Energy',
      location: 'VIT Chennai',
      date: 'March 2025',
      year: '2025',
      type: 'Symposium',
      images: [
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (1).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (10).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (11).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (12).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (13).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (14).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (15).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (16).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (17).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (18).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (19).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (2).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (20).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (21).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (22).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (3).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (4).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (5).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (6).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (7).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (8).jpg',
        '/Events/International Symposium of Advanced Wind Energy/International Symposium of Advanced Wind Energy (9).jpg',
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
      description: 'Participated in a hands-on Drone Workshop organized by the Do Drones club at IISc Bangalore. The session began with understanding the theoretical aspects of multirotor flight and control systems. We then spent a full day assembling, calibrating, performing pre-flight checks, and finally flying the S450 drone ourselves. The workshop concluded with an inspiring surprise visit from Dr. S. Somnath, former Chairman of ISRO, who shared valuable insights on India\'s advancements in aerospace and drone technologies.',
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
      ],
      description: 'Served as a member of the organizing committee for the National Conference of Wind Engineering (NCWE) held in March 2024. The event brought together leading experts and researchers in the field, with participation from international delegates and professors from the UK, Italy, Japan, and Germany. Numerous technical papers were presented, accompanied by insightful talks and discussions on the latest advances in wind engineering.',
      tags: ['Organizing', 'Wind Engineering', 'Conference'],
      rotation: 1,
      color: '#005fa3'
    },
    {
      id: 4,
      title: "Drone Workshop and Flight Training",
      location: "VIT Chennai",
      date: "February 2024",
      year: "2024",
      type: "Workshop",
      images: [
        "/Events/Drone VITC/Drone VITC (1).jpg",
        "/Events/Drone VITC/Drone VITC (2).jpg",
        "/Events/Drone VITC/Drone VITC (3).jpg",
        "/Events/Drone VITC/Drone VITC (4).jpg",
        "/Events/Drone VITC/Drone VITC (5).jpg",
        "/Events/Drone VITC/Drone VITC (6).jpg",
        "/Events/Drone VITC/Drone VITC (7).jpg",
      ],
      description: "Participated in a hands-on drone workshop at VIT Chennai focusing on UAV fundamentals and flight dynamics. Disassembled and studied a variety of drones, from simple toy models to an S500 kit, and gained practical experience flying the DJI Mavic Pro 3.",
      tags: ["Drones", "Aerospace", "Flight Dynamics", "UAV"],
      rotation: -1,
      color: "#00b890"
    },
  ]

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE)
  const currentEvents = events.slice(
    currentPage * EVENTS_PER_PAGE,
    (currentPage + 1) * EVENTS_PER_PAGE
  )

  // Initialize slideshow indices for modal (3 images at once)
  useEffect(() => {
    if (selectedEvent) {
      setSlideshowIndices({
        [selectedEvent.id]: [0, 1, 2]
      })
    }
  }, [selectedEvent])

  // Auto-advance modal slideshow (all 3 images change together)
  useEffect(() => {
    if (!selectedEvent) return

    const timer = setInterval(() => {
      setSlideshowIndices(prev => {
        const current = prev[selectedEvent.id] || [0, 1, 2]
        const totalImages = selectedEvent.images.length
        const newIndices = current.map(idx => (idx + 3) % totalImages)
        return { ...prev, [selectedEvent.id]: newIndices }
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [selectedEvent])

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div style={{ maxWidth: '1300px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top', flexShrink: 0, marginBottom: '2rem' }}>
          <div className="kicker">Conferences & Workshops</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & Presentations</h2>
          <p className="muted text-lg" style={{ maxWidth: '60ch' }}>
            A visual journey through technical conferences, workshops, and speaking engagements.
          </p>
        </div>

        {/* Events Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '2rem'
        }}>
          {currentEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              style={{
                cursor: 'pointer',
                transform: `rotate(${event.rotation}deg)`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="polaroid-card"
            >
              {/* Polaroid Frame */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                padding: '1rem',
                paddingBottom: '4rem',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 1px 8px rgba(0, 0, 0, 0.3)',
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

                {/* Photo Preview */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  background: `linear-gradient(135deg, ${event.color}20, ${event.color}05)`,
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '1rem'
                }}>
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.display = 'flex'
                      e.target.parentElement.style.alignItems = 'center'
                      e.target.parentElement.style.justifyContent = 'center'
                    }}
                  />
                  
                  {/* Fallback */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'none',
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
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
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
                onClick={() => setCurrentPage(idx)}
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
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedEvent(null)}
        >
          {/* Backdrop */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)'
          }} />

          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1400px',
              width: '95%',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, rgba(15, 20, 32, 0.95), rgba(10, 14, 26, 0.95))',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              className="hover:bg-[rgba(255,255,255,0.1)]"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Content */}
            <div style={{ 
              overflowY: 'auto', 
              padding: '2.5rem',
              flex: 1
            }}>
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: selectedEvent.color,
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  {selectedEvent.type}
                </div>
                
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {selectedEvent.title}
                </h2>

                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    color: 'var(--muted)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {selectedEvent.location}
                  </div>

                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    color: selectedEvent.color,
                    padding: '0.4rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {selectedEvent.date}
                  </div>
                </div>
              </div>

              {/* 3-Image Slideshow */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '2rem',
                height: '400px'
              }}>
                {(slideshowIndices[selectedEvent.id] || [0, 1, 2]).map((imgIndex, slotIndex) => (
                  <div
                    key={slotIndex}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <img
                      src={selectedEvent.images[imgIndex]}
                      alt={`${selectedEvent.title} - ${imgIndex + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'rgba(255, 255, 255, 0.95)'
                }}>
                  Overview
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'var(--muted)'
                }}>
                  {selectedEvent.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'rgba(255, 255, 255, 0.95)'
                }}>
                  Topics
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {selectedEvent.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        background: `${selectedEvent.color}15`,
                        border: `1px solid ${selectedEvent.color}40`,
                        color: selectedEvent.color,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .polaroid-card:hover {
          transform: rotate(0deg) scale(1.05) translateY(-8px) !important;
          z-index: 10;
        }

        @media (max-width: 1200px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}