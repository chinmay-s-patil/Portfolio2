'use client'
import { useState, useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Drone Propeller Simulation',
      subtitle: 'OpenFOAM · Mesh / AMI',
      description: 'Reverse engineered an S500 propeller geometry and optimized tip design through iterative CFD analysis. Implemented AMI (Arbitrary Mesh Interface) for accurate rotation modeling and detailed vortex shedding examination.',
      href: '#',
      tags: ['CFD', 'Aerodynamics', 'OpenFOAM']
    },
    {
      title: 'Solar Vortex Engine',
      subtitle: 'Multi-region · Radiation',
      description: 'Developed fvDOM radiation-driven natural convection model with carefully tuned mesh regions to accurately capture complex vortex formation and behavior patterns in solar thermal systems.',
      href: '#',
      tags: ['Heat Transfer', 'Radiation', 'Multi-physics']
    },
    {
      title: 'Interactive Portfolio',
      subtitle: 'Next.js · Tailwind',
      description: 'Modern, performant portfolio website with full-page scroll-snap navigation, smooth animations, and responsive design. Built with accessibility and user experience as primary considerations.',
      href: '#',
      tags: ['Web Dev', 'React', 'UI/UX']
    },
    {
      title: 'CFD Data Dashboard',
      subtitle: 'Python · D3.js · WebGL',
      description: 'Real-time visualization dashboard for simulation results with interactive 3D flow field rendering, time-series analysis tools, and automated report generation capabilities.',
      href: '#',
      tags: ['Visualization', 'Python', 'Dashboard']
    },
    {
      title: 'Mesh Quality Analyzer',
      subtitle: 'Python · OpenFOAM',
      description: 'Automated mesh quality assessment tool that analyzes OpenFOAM meshes and provides detailed reports on cell quality metrics, aspect ratios, and skewness with visualization.',
      href: '#',
      tags: ['Automation', 'Meshing', 'Tools']
    },
    {
      title: 'Turbulence Model Comparison',
      subtitle: 'OpenFOAM · Analysis',
      description: 'Comprehensive comparative study of RANS turbulence models (k-ε, k-ω SST, Spalart-Allmaras) for external aerodynamics with validation against experimental data.',
      href: '#',
      tags: ['Turbulence', 'Validation', 'Research']
    },
    {
      title: 'Heat Exchanger Optimization',
      subtitle: 'Thermal · CFD',
      description: 'Parametric study of fin geometries in compact heat exchangers using conjugate heat transfer simulations to maximize thermal performance while minimizing pressure drop.',
      href: '#',
      tags: ['Heat Transfer', 'Optimization', 'Research']
    },
    {
      title: 'Wind Farm Analysis',
      subtitle: 'OpenFOAM · Large Scale',
      description: 'Large-scale atmospheric boundary layer simulation to study wake effects and optimize turbine placement in wind farm configurations using actuator disk models.',
      href: '#',
      tags: ['Renewable Energy', 'CFD', 'Optimization']
    },
    {
      title: 'Cavitation Studies',
      subtitle: 'Multiphase · VOF',
      description: 'Investigation of cavitation phenomena in marine propellers using Volume of Fluid method with vapor-liquid phase change modeling and erosion risk assessment.',
      href: '#',
      tags: ['Multiphase', 'Marine', 'Advanced']
    },
    {
      title: 'HVAC System Design',
      subtitle: 'Comfort · Energy',
      description: 'Room air distribution analysis for HVAC systems focusing on thermal comfort indices, energy efficiency, and compliance with ventilation standards.',
      href: '#',
      tags: ['HVAC', 'Comfort', 'Building']
    },
    {
      title: 'Aeroacoustics Study',
      subtitle: 'Noise · FW-H',
      description: 'Computational aeroacoustics analysis of flow-induced noise using Ffowcs Williams-Hawkings acoustic analogy for automotive side mirror design optimization.',
      href: '#',
      tags: ['Acoustics', 'Automotive', 'Noise']
    },
    {
      title: 'Particle Tracking System',
      subtitle: 'Lagrangian · OpenFOAM',
      description: 'Advanced particle tracking simulation for droplet dispersion studies in spray systems with custom injection models and collision detection.',
      href: '#',
      tags: ['Multiphase', 'Particles', 'Spray']
    },
    {
      title: 'Combustion Modeling',
      subtitle: 'Reactive Flows · Chemistry',
      description: 'Non-premixed combustion simulation with detailed chemistry mechanisms and radiation modeling for industrial burner optimization.',
      href: '#',
      tags: ['Combustion', 'Chemistry', 'Energy']
    },
    {
      title: 'Microfluidics Design',
      subtitle: 'Lab-on-Chip · Mixing',
      description: 'Microscale fluid dynamics analysis for microfluidic device design focusing on mixing efficiency and flow distribution optimization.',
      href: '#',
      tags: ['Microfluidics', 'Mixing', 'Biomedical']
    },
    {
      title: 'Supersonic Flow Analysis',
      subtitle: 'Compressible · Shock',
      description: 'High-speed aerodynamics simulation of supersonic aircraft components with shock wave analysis and boundary layer interaction studies.',
      href: '#',
      tags: ['Supersonic', 'Compressible', 'Aerospace']
    },
    {
      title: 'Blood Flow Modeling',
      subtitle: 'Biomedical · FSI',
      description: 'Fluid-structure interaction analysis of blood flow in arterial systems with compliant vessel walls and pulsatile flow conditions.',
      href: '#',
      tags: ['Biomedical', 'FSI', 'Healthcare']
    },
    {
      title: 'Turbomachinery Analysis',
      subtitle: 'Rotating · Performance',
      description: 'Centrifugal pump performance analysis with rotating reference frames, cavitation prediction, and efficiency optimization studies.',
      href: '#',
      tags: ['Turbomachinery', 'Pumps', 'Performance']
    }
  ]

  const PROJECTS_PER_PAGE = 6
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

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
    <div className="max-w-6xl mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '2rem' }}>
      <div style={{ flexShrink: 0, marginBottom: '2rem' }}>
        <div className="kicker">Portfolio</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
        <p className="muted text-lg mb-8" style={{ maxWidth: '60ch' }}>
          A showcase of computational fluid dynamics simulations, visualization tools, 
          and web applications that demonstrate my technical capabilities and problem-solving approach.
        </p>
      </div>

      {/* Navigation Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        flexShrink: 0
      }}>
        {/* Previous Button */}
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

        {/* Page Indicators */}
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

        {/* Next Button */}
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

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="projects-horizontal-container"
        style={{
          flex: 1,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          display: 'flex',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="project-page"
            style={{
              minWidth: '100%',
              width: '100%',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              display: 'flex',
              alignItems: 'flex-start',
              paddingRight: pageIndex === totalPages - 1 ? 0 : '2rem'
            }}
          >
            <div style={{ width: '100%' }}>
              <div style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)'
              }}>
                {projects
                  .slice(pageIndex * PROJECTS_PER_PAGE, (pageIndex + 1) * PROJECTS_PER_PAGE)
                  .map((p, i) => (
                    <ProjectCard key={pageIndex * PROJECTS_PER_PAGE + i} {...p} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-horizontal-container::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 1200px) {
          .project-page > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .project-page > div > div {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
        }
      `}</style>
    </div>
  )
}