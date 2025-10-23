'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design Software',
      icon: '🎨',
      skills: ['SolidWorks', 'FreeCAD', 'Geomagic DesignX'],
      color: '#4ade80'
    },
    {
      title: 'Simulation & Modeling',
      icon: '📊',
      skills: ['Ansys', 'STAR-CCM+', 'OpenFOAM', 'DualSPHysics', 'Comsol', 'LS-Dyna', 'Abaqus'],
      color: '#60a5fa'
    },
    {
      title: 'Analysis Techniques',
      icon: '⚙️',
      skills: ['FEA', 'CFD', 'Thermal Analysis', 'Structural Analysis', 'Dynamic Analysis', 'Vibration Analysis', 'Aeroacoustics'],
      color: '#f59e0b'
    },
    {
      title: 'Programming Languages',
      icon: '</>', 
      skills: ['Python', 'Java', 'Ansys APDL'],
      color: '#a78bfa'
    },
    {
      title: 'AI/ML & Data Science',
      icon: '🧠',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Analysis', 'PyTorch'],
      color: '#ec4899'
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Postman'],
      color: '#14b8a6'
    }
  ]

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      padding: 'clamp(1rem, 2vw, 2rem)',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: 'clamp(2rem, 4vh, 3rem)',
        flexShrink: 0
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: '700', 
          marginBottom: '1rem', 
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          backgroundClip: 'text', 
          lineHeight: '1.1' 
        }}>
          Skills
        </h2>
        <div style={{ 
          width: '80px', 
          height: '4px', 
          background: 'linear-gradient(90deg, #8b5cf6, transparent)', 
          margin: '0 auto', 
          borderRadius: '2px' 
        }} />
      </div>

      {/* Skills Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
        gap: 'clamp(1.25rem, 2.5vw, 2rem)',
        width: '100%'
      }}>
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            style={{ 
              background: 'rgba(20, 25, 35, 0.6)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: '20px', 
              padding: 'clamp(1.75rem, 3vw, 2.5rem)', 
              transition: 'all 0.3s ease', 
              position: 'relative', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }} 
            className="skill-category-card"
          >
            
            {/* Icon and Title */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: 'clamp(1.25rem, 2.5vh, 1.75rem)',
              flexShrink: 0
            }}>
              <div style={{ 
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', 
                width: 'clamp(52px, 8vw, 64px)', 
                height: 'clamp(52px, 8vw, 64px)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: 'rgba(255, 255, 255, 0.05)', 
                borderRadius: '14px', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                flexShrink: 0
              }}>
                {category.icon}
              </div>
              <h3 style={{ 
                fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', 
                fontWeight: '700', 
                color: '#fff', 
                margin: '0',
                lineHeight: '1.3'
              }}>
                {category.title}
              </h3>
            </div>

            {/* Skills Tags */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              flex: 1,
              alignContent: 'flex-start'
            }}>
              {category.skills.map((skill, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: 'clamp(0.5rem, 1vw, 0.65rem) clamp(0.875rem, 1.5vw, 1.125rem)', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '10px', 
                    fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)', 
                    fontWeight: '500', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    transition: 'all 0.2s ease', 
                    cursor: 'default',
                    whiteSpace: 'nowrap'
                  }} 
                  className="skill-tag-simple"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skill-category-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
          background: rgba(25, 30, 40, 0.7);
        }

        .skill-tag-simple:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px) scale(1.03);
        }

        @media (min-width: 1200px) {
          .skill-category-card:nth-child(1),
          .skill-category-card:nth-child(2),
          .skill-category-card:nth-child(3) {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .skill-category-card {
            min-height: 240px;
          }
        }
      `}</style>
    </div>
  )
}