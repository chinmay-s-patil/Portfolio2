'use client'

import { useState, useEffect, useRef } from 'react'
import ProjectModal from '../components/ProjectModal'

export default function OpenFOAMSection() {
  const [selectedSim, setSelectedSim] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const scrollContainerRef = useRef(null)

  const simulations = [
    {
      id: 1,
      title: 'BubbleSim',
      category: 'Multiphase Flow',
      solver: 'interIsoFoam',
      year: '2024',
      description: 'Two-phase bubble dynamics simulation capturing interface evolution and surface tension effects using the Volume of Fluid (VOF) method.',
      specs: {
        cells: '~1.2M',
        turbulence: 'LAMINAR',
        runtime: '12 hours',
        cores: '8'
      },
      tags: ['VOF', 'Multiphase', 'Interface Tracking'],
      media: [
        { type: 'video', src: '/OpenFoam/BubbleSim/BubbleSim.mp4' },
      ],
      color: '#00c4b3',
      learnings: [
        'Implemented VOF method for interface tracking',
        'Optimized surface tension modeling',
        'Achieved stable bubble dynamics simulation'
      ]
    },
    {
      id: 2,
      title: 'F1 Aerodynamics',
      category: 'Vehicle Aerodynamics',
      solver: 'pimpleFoam',
      year: '2025',
      description: 'Aerodynamic analysis of a Formula 1 car under ground effect conditions. Simulated flow separation, diffuser efficiency, and pressure distribution.',
      specs: {
        cells: '~15M',
        turbulence: 'k-ω SST',
        runtime: '180 hours',
        cores: '96'
      },
      tags: ['CFD', 'Aerodynamics', 'Motorsport'],
      media: [
        { type: 'video', src: '/OpenFoam/F1/F1.mp4' },
      ],
      color: '#ff006e',
      learnings: [
        'Modeled ground effect aerodynamics',
        'Analyzed flow separation patterns',
        'Optimized diffuser efficiency'
      ]
    },
    {
      id: 3,
      title: 'FSAE Car Simulation',
      category: 'Vehicle Aerodynamics',
      solver: 'pimpleFoam',
      year: '2024',
      description: 'Flow simulation of a Formula SAE racecar to optimize aerodynamic balance and drag-to-lift ratio using transient PIMPLE coupling.',
      specs: {
        cells: '~6M',
        turbulence: 'k-ω SST',
        runtime: '72 hours',
        cores: '48'
      },
      tags: ['FSAE', 'Transient', 'Vehicle'],
      media: [
        { type: 'video', src: '/OpenFoam/FSAE Car Sim/DES-video-with-car-slower-fixed-Perspective-Q-Criterion.mp4' },
        { type: 'video', src: '/OpenFoam/FSAE Car Sim/LES-video-with-car-slower-fixed-perspective-Q-Criterion.mp4' },
        { type: 'video', src: '/OpenFoam/FSAE Car Sim/LES-With_VOR-Q-crit-4 Slowed.mp4' }
      ],
      color: '#00b4d8',
      learnings: [
        'Optimized aerodynamic balance',
        'Analyzed transient flow effects',
        'Improved drag-to-lift ratio'
      ]
    },
    {
      id: 4,
      title: 'Propeller Simulation',
      category: 'Aeroacoustics',
      solver: 'pimpleFoam',
      year: '2025',
      description: 'Unsteady simulation of rotating propeller blades capturing wake interaction and thrust generation under realistic RPM conditions.',
      specs: {
        cells: '~10M',
        turbulence: 'LES (WALE)',
        runtime: '200 hours',
        cores: '64'
      },
      tags: ['LES', 'Rotation', 'Propulsion'],
      media: [
        { type: 'video', src: '/Openfoam/Propeller Simulation/Propeller Simulation.mp4' },
        // { type: 'image', src: '/openfoam/propeller-1.jpg' }
      ],
      color: '#48cae4',
      learnings: [
        'Implemented sliding mesh for rotation',
        'Captured wake interaction dynamics',
        'Analyzed thrust generation'
      ]
    },
    {
      id: 5,
      title: 'Engine Combustion',
      category: 'Combustion',
      solver: 'reactingFoam',
      year: '2024',
      description: 'Simplified combustion chamber simulation using detailed reaction mechanisms to predict flame propagation and heat release.',
      specs: {
        cells: '~3M',
        turbulence: 'RANS (k-ε)',
        runtime: '60 hours',
        cores: '32'
      },
      tags: ['Combustion', 'CHT', 'Energy'],
      media: [
        { type: 'video', src: '/openfoam/engine.mp4' },
        { type: 'image', src: '/openfoam/engine-1.jpg' }
      ],
      color: '#ff7b00',
      learnings: [
        'Modeled detailed reaction mechanisms',
        'Predicted flame propagation',
        'Analyzed heat release patterns'
      ]
    },
    {
      id: 6,
      title: 'Solar Panel Wind Load',
      category: 'Wind Engineering',
      solver: 'simpleFoam',
      year: '2024',
      description: 'Aerodynamic loading study on solar panels. RANS and transient PIMPLE simulations performed to determine optimal tilt-angle load characteristics.',
      specs: {
        cells: '~4M',
        turbulence: 'k-ε',
        runtime: '48 hours',
        cores: '24'
      },
      tags: ['Wind Load', 'ABL', 'Transient'],
      media: [
        { type: 'video', src: '/openfoam/solar.mp4' },
        { type: 'image', src: '/openfoam/solar-1.jpg' }
      ],
      color: '#90e0ef',
      learnings: [
        'Analyzed wind loading effects',
        'Optimized tilt angle',
        'Developed ABL profiles'
      ]
    },
    {
      id: 7,
      title: 'Stirring Tank',
      category: 'Multiphase Flow',
      solver: 'interIsoFoam',
      year: '2023',
      description: 'Mixing simulation inside a stirred tank with impeller motion and free surface tracking. Evaluated mixing time and vortex pattern formation.',
      specs: {
        cells: '~2M',
        turbulence: 'k-ω SST',
        runtime: '36 hours',
        cores: '24'
      },
      tags: ['Mixing', 'VOF', 'Impeller'],
      media: [
        { type: 'video', src: '/openfoam/tank.mp4' },
        { type: 'image', src: '/openfoam/tank-1.jpg' }
      ],
      color: '#00a896',
      learnings: [
        'Modeled impeller motion',
        'Tracked free surface dynamics',
        'Optimized mixing time'
      ]
    },
    {
      id: 8,
      title: 'Supersonic Airfoil',
      category: 'High-Speed Flow',
      solver: 'sonicFoam',
      year: '2025',
      description: 'Supersonic flow simulation over a wedge-type airfoil capturing shock formation, expansion fans, and pressure distribution at Mach 2.0.',
      specs: {
        cells: '~2.8M',
        turbulence: 'Spalart–Allmaras',
        runtime: '30 hours',
        cores: '20'
      },
      tags: ['Compressible', 'Shock', 'Supersonic'],
      media: [
        { type: 'video', src: '/openfoam/airfoil.mp4' },
        { type: 'image', src: '/openfoam/airfoil-1.jpg' }
      ],
      color: '#0077b6',
      learnings: [
        'Captured shock wave formation',
        'Analyzed expansion fans',
        'Validated supersonic flow physics'
      ]
    },
    {
      id: 9,
      title: 'Supersonic Prism',
      category: 'High-Speed Flow',
      solver: 'sonicFoam',
      year: '2025',
      description: 'Compressible flow past a sharp-edged prism generating oblique shock structures and expansion fans, analyzed for Mach 3 freestream.',
      specs: {
        cells: '~3.5M',
        turbulence: 'Spalart–Allmaras',
        runtime: '40 hours',
        cores: '24'
      },
      tags: ['Mach Flow', 'Shock Wave', 'Compressible'],
      media: [
        { type: 'video', src: '/openfoam/prism.mp4' },
        { type: 'image', src: '/openfoam/prism-1.jpg' }
      ],
      color: '#023e8a',
      learnings: [
        'Modeled oblique shock structures',
        'Analyzed Mach 3 flow features',
        'Captured expansion fan dynamics'
      ]
    },
    {
      id: 10,
      title: 'Water Droplet Impact',
      category: 'Multiphase Flow',
      solver: 'interIsoFoam',
      year: '2025',
      description: 'High-resolution simulation of a droplet impact event on a water surface capturing crown formation and secondary breakup dynamics.',
      specs: {
        cells: '~1.5M',
        turbulence: 'LES',
        runtime: '20 hours',
        cores: '16'
      },
      tags: ['Impact', 'VOF', 'Splash'],
      media: [
        { type: 'video', src: '/openfoam/waterdrop.mp4' },
        { type: 'image', src: '/openfoam/waterdrop-1.jpg' }
      ],
      color: '#00b4d8',
      learnings: [
        'Captured crown formation',
        'Analyzed secondary breakup',
        'High-resolution interface tracking'
      ]
    }
  ]

  // Get unique solvers for filter
  const solvers = ['all', ...new Set(simulations.map(s => s.solver))]

  // Filter simulations based on active solver
  const filteredSimulations = activeFilter === 'all' 
    ? simulations 
    : simulations.filter(s => s.solver === activeFilter)

  // Auto-scroll functionality
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div style={{ 
        maxWidth: '1600px',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(1rem, 2vw, 2rem)'
      }}>
        {/* Header */}
        <div style={{ 
          flexShrink: 0, 
          marginBottom: 'clamp(1.5rem, 3vh, 2rem)' 
        }}>
          <div className="kicker" style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 0.75rem)'
          }}>
            Computational Fluid Dynamics
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1'
          }}>
            OpenFOAM Simulations
          </h2>
          <p className="muted" style={{ 
            maxWidth: '65ch',
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: '1.6'
          }}>
            Production-grade CFD simulations showcasing advanced meshing strategies, turbulence modeling, 
            and high-performance computing workflows.
          </p>
        </div>

        {/* Solver Filter Pills */}
        <div style={{
          display: 'flex',
          gap: 'clamp(0.5rem, 1vw, 0.75rem)',
          marginBottom: 'clamp(1.5rem, 3vh, 2rem)',
          overflowX: 'auto',
          scrollbarWidth: 'thin',
          paddingBottom: '0.5rem',
          flexShrink: 0
        }}>
          {solvers.map((solver) => (
            <button
              key={solver}
              onClick={() => setActiveFilter(solver)}
              style={{
                padding: 'clamp(0.5rem, 1vw, 0.65rem) clamp(1rem, 2vw, 1.5rem)',
                borderRadius: '10px',
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                fontWeight: '600',
                background: activeFilter === solver
                  ? 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: activeFilter === solver
                  ? '2px solid hsl(var(--accent))'
                  : '2px solid rgba(255, 255, 255, 0.1)',
                color: activeFilter === solver
                  ? 'hsl(var(--accent))'
                  : 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeFilter === solver
                  ? '0 4px 16px hsl(var(--accent) / 0.25)'
                  : 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'monospace'
              }}
              className="filter-pill"
            >
              {solver}
            </button>
          ))}
        </div>

        {/* Navigation Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: 'clamp(1rem, 2vh, 1.5rem)',
          flexShrink: 0
        }}>
          <button
            onClick={scrollLeft}
            style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
            }}
            className="scroll-button"
            aria-label="Scroll left"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>

            <button
            onClick={scrollRight}
            style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
            }}
            className="scroll-button"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent',
            paddingBottom: '1rem',
            flex: 1,
            alignItems: 'stretch'
          }}
          className="openfoam-scroll"
        >
          {filteredSimulations.map((sim) => (
            <div
              key={sim.id}
              onClick={() => setSelectedSim(sim)}
              style={{
                minWidth: 'clamp(320px, 40vw, 420px)',
                maxWidth: 'clamp(320px, 40vw, 420px)',
                flexShrink: 0,
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="sim-card-horizontal"
            >
              {/* Preview Area */}
              <div style={{
                width: '100%',
                height: '240px',
                background: `linear-gradient(135deg, ${sim.color}15, rgba(0, 0, 0, 0.4))`,
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                {/* Placeholder */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: sim.color,
                  opacity: 0.2,
                  fontFamily: 'monospace'
                }}>
                  {sim.solver}
                </div>

                {/* Solver Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  color: sim.color,
                  border: `1px solid ${sim.color}60`,
                  fontFamily: 'monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {sim.solver}
                </div>

                {/* Year Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#fff'
                }}>
                  {sim.year}
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {sim.category}
                </div>
              </div>

              {/* Content Area */}
              <div style={{ 
                padding: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Title */}
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: '#fff',
                  lineHeight: '1.2'
                }}>
                  {sim.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '1rem',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {sim.description}
                </p>

                {/* Mini Specs Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '0.15rem'
                    }}>
                      Mesh
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: sim.color,
                      fontFamily: 'monospace'
                    }}>
                      {sim.specs.cells}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '0.15rem'
                    }}>
                      Model
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: sim.color,
                      fontFamily: 'monospace'
                    }}>
                      {sim.specs.turbulence}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem'
                }}>
                  {sim.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        background: `${sim.color}15`,
                        color: sim.color,
                        border: `1px solid ${sim.color}30`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Indicator */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'all 0.3s ease',
                pointerEvents: 'none'
              }}
              className="card-arrow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSim && (
        <ProjectModal 
          project={selectedSim} 
          onClose={() => setSelectedSim(null)} 
        />
      )}

      <style jsx>{`
        .openfoam-scroll::-webkit-scrollbar {
          height: 8px;
        }

        .openfoam-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .openfoam-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .openfoam-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .sim-card-horizontal:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .sim-card-horizontal:hover .card-arrow {
          opacity: 1;
          background: hsl(var(--accent));
        }

        .scroll-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.1);
        }

        .filter-pill:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .sim-card-horizontal {
            min-width: 280px !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </>
  )
}