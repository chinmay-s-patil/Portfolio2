'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design & CAD',
      skills: ['SolidWorks', 'FreeCAD', 'Geomagic DesignX', 'Parametric Design', 'Assembly Modeling'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'CFD & Simulation',
      skills: ['OpenFOAM', 'Ansys Fluent', 'STAR-CCM+', 'DualSPHysics', 'ParaView', 'Mesh Generation', 'Turbulence Modeling'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="14" r="1" fill="hsl(var(--accent))"/>
        </svg>
      )
    },
    {
      title: 'FEA & Structural',
      skills: ['Abaqus', 'LS-Dyna', 'Comsol', 'Ansys Mechanical', 'Thermal Analysis', 'Dynamic Analysis', 'Fracture Mechanics'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 7L12 12L22 7" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Programming & Scripting',
      skills: ['Python', 'Java', 'Ansys APDL', 'NumPy', 'Pandas', 'Matplotlib', 'Data Processing'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Neural Networks', 'Data Analysis', 'Model Training'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="hsl(var(--accent))" strokeWidth="2"/>
          <path d="M12 1V5M12 19V23M23 12H19M5 12H1" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'Next.js', 'React', 'Tailwind CSS', 'Postman', 'VS Code'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9C14.3 4.5 13.7 4.5 13.3 4.9L8.7 9.5C8.3 9.9 8.3 10.5 8.7 10.9L13.3 15.5C13.7 15.9 14.3 15.9 14.7 15.5C15.1 15.1 15.1 14.5 14.7 14.1L11.1 10.5L14.7 6.9V6.3Z" fill="hsl(var(--accent))"/>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="hsl(var(--accent))" strokeWidth="2"/>
        </svg>
      )
    }
  ]

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ flexShrink: 0, marginBottom: 'clamp(2rem, 4vh, 3rem)' }}>
        <div className="kicker">Technical Expertise</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
        <p className="muted text-lg" style={{ maxWidth: '65ch' }}>
          A comprehensive toolkit spanning computational engineering, data science, and modern web development — 
          built through years of hands-on research and industry projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
        gap: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        flex: 1,
        alignContent: 'start'
      }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="card" style={{
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 2vh, 1.5rem)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Header with Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                fontWeight: '600',
                color: '#fff',
                margin: 0,
                lineHeight: '1.3'
              }}>
                {category.title}
              </h3>
            </div>

            {/* Skills Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(0.5rem, 1vw, 0.65rem)'
            }}>
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    padding: 'clamp(0.4rem, 0.8vw, 0.5rem) clamp(0.75rem, 1.5vw, 0.95rem)',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.8rem, 1.4vw, 0.875rem)',
                    fontWeight: '500',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .card {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  )
}