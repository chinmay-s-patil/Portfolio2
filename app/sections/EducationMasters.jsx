export default function EducationMasters() {
  const SCALE = 0.75;

  return (
    <div className="max-w-5xl mx-auto">
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top' }}>
        <div className="kicker">Current Studies</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Master's Education</h2>
        <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
          Advanced studies in aerospace engineering, focusing on computational methods 
          and fluid dynamics at one of Europe's leading technical universities.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* Master's Degree Card */}
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.08))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.75rem'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14L12 20" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V9" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11.5V16.5C7 17.6046 9.23858 19 12 19C14.7614 19 17 17.6046 17 16.5V11.5" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.05))',
              border: '1px solid hsl(var(--accent) / 0.2)',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'hsl(var(--accent))',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Currently Pursuing
            </div>

            <h4 className="font-semibold text-2xl mb-3">
              Master of Science
            </h4>
            <div className="text-xl mb-2" style={{ color: 'hsl(var(--accent))' }}>
              Aerospace Engineering
            </div>
            <div className="muted text-base mb-6">
              Technical University of Munich (TUM) · 2021 — Present
            </div>

            <div className="muted mb-6" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
              Pursuing advanced studies in aerospace engineering with specialization in computational 
              fluid dynamics and aerodynamics. Engaging with cutting-edge research in turbulence modeling, 
              high-performance computing, and numerical methods for complex flow simulations.
            </div>

            <div style={{
              padding: '1.25rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginTop: '2rem'
            }}>
              <div className="font-semibold mb-4" style={{ fontSize: '1rem' }}>
                Key Focus Areas
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm muted">
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Advanced Computational Fluid Dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Turbulence Modeling & Simulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>High-Performance Computing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Aerodynamic Design & Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Numerical Methods for PDEs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Experimental Fluid Mechanics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}