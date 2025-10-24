'use client'

import { useState } from 'react'

export default function OpenFOAMSection() {
    const [selectedSim, setSelectedSim] = useState(null)
    const [hoveredId, setHoveredId] = useState(null)

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
    thumbnail: '/openfoam/bubblesim-thumb.jpg',
    images: [
      '/openfoam/bubblesim-1.jpg',
      '/openfoam/bubblesim-2.jpg'
    ],
    color: '#00c4b3'
  },
  {
    id: 2,
    title: 'F1',
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
    thumbnail: '/openfoam/f1-thumb.jpg',
    images: [
      '/openfoam/f1-1.jpg',
      '/openfoam/f1-2.jpg'
    ],
    color: '#ff006e'
  },
  {
    id: 3,
    title: 'FSAE Car Sim',
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
    thumbnail: '/openfoam/fsae-thumb.jpg',
    images: [
      '/openfoam/fsae-1.jpg',
      '/openfoam/fsae-2.jpg'
    ],
    color: '#00b4d8'
  },
  {
    id: 4,
    title: 'Propeller Simulation',
    category: 'Aeroacoustics & Propulsion',
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
    thumbnail: '/openfoam/propeller-thumb.jpg',
    images: [
      '/openfoam/propeller-1.jpg',
      '/openfoam/propeller-2.jpg'
    ],
    color: '#48cae4'
  },
  {
    id: 5,
    title: 'SimpleEngineCombustion',
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
    thumbnail: '/openfoam/engine-thumb.jpg',
    images: [
      '/openfoam/engine-1.jpg',
      '/openfoam/engine-2.jpg'
    ],
    color: '#ff7b00'
  },
  {
    id: 6,
    title: 'SolarPanel',
    category: 'Wind Engineering',
    solver: 'simpleFoam, pimpleFoam',
    year: '2024',
    description: 'Aerodynamic loading study on solar panels. RANS and transient PIMPLE simulations performed to determine optimal tilt-angle load characteristics.',
    specs: {
      cells: '~4M',
      turbulence: 'k-ε',
      runtime: '48 hours',
      cores: '24'
    },
    tags: ['Wind Load', 'ABL', 'Transient'],
    thumbnail: '/openfoam/solar-thumb.jpg',
    images: [
      '/openfoam/solar-1.jpg',
      '/openfoam/solar-2.jpg'
    ],
    color: '#90e0ef'
  },
  {
    id: 7,
    title: 'stirringTank',
    category: 'Multiphase Mixing',
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
    thumbnail: '/openfoam/tank-thumb.jpg',
    images: [
      '/openfoam/tank-1.jpg',
      '/openfoam/tank-2.jpg'
    ],
    color: '#00a896'
  },
  {
    id: 8,
    title: 'SupersonicAirfoil',
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
    thumbnail: '/openfoam/airfoil-thumb.jpg',
    images: [
      '/openfoam/airfoil-1.jpg',
      '/openfoam/airfoil-2.jpg'
    ],
    color: '#0077b6'
  },
  {
    id: 9,
    title: 'SupersonicPrism',
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
    thumbnail: '/openfoam/prism-thumb.jpg',
    images: [
      '/openfoam/prism-1.jpg',
      '/openfoam/prism-2.jpg'
    ],
    color: '#023e8a'
  },
  {
    id: 10,
    title: 'WaterDrop',
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
    thumbnail: '/openfoam/waterdrop-thumb.jpg',
    images: [
      '/openfoam/waterdrop-1.jpg',
      '/openfoam/waterdrop-2.jpg'
    ],
    color: '#00b4d8'
  }
]


  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ flexShrink: 0, marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
        <div className="kicker">Computational Fluid Dynamics</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">OpenFOAM Simulations</h2>
        <p className="muted text-lg" style={{ maxWidth: '65ch' }}>
          Production-grade CFD simulations showcasing advanced meshing strategies, turbulence modeling, 
          and high-performance computing workflows in OpenFOAM.
        </p>
      </div>

      {/* Simulations Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2rem)',
        flex: 1,
        alignContent: 'start'
      }}>
        {simulations.map((sim) => (
          <div
            key={sim.id}
            onClick={() => setSelectedSim(sim)}
            onMouseEnter={() => setHoveredId(sim.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredId === sim.id ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredId === sim.id 
                ? `0 20px 60px ${sim.color}30, 0 0 0 2px ${sim.color}40`
                : '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            className="sim-card"
          >
            {/* Thumbnail */}
            <div style={{
              width: '100%',
              height: '200px',
              background: `linear-gradient(135deg, ${sim.color}15, rgba(0, 0, 0, 0.4))`,
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Placeholder - replace with actual images */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: '900',
                color: sim.color,
                opacity: 0.2,
                fontFamily: 'monospace'
              }}>
                {sim.solver}
              </div>

              {/* Year Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.4rem 0.9rem',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: sim.color,
                border: `1px solid ${sim.color}60`
              }}>
                {sim.year}
              </div>

              {/* Category */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                padding: '0.4rem 0.9rem',
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {sim.category}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontWeight: '700',
                marginBottom: '0.75rem',
                color: hoveredId === sim.id ? sim.color : '#fff',
                transition: 'color 0.3s ease'
              }}>
                {sim.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '1rem'
              }}>
                {sim.description}
              </p>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginBottom: '1rem',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {Object.entries(sim.specs).map(([key, value]) => (
                  <div key={key}>
                    <div style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '0.25rem'
                    }}>
                      {key}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: sim.color,
                      fontFamily: 'monospace'
                    }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {sim.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
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

            {/* Hover indicator */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: hoveredId === sim.id ? sim.color : 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hoveredId === sim.id ? 1 : 0.5,
              transition: 'all 0.3s ease'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke={hoveredId === sim.id ? '#0a0e1a' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSim && (
        <div
          onClick={() => setSelectedSim(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, rgba(15, 20, 32, 0.95), rgba(10, 14, 26, 0.95))',
              borderRadius: '24px',
              border: `2px solid ${selectedSim.color}40`,
              boxShadow: `0 20px 80px ${selectedSim.color}20`,
              overflow: 'auto',
              position: 'relative'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSim(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div style={{ padding: '2.5rem' }}>
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: selectedSim.color,
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  {selectedSim.category} · {selectedSim.solver}
                </div>
                
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {selectedSim.title}
                </h2>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  {selectedSim.description}
                </p>
              </div>

              {/* Specs */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'rgba(255, 255, 255, 0.95)'
                }}>
                  Simulation Details
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  {Object.entries(selectedSim.specs).map(([key, value]) => (
                    <div
                      key={key}
                      style={{
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px'
                      }}
                    >
                      <div style={{
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: 'rgba(255, 255, 255, 0.5)',
                        marginBottom: '0.5rem'
                      }}>
                        {key}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: selectedSim.color,
                        fontFamily: 'monospace'
                      }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'rgba(255, 255, 255, 0.95)'
                }}>
                  Tags
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {selectedSim.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        background: `${selectedSim.color}15`,
                        color: selectedSim.color,
                        border: `2px solid ${selectedSim.color}40`
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .sim-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${selectedSim?.color || 'hsl(var(--accent))'}, transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .sim-card:hover::before {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  )
}