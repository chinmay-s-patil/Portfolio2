'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design Software',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      skills: ['SolidWorks', 'FreeCAD', 'Geomagic DesignX', 'AutoCAD', 'CATIA', 'Inventor']
    },
    {
      title: 'Simulation Software',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['OpenFOAM', 'Ansys Fluent', 'STAR-CCM+', 'COMSOL', 'Abaqus', 'LS-DYNA', 'DualSPHysics', 'ParaView']
    },
    {
      title: 'Programming Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['Python', 'C++', 'JavaScript', 'MATLAB', 'Bash', 'SQL']
    },
    {
      title: 'Data Science & ML',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Computer Vision']
    },
    {
      title: 'Analysis & Methods',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16l4-8 4 4 4-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: ['CFD', 'FEA', 'Turbulence Modeling', 'Meshing', 'Aeroacoustics', 'Thermal Analysis', 'Structural Analysis', 'Optimization']
    },
    {
      title: 'Web Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      skills: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Git', 'GitHub', 'Postman', 'REST APIs']
    }
  ]

  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ flexShrink: 0, marginBottom: '2rem' }}>
        <div className="kicker">Technical Expertise</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
        <p className="muted text-lg" style={{ maxWidth: '60ch' }}>
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
        paddingBottom: '1rem',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch'
      }}>
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            style={{
              minWidth: '380px',
              maxWidth: '380px',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            className="skill-category-card"
          >
            {/* Animated gradient background */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle at center, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
              animation: 'rotate 20s linear infinite',
              pointerEvents: 'none'
            }} />

            {/* Icon & Title */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid hsl(var(--accent) / 0.3)',
                boxShadow: '0 8px 24px hsl(var(--accent) / 0.2)'
              }}>
                <div style={{ color: 'hsl(var(--accent))' }}>
                  {category.icon}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {category.title}
              </h3>

              <div style={{
                height: '3px',
                width: '60px',
                background: `linear-gradient(90deg, hsl(var(--accent)), transparent)`,
                borderRadius: '999px'
              }} />
            </div>

            {/* Skills Grid */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              flex: 1
            }}>
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="skill-tag-item"
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, hsl(var(--accent) / 0.1), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="skill-tag-bg"
                  />
                  <span style={{ position: 'relative', zIndex: 1 }}>{skill}</span>
                </div>
              ))}
            </div>

            {/* Card Number */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1.5rem',
              fontSize: '4rem',
              fontWeight: '900',
              color: 'rgba(255, 255, 255, 0.03)',
              lineHeight: 1,
              pointerEvents: 'none'
            }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div style={{
        marginTop: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: 'var(--muted)',
        fontSize: '0.85rem'
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Scroll horizontally to explore</span>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .skill-category-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .skill-tag-item:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: hsl(var(--accent) / 0.4) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px hsl(var(--accent) / 0.2);
        }

        .skill-tag-item:hover .skill-tag-bg {
          opacity: 1;
        }

        /* Hide scrollbar but keep functionality */
        div::-webkit-scrollbar {
          height: 8px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  )
}