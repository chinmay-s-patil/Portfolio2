'use client'

import { useState, useEffect, useRef } from 'react'

// Upcoming projects data
const upcomingProjects = [
  {
    id: 1,
    title: '6DOF Turbine Motion',
    category: 'Wind Energy',
    status: 'In Progress',
    progress: 65,
    description: 'Implementing 6DOF mesh motion method to simulate wind turbine blade rotation driven by aerodynamic forces. Working on coupling fluid forces with rigid body dynamics.',
    challenges: ['Mesh deformation stability', 'Force coupling accuracy', 'Convergence at high rotation speeds'],
    solver: 'pimpleFoam + 6DOF',
    color: '#48cae4',
    icon: '🌪️',
    estimatedCompletion: 'Feb 2025'
  },
  {
    id: 2,
    title: 'Multi-Phase Boiling Solver',
    category: 'Phase Change',
    status: 'Early Development',
    progress: 30,
    description: 'Developing a custom solver for 3-phase simulation with phase change to accurately model boiling phenomena. Implementing temperature-dependent phase transition models.',
    challenges: ['Phase interface tracking', 'Heat transfer at phase boundaries', 'Nucleation modeling'],
    solver: 'Custom multiphaseEulerFoam',
    color: '#ff006e',
    icon: '♨️',
    estimatedCompletion: 'Apr 2025'
  },
  {
    id: 3,
    title: 'Battery Thermal CHT',
    category: 'Thermal Management',
    status: 'In Progress',
    progress: 50,
    description: 'Replicating the battery cooling mechanism in OpenFOAM using chtMultiRegionFoam. Validating results against commercial CFD to create an open-source alternative.',
    challenges: ['Material property calibration', 'PCM modeling', 'Multi-region coupling'],
    solver: 'chtMultiRegionFoam',
    color: '#06ffa5',
    icon: '🔋',
    estimatedCompletion: 'Mar 2025'
  },
  {
    id: 4,
    title: 'Bubble Rise Dynamics',
    category: 'Multiphase Flow',
    status: 'Testing',
    progress: 75,
    description: 'High-fidelity simulation of bubble rise with surface tension and shape deformation. Studying terminal velocity and wake patterns for different bubble sizes.',
    challenges: ['Surface tension accuracy', 'Mesh resolution requirements', 'Shape oscillations'],
    solver: 'interIsoFoam',
    color: '#00b4d8',
    icon: '🫧',
    estimatedCompletion: 'Feb 2025'
  },
  {
    id: 5,
    title: 'Pillar Separation (Enhanced)',
    category: 'Free Surface',
    status: 'In Progress',
    progress: 40,
    description: 'Improved simulation of water flow around bridge pillars with physically accurate free surface deflection. Implementing better outlet conditions and AMR for interface resolution.',
    challenges: ['Outlet boundary stability', 'Surface ripple accuracy', 'Long-term stability'],
    solver: 'interFoam + AMR',
    color: '#0077b6',
    icon: '🌊',
    estimatedCompletion: 'Mar 2025'
  },
  {
    id: 6,
    title: 'SpoonSplash Debug',
    category: 'Multiphase Impact',
    status: 'Debugging',
    progress: 20,
    description: 'Water stream impact on spoon surface. Currently debugging timestep collapse at impact moment (t→10⁻¹⁵). Investigating contact angle and mesh refinement strategies.',
    challenges: ['Timestep stability at impact', 'Contact line modeling', 'Extreme mesh refinement'],
    solver: 'interFoam',
    color: '#ff9500',
    icon: '🥄',
    estimatedCompletion: 'TBD'
  },
  {
    id: 7,
    title: 'Water Bottle Flip',
    category: 'Sloshing',
    status: 'Planning',
    progress: 10,
    description: 'Simulating bottle flip dynamics with internal water sloshing. Coupling 6DOF motion with multiphase flow to capture realistic fluid-structure interaction during rotation.',
    challenges: ['Violent sloshing', '6DOF + VOF coupling', 'Air entrainment'],
    solver: 'interFoam + 6DOF',
    color: '#9d4edd',
    icon: '🍾',
    estimatedCompletion: 'May 2025'
  }
]

function UpcomingCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      className="upcoming-card"
    >
      {/* Status Badge */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        padding: '6px 12px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        borderRadius: '20px',
        fontSize: '11px',
        fontWeight: '700',
        color: project.color,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: `1px solid ${project.color}60`,
        zIndex: 10
      }}>
        {project.status}
      </div>

      {/* Icon/Preview Area */}
      <div style={{
        width: '100%',
        height: '200px',
        background: `linear-gradient(135deg, ${project.color}20, rgba(0, 0, 0, 0.4))`,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Large Icon */}
        <div style={{
          fontSize: '80px',
          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          animation: 'float 3s ease-in-out infinite'
        }}>
          {project.icon}
        </div>

        {/* Category Badge */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          padding: '6px 12px',
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: '600',
          color: project.color,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          border: `1px solid ${project.color}60`
        }}>
          {project.category}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ 
        padding: '20px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#fff',
          lineHeight: '1.3'
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14px',
          lineHeight: '1.6',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '16px',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>

        {/* Progress Bar */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Progress
            </span>
            <span style={{
              fontSize: '14px',
              fontWeight: '700',
              color: project.color,
              fontFamily: 'monospace'
            }}>
              {project.progress}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${project.progress}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
              borderRadius: '3px',
              transition: 'width 0.3s ease',
              boxShadow: `0 0 8px ${project.color}60`
            }} />
          </div>
        </div>

        {/* Solver Badge */}
        <div style={{
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center',
          marginBottom: '12px'
        }}>
          <div style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '4px'
          }}>
            Solver
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: '700',
            color: project.color,
            fontFamily: 'monospace'
          }}>
            {project.solver}
          </div>
        </div>

        {/* View Details Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: `${project.color}10`,
          borderRadius: '8px',
          border: `1px solid ${project.color}30`,
          transition: 'all 0.2s ease'
        }}
        className="upcoming-cta">
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            color: project.color
          }}>
            View Details
          </span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
            style={{ transition: 'transform 0.2s ease' }}
            className="arrow-icon"
          >
            <path 
              d="M5 12h14M12 5l7 7-7 7" 
              stroke={project.color} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

// Modal Component
function UpcomingModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
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
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)'
      }} />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
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
          onClick={onClose}
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
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Content */}
        <div style={{ 
          overflowY: 'auto', 
          overflowX: 'hidden',
          padding: '2.5rem',
          flex: 1
        }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '12px'
            }}>
              <div style={{
                fontSize: '48px',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
              }}>
                {project.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  color: project.color,
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  {project.category}
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Status Row */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '16px'
            }}>
              <div style={{
                padding: '8px 16px',
                background: `${project.color}15`,
                border: `2px solid ${project.color}40`,
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '700',
                color: project.color,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {project.status}
              </div>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                📅 ETA: {project.estimatedCompletion}
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.95)'
              }}>
                Development Progress
              </h3>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: project.color,
                fontFamily: 'monospace'
              }}>
                {project.progress}%
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${project.progress}%`,
                height: '100%',
                background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                borderRadius: '6px',
                boxShadow: `0 0 16px ${project.color}80`,
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              Project Overview
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              {project.description}
            </p>
          </div>

          {/* Solver Info */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              Computational Approach
            </h3>
            <div style={{
              padding: '16px 20px',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '12px',
              border: `2px solid ${project.color}30`,
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke={project.color} strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke={project.color} strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke={project.color} strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke={project.color} strokeWidth="2"/>
              </svg>
              <div>
                <div style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '4px'
                }}>
                  OpenFOAM Solver
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: project.color,
                  fontFamily: 'monospace'
                }}>
                  {project.solver}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Challenges */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              Current Challenges
            </h3>
            <div style={{
              display: 'grid',
              gap: '12px'
            }}>
              {project.challenges.map((challenge, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    transition: 'all 0.2s ease'
                  }}
                  className="challenge-item"
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: project.color,
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${project.color}80`
                  }} />
                  <span style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    flex: 1
                  }}>
                    {challenge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .challenge-item:hover {
          background: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </div>
  )
}

// Main Component
export default function UpcomingSection() {
  const [scale, setScale] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollContainerRef = useRef(null)
  
  const BASE_WIDTH = 1920
  const BASE_HEIGHT = 1080
  const ITEMS_PER_PAGE = 4

  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const widthScale = viewportWidth / BASE_WIDTH
      const heightScale = viewportHeight / BASE_HEIGHT
      setScale(Math.min(widthScale, heightScale))
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  const totalPages = Math.ceil(upcomingProjects.length / ITEMS_PER_PAGE)

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

  const scrollToPage = (index) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const containerWidth = container.clientWidth
    container.scrollTo({ left: containerWidth * index, behavior: 'smooth' })
  }

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
          justifyContent: 'center'
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
              🚧 Work in Progress
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
              Upcoming Projects
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.68)',
              maxWidth: '900px'
            }}>
              A preview of current research and simulations in development — from advanced multiphase flows to novel solver implementations.
            </p>
          </div>

          {/* Page Navigation */}
          {totalPages > 1 && (
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
                  width: '44px',
                  height: '44px',
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
                      width: idx === currentPage ? '52px' : '36px',
                      height: '7px',
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
                  width: '44px',
                  height: '44px',
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
          )}

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
                style={{
                  minWidth: '100%',
                  width: '100%',
                  height: '100%',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  scrollSnapStop: 'always',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridTemplateRows: 'repeat(2, 1fr)',
                  gap: '24px',
                  width: '100%',
                  height: '100%',
                  maxHeight: '720px'
                }}>
                  {upcomingProjects
                    .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                    .map((project) => (
                      <UpcomingCard 
                        key={project.id} 
                        project={project} 
                        onClick={() => setSelectedProject(project)} 
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <UpcomingModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

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

        div::-webkit-scrollbar {
          display: none;
        }

        .upcoming-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
        }

        .upcoming-cta:hover {
          background: ${upcomingProjects[0]?.color}20 !important;
          border-color: ${upcomingProjects[0]?.color}50 !important;
        }

        .upcoming-cta:hover .arrow-icon {
          transform: translateX(4px);
        }

        .challenge-item:hover {
          background: rgba(255, 255, 255, 0.05) !important;
        }

        button:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(1.1);
        }

        @media (max-width: 1200px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </>
  )
}
