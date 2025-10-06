export default function Education() {
  const SCALE = 0.75; // change this value as needed

  return (
    <div className="max-w-5xl mx-auto">
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top' }}>
        <div className="kicker">Academic Background</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Training</h2>
        <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
          Strong foundation in mechanical engineering with specialized focus on 
          fluid mechanics and computational methods.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="card" style={{ height: 'fit-content' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14L12 20" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V9" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11.5V16.5C7 17.6046 9.23858 19 12 19C14.7614 19 17 17.6046 17 16.5V11.5" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h4 className="font-semibold text-xl mb-2">
              Bachelor of Technology
            </h4>
            <div className="text-lg mb-1" style={{ color: 'hsl(var(--accent))' }}>
              Mechanical Engineering
            </div>
            <div className="muted text-sm mb-4">
              VIT Chennai · 2017 — 2021
            </div>

            <div style={{
              padding: '1rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginTop: '1.5rem'
            }}>
              <div className="font-semibold mb-3" style={{ fontSize: '0.9rem' }}>
                Relevant Coursework
              </div>
              <div className="grid grid-cols-1 gap-2 text-sm muted">
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Fluid Mechanics & Dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Heat & Mass Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Computational Methods in Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Thermodynamics & Energy Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Numerical Analysis & Programming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-6">
            <div className="card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="hsl(var(--accent))" strokeWidth="2"/>
                  <path d="M7 8H17M7 12H17M7 16H13" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Advanced CFD Workshop</h4>
              <div className="muted text-sm mb-3">CSIR SERC · 2022</div>
              <p className="muted text-sm" style={{ lineHeight: '1.6' }}>
                Intensive hands-on training in advanced meshing techniques, turbulence 
                modeling strategies, and validation methodologies for industrial CFD applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
