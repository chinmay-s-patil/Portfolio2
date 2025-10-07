export default function EducationBachelors() {
  const SCALE = 0.75;

  return (
    <div className="max-w-5xl mx-auto">
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top' }}>
        <div className="kicker">Foundation</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Bachelor's Education</h2>
        <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
          Strong foundation in mechanical engineering with specialized focus on 
          fluid mechanics and computational methods.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {/* Bachelor's Degree Card */}
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

            <h4 className="font-semibold text-2xl mb-3">
              Bachelor of Technology
            </h4>
            <div className="text-xl mb-2" style={{ color: 'hsl(var(--accent))' }}>
              Mechanical Engineering
            </div>
            <div className="muted text-base mb-6">
              VIT Chennai · 2017 — 2021
            </div>

            <div className="muted mb-6" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
              Completed comprehensive undergraduate program in mechanical engineering, developing 
              strong fundamentals in thermodynamics, fluid mechanics, and computational methods. 
              Gained hands-on experience through laboratory work, projects, and industry internships.
            </div>

            <div style={{
              padding: '1.25rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginTop: '2rem'
            }}>
              <div className="font-semibold mb-4" style={{ fontSize: '1rem' }}>
                Relevant Coursework
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm muted">
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
                <div className="flex items-center gap-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>•</span>
                  <span>Machine Design & CAD</span>
                </div>
              </div>
            </div>

            {/* Achievements/Highlights (optional) */}
            <div style={{
              padding: '1rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.08), hsl(var(--accent) / 0.02))',
              border: '1px solid hsl(var(--accent) / 0.15)',
              marginTop: '1.5rem'
            }}>
              <div className="font-semibold mb-2" style={{ fontSize: '0.9rem', color: 'hsl(var(--accent))' }}>
                Academic Highlights
              </div>
              <div className="text-sm muted" style={{ lineHeight: '1.7' }}>
                Developed strong foundation in engineering fundamentals, completed multiple CFD projects, 
                and gained practical experience through CSIR SERC internship focusing on wind engineering.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}