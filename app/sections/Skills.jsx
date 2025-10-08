'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design Software',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['SolidWorks', 'AutoCAD', 'FreeCAD', 'Geomagic DesignX', 'CATIA'],
      color: '#14ffc8',
      bgGradient: 'linear-gradient(135deg, rgba(20, 255, 200, 0.15) 0%, rgba(20, 255, 200, 0.05) 100%)'
    },
    {
      title: 'Simulation Software',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['OpenFOAM', 'Ansys Fluent', 'STAR-CCM+', 'Abaqus', 'COMSOL', 'DualSPHysics', 'LS-DYNA'],
      color: '#00d4aa',
      bgGradient: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(0, 212, 170, 0.05) 100%)'
    },
    {
      title: 'Programming Languages',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['Python', 'Java', 'APDL'],
      color: '#00b890',
      bgGradient: 'linear-gradient(135deg, rgba(0, 184, 144, 0.15) 0%, rgba(0, 184, 144, 0.05) 100%)'
    },
    {
      title: 'Analysis & Methods',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16l4-8 4 4 4-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['Turbulence Modeling', 'Meshing', 'Supersonic Simulation', 'Thermal Analysis', 'Structural Analysis', 'Combustion', 'Aeroacoustics'],
      color: '#009c76',
      bgGradient: 'linear-gradient(135deg, rgba(0, 156, 118, 0.15) 0%, rgba(0, 156, 118, 0.05) 100%)'
    },
    {
      title: 'Data Science & ML',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="5" r="2" fill="currentColor"/>
          <circle cx="12" cy="19" r="2" fill="currentColor"/>
          <circle cx="5" cy="12" r="2" fill="currentColor"/>
          <circle cx="19" cy="12" r="2" fill="currentColor"/>
          <line x1="12" y1="8" x2="12" y2="9" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="15" x2="12" y2="17" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="15" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Computer Vision'],
      color: '#00806c',
      bgGradient: 'linear-gradient(135deg, rgba(0, 128, 108, 0.15) 0%, rgba(0, 128, 108, 0.05) 100%)'
    }
  ]

  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem'
    }}>
      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <div className="kicker">Technical Expertise</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
        <p className="muted text-lg" style={{ maxWidth: '65ch' }}>
          A comprehensive overview of my technical toolkit spanning engineering simulation, 
          software development, and data science.
        </p>
      </div>

      {/* Horizontal Scrolling Categories */}
      <div style={{
        flex: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        gap: '2rem',
        paddingBottom: '2rem',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin'
      }}
      className="skills-container"
      >
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            style={{
              minWidth: '420px',
              maxWidth: '420px',
              flexShrink: 0,
              scrollSnapAlign: 'center',
              background: 'rgba(15, 20, 30, 0.6)',
              backdropFilter: 'blur(20px)',
              border: `1px solid ${category.color}30`,
              borderRadius: '28px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 10px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px ${category.color}20 inset`
            }}
            className="skill-card"
          >
            {/* Animated background orb */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${category.color}25 0%, transparent 70%)`,
              animation: 'float 8s ease-in-out infinite',
              pointerEvents: 'none',
              filter: 'blur(40px)'
            }} />

            {/* Top accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${category.color}, ${category.color}00)`,
              boxShadow: `0 0 20px ${category.color}60`
            }} />

            {/* Icon Container */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: category.bgGradient,
                border: `2px solid ${category.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: `0 12px 35px ${category.color}30, 0 0 0 1px ${category.color}20 inset`,
                transition: 'all 0.4s ease'
              }}
              className="icon-container"
              >
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>
              </div>

              <h3 style={{
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '1rem',
                color: '#fff',
                letterSpacing: '-0.03em',
                lineHeight: '1.2'
              }}>
                {category.title}
              </h3>

              <div style={{
                height: '4px',
                width: '100px',
                background: `linear-gradient(90deg, ${category.color}, transparent)`,
                borderRadius: '999px',
                boxShadow: `0 0 15px ${category.color}60`
              }} />
            </div>

            {/* Skills Grid */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              flex: 1
            }}>
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.95)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    backdropFilter: 'blur(10px)'
                  }}
                  className="skill-tag"
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="skill-bg"
                  />
                  <span style={{ position: 'relative', zIndex: 1 }}>{skill}</span>
                </div>
              ))}
            </div>

            {/* Category Number */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2.5rem',
              fontSize: '7rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              pointerEvents: 'none',
              letterSpacing: '-0.05em',
              opacity: 0.5
            }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.9rem',
        fontWeight: '500'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Scroll to explore all categories</span>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        .skill-card:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
          border-color: currentColor;
        }

        .skill-card:hover .icon-container {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 20px 50px currentColor;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .skill-tag:hover .skill-bg {
          opacity: 1;
        }

        .skills-container::-webkit-scrollbar {
          height: 12px;
        }

        .skills-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          margin: 0 2rem;
        }

        .skills-container::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #14ffc8 0%, #00d4aa 50%, #00b890 100%);
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .skills-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #14ffc8 0%, #14ffc8 100%);
          box-shadow: 0 0 10px #14ffc8;
        }

        @media (max-width: 768px) {
          .skill-card {
            min-width: 340px !important;
            max-width: 340px !important;
            padding: 2rem !important;
          }
          
          .icon-container {
            width: 64px !important;
            height: 64px !important;
          }
        }
      `}</style>
    </div>
  )
}