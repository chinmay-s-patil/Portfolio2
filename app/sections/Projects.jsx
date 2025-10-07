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
    }
  ]

  const SCALE = 0.75
  const PROJECTS_PER_PAGE = 6
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const pageHeight = container.scrollHeight / totalPages
      const page = Math.round(scrollTop / pageHeight)
      setCurrentPage(page)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [totalPages])

  const scrollToPage = (pageIndex) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const pageHeight = container.scrollHeight / totalPages
    container.scrollTo({
      top: pageHeight * pageIndex,
      behavior: 'smooth'
    })
  }

  return (
    <div className="max-w-6xl mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top', flexShrink: 0 }}>
        <div className="kicker">Portfolio</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
        <p className="muted text-lg mb-8" style={{ maxWidth: '60ch' }}>
          A showcase of computational fluid dynamics simulations, visualization tools, 
          and web applications that demonstrate my technical capabilities and problem-solving approach.
        </p>
      </div>

      {/* Navigation Dots */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.5rem',
        marginBottom: '2rem',
        flexShrink: 0
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

      {/* Scrollable Projects Container */}
      {/* Scrollable Projects Container */}
      <div 
        ref={scrollContainerRef}
        className="projects-scroll-container"
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            style={{
              minHeight: '100%',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              display: 'flex',
              alignItems: 'center',
              paddingBottom: '2rem'
            }}
          >
            <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top', width: '100%' }}>
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

      {/* GitHub Link */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem',
        flexShrink: 0,
        transform: `scale(${SCALE})`,
        transformOrigin: 'center bottom'
      }}>
        <a 
          href="https://github.com/chinmay-s-patil" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white/6 border border-white/10"
          style={{ display: 'inline-flex' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View More on GitHub</span>
        </a>
      </div>
    </div>
  )
}