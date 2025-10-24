'use client'

import { useState } from 'react'

export default function OpenFOAMSection() {
  const [selectedSim, setSelectedSim] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  const simulations = [
    {
      id: 1,
      title: 'Drone Propeller Flow Analysis',
      category: 'Aerodynamics',
      solver: 'simpleFoam',
      year: '2024',
      description: 'High-fidelity RANS simulation of drone propeller wake interaction with downstream surfaces. Analyzed velocity profiles, pressure distributions, and vortex structures.',
      specs: {
        cells: '~2.5M',
        turbulence: 'k-ω SST',
        runtime: '48 hours',
        cores: '24'
      },
      tags: ['RANS', 'Propeller', 'Wake Analysis'],
      thumbnail: '/openfoam/propeller-thumb.jpg',
      images: [
        '/openfoam/propeller-1.jpg',
        '/openfoam/propeller-2.jpg',
        '/openfoam/propeller-3.jpg'
      ],
      color: '#14ffc8'
    },
    {
      id: 2,
      title: 'Solar Array Wind Loading',
      category: 'Wind Engineering',
      solver: 'simpleFoam',
      year: '2024',
      description: 'Atmospheric boundary layer simulation over ground-mounted solar panels with custom ABL profiles. Evaluated structural loads under various wind conditions.',
      specs: {
        cells: '~3.2M',
        turbulence: 'k-ε',
        runtime: '36 hours',
        cores: '32'
      },
      tags: ['ABL', 'Wind Loading', 'Solar'],
      thumbnail: '/openfoam/solar-thumb.jpg',
      images: [
        '/openfoam/solar-1.jpg',
        '/openfoam/solar-2.jpg'
      ],
      color: '#00d4aa'
    },
    {
      id: 3,
      title: 'Battery Immersion Cooling',
      category: 'Thermal Management',
      solver: 'buoyantSimpleFoam',
      year: '2023',
      description: 'Conjugate heat transfer simulation of battery pack with immersion cooling. Parametric study of coolant properties and flow rates.',
      specs: {
        cells: '~1.8M',
        turbulence: 'k-ω SST',
        runtime: '24 hours',
        cores: '16'
      },
      tags: ['CHT', 'Thermal', 'Batteries'],
      thumbnail: '/openfoam/battery-thumb.jpg',
      images: [
        '/openfoam/battery-1.jpg',
        '/openfoam/battery-2.jpg',
        '/openfoam/battery-3.jpg'
      ],
      color: '#00b890'
    },
    {
      id: 4,
      title: 'Natural Gas Burner Combustion',
      category: 'Combustion',
      solver: 'reactingFoam',
      year: '2023',
      description: 'Reactive flow simulation with detailed chemistry for domestic gas burner. Implemented adaptive mesh refinement for flame front resolution.',
      specs: {
        cells: '~4.5M (AMR)',
        turbulence: 'LES',
        runtime: '120 hours',
        cores: '48'
      },
      tags: ['Combustion', 'AMR', 'Chemistry'],
      thumbnail: '/openfoam/combustion-thumb.jpg',
      images: [
        '/openfoam/combustion-1.jpg'
      ],
      color: '#009c76'
    },
    {
      id: 5,
      title: 'Truck Platoon Aerodynamics',
      category: 'Vehicle Aerodynamics',
      solver: 'simpleFoam',
      year: '2023',
      description: 'Multi-body aerodynamic simulation quantifying drag reduction in truck platooning configurations. Optimized spacing for maximum efficiency.',
      specs: {
        cells: '~5.1M',
        turbulence: 'k-ω SST',
        runtime: '72 hours',
        cores: '40'
      },
      tags: ['Drag Reduction', 'Multi-body', 'Transport'],
      thumbnail: '/openfoam/truck-thumb.jpg',
      images: [
        '/openfoam/truck-1.jpg',
        '/openfoam/truck-2.jpg'
      ],
      color: '#14c8aa'
    },
    {
      id: 6,
      title: 'Rotor-Wake Interaction (LES)',
      category: 'Rotorcraft',
      solver: 'pimpleFoam',
      year: '2024',
      description: 'Large Eddy Simulation of rotor wake with sliding mesh technique. Captured unsteady vortex structures and blade-wake interactions.',
      specs: {
        cells: '~8.2M',
        turbulence: 'LES (Smagorinsky)',
        runtime: '240 hours',
        cores: '64'
      },
      tags: ['LES', 'Rotating Mesh', 'Unsteady'],
      thumbnail: '/openfoam/rotor-thumb.jpg',
      images: [
        '/openfoam/rotor-1.jpg',
        '/openfoam/rotor-2.jpg',
        '/openfoam/rotor-3.jpg'
      ],
      color: '#0aa890'
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