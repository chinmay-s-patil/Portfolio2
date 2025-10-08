'use client'
import { useState, useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Optimization of Pyrolysis-Based Plastic Oil Yield',
      subtitle: 'B.Tech Thesis · ML Model',
      description: 'Designed and executed Taguchi-based pyrolysis experiments on HDPE, PS, and blends. Analyzed pyrolysis oils and feedstocks with advanced instrumentation. Developed ML models achieving 95.96 R2 for yield prediction.',
      href: '#',
      tags: ['Alternative Fuels', 'Machine Learning', 'Thermal']
    },
    {
      title: 'Hybrid Battery Cooling Mechanism',
      subtitle: 'Thermal Management · Ansys CFD',
      description: 'Engineered and simulated a cooling system utilizing TIM, PCM, and liquid coolant in SolidWorks and Ansys, achieving 67.31% efficiency improvement for compact batteries under variable load.',
      href: '#',
      tags: ['Thermal', 'CFD', 'Batteries']
    },
    {
      title: 'Reverse Engineering S500 Drone',
      subtitle: '3D Scanning · CAD/Geomagic',
      description: 'Captured high-fidelity scans of S500 drone and reconstructed model in SolidWorks (0.01mm tolerance). Achieved full digital assembly with reference to manufacturer kit documentation.',
      href: '#',
      tags: ['Reverse Engineering', 'CAD', 'Drone']
    },
    {
      title: 'CFD Evaluation of Drone Propeller Downwash',
      subtitle: 'OpenFOAM · Aerodynamics',
      description: 'Simulated propeller downwash to analyze aerodynamic performance and stability. Quantified downwash influence on lift coefficient for improved drone design.',
      href: '#',
      tags: ['CFD', 'Aerodynamics', 'OpenFOAM']
    },
    {
      title: 'Wind Turbine Performance with Vortex Generators',
      subtitle: 'CFD · Energy',
      description: 'Comparative simulations of turbine configurations (baseline + vortex generators) determined lift, flow stability and energy capture gains.',
      href: '#',
      tags: ['CFD', 'Wind Energy', 'Turbine']
    },
    {
      title: 'Solar Parapet Roof Panel Aerodynamics',
      subtitle: 'OpenFOAM · Custom ABL',
      description: 'Simulated parapet roof-mounted solar panels to study wind loads, developed custom ABL boundary conditions, assessed parapet height effects on sheltering and panel durability.',
      href: '#',
      tags: ['CFD', 'Solar', 'Building']
    },
    {
      title: 'Propeller Aeroacoustics Study',
      subtitle: 'LES · FW-H · ANSYS Fluent',
      description: 'Transient aeroacoustic simulation of propellers using sliding mesh and FW-H analogy at multiple receiver points, including geometric comparisons (standard, foldable, toroidal).',
      href: '#',
      tags: ['Aeroacoustics', 'Noise', 'CFD']
    },
    {
      title: 'Natural Gas Combustion Simulation',
      subtitle: 'OpenFOAM · AMR',
      description: 'Modeled combustion of Indian composition natural gas on a stove burner using adaptive mesh refinement to resolve flame, pollutant formation, and emissions under varying configuration.',
      href: '#',
      tags: ['Combustion', 'CFD', 'Energy']
    },
    {
      title: 'Laser Bed Powder Fusion Simulations',
      subtitle: 'Additive Manufacturing · Process Analysis',
      description: 'Analyzed melting, solidification, and microstructure evolution in LBPF processes. Evaluated impacts of laser power, scan speed, powder types to minimize defects.',
      href: '#',
      tags: ['Additive', 'Thermal', 'Materials']
    },
    {
      title: 'Immersion Cooling in Battery Thermal Management',
      subtitle: 'Parametric · Simulation',
      description: 'Systematically studied effects of coolant types, C-rating, inlet velocity on battery management, reporting a 43.99% improvement using OpenFOAM.',
      href: '#',
      tags: ['Thermal', 'Batteries', 'Simulation']
    },
    {
      title: 'Simulation of Truck Platooning',
      subtitle: 'OpenFOAM · Aerodynamics',
      description: 'CFD study of drag reduction and fuel efficiency in truck platooning. Revealed aerodynamic interactions and optimization strategies for multi-vehicle setups.',
      href: '#',
      tags: ['CFD', 'Transport', 'Optimization']
    },
    {
      title: 'PINN for CFD Simulations',
      subtitle: 'Physics-Informed Neural Net',
      description: 'Developed a neural model for simulating flow around a cylinder, enabling future work on variable geometry and robust embedding.',
      href: '#',
      tags: ['Machine Learning', 'CFD', 'Physics']
    },
    {
      title: 'Bullet Impact Simulations',
      subtitle: 'Ansys Explicit · Dynamics',
      description: 'Analyzed impact dynamics of a bullet on bolted plate, evaluating stress distribution and material deformation in high-speed events.',
      href: '#',
      tags: ['Impact', 'Simulation', 'Materials']
    },
    {
      title: 'Aerodynamics of Ground-Mounted Solar Arrays',
      subtitle: 'CFD · Pressure Mapping',
      description: 'Performed steady-state and transient simulations to map pressure/force on solar arrays, guiding system design for optimized installations.',
      href: '#',
      tags: ['CFD', 'Solar', 'Optimization']
    },
    {
      title: 'CAD Model of Solar Vortex Engine',
      subtitle: 'SolidWorks · Design',
      description: 'Created a precise CAD baseline for future solar vortex engine simulations, incorporating current research standards (1mm tolerance).',
      href: '#',
      tags: ['CAD', 'Design', 'Energy']
    },
    {
      title: 'Wind Tunnel Test Section Modeling',
      subtitle: 'SolidWorks · Precision Modeling',
      description: '3D engineered wind tunnel sections to a tolerance of 0.01mm from field measurements, supporting instrumentation and experimental analysis.',
      href: '#',
      tags: ['CAD', 'Experiment', 'Aero']
    },
    {
      title: 'Fracture Mechanics Simulation',
      subtitle: 'COMSOL · J-Integral',
      description: 'Simulated angled crack propagation using COMSOL, compiled extensive dataset, and developed ML and neural network models with >99% prediction accuracy.',
      href: '#',
      tags: ['Fracture', 'ML', 'Simulation']
    },
    {
      title: 'Graphite Rupture Strength Prediction',
      subtitle: 'Deep Learning · Materials',
      description: 'Developed a model with 98.1% accuracy predicting graphite rupture strength using historic nuclear-grade graphite datasets.',
      href: '#',
      tags: ['Deep Learning', 'Materials', 'Prediction']
    },
    {
      title: 'Language Identification in Music',
      subtitle: 'Python · PyTorch',
      description: 'Built a deep learning system achieving 97% accuracy for language detection in music using MFCC and audio feature engineering.',
      href: '#',
      tags: ['Deep Learning', 'Audio', 'ML']
    },
    {
      title: 'Guitar Design Project',
      subtitle: 'CAD · Showcase',
      description: 'Created a highly detailed and visually optimized guitar model in CAD (first-year showcase project).',
      href: '#',
      tags: ['Design', 'CAD', 'Showcase']
    },
    {
      title: 'Aerodynamics Lab Experiments',
      subtitle: 'Instrumentation · Wind',
      description: 'Conducted hands-on experimentation in wind turbine instrumentation, anemometry, pitot tube analysis under faculty supervision.',
      href: '#',
      tags: ['Experiment', 'Wind', 'Instrumentation']
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