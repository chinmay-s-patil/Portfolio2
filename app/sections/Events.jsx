export default function Events() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="kicker">Conferences & Workshops</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Events & Presentations</h2>
      <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
        Active participation in technical conferences, workshops, and knowledge-sharing events 
        within the CFD and engineering community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="13" rx="2" stroke="hsl(var(--accent))" strokeWidth="2"/>
              <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="hsl(var(--accent))" strokeWidth="2"/>
              <path d="M3 10H21" stroke="hsl(var(--accent))" strokeWidth="2"/>
            </svg>
          </div>
          
          <h4 className="font-semibold text-xl mb-2">Advanced CFD Workshop</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="muted text-sm">CSIR SERC</span>
            <span className="muted" style={{ opacity: 0.5 }}>•</span>
            <span className="muted text-sm">2022</span>
          </div>
          
          <p className="muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
            Participated in intensive hands-on sessions covering advanced meshing strategies, 
            turbulence modeling best practices, and comprehensive validation methodologies 
            for industrial CFD applications.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Meshing', 'Turbulence', 'Validation'].map(tag => (
              <span key={tag} style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11L12 14L22 4" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h4 className="font-semibold text-xl mb-2">Student Aerospace Meet</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="muted text-sm">Poster Presentation</span>
            <span className="muted" style={{ opacity: 0.5 }}>•</span>
            <span className="muted text-sm">2023</span>
          </div>
          
          <p className="muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
            Presented research poster on propeller flow-field visualizations using CFD, 
            showcasing innovative approaches to vortex structure analysis and wake 
            characterization in rotorcraft applications.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Aerodynamics', 'Visualization', 'Research'].map(tag => (
              <span key={tag} style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="hsl(var(--accent))" strokeWidth="2"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h4 className="font-semibold text-xl mb-2">OpenFOAM User Conference</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="muted text-sm">Attendee</span>
            <span className="muted" style={{ opacity: 0.5 }}>•</span>
            <span className="muted text-sm">2023</span>
          </div>
          
          <p className="muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
            Attended technical sessions and networking events focused on latest developments 
            in OpenFOAM, including new solver implementations, parallel computing strategies, 
            and community best practices.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['OpenFOAM', 'Community', 'HPC'].map(tag => (
              <span key={tag} style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem'
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="hsl(var(--accent))" strokeWidth="2"/>
              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="hsl(var(--accent))" strokeWidth="2"/>
            </svg>
          </div>
          
          <h4 className="font-semibold text-xl mb-2">Web Development Meetup</h4>
          <div className="flex items-center gap-2 mb-3">
            <span className="muted text-sm">Speaker</span>
            <span className="muted" style={{ opacity: 0.5 }}>•</span>
            <span className="muted text-sm">2024</span>
          </div>
          
          <p className="muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
            Presented talk on "Bridging Engineering and Web: Building Interactive CFD Dashboards" 
            covering techniques for integrating scientific computing with modern web frameworks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Web Dev', 'Visualization', 'Speaking'].map(tag => (
              <span key={tag} style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(20, 255, 200, 0.05), rgba(20, 255, 200, 0.02))',
        border: '1px solid rgba(20, 255, 200, 0.15)',
        textAlign: 'center'
      }}>
        <h3 className="font-semibold text-xl mb-3">Interested in Collaboration?</h3>
        <p className="muted mb-6" style={{ maxWidth: '50ch', margin: '0 auto 1.5rem' }}>
          I'm always open to speaking opportunities, workshop participation, 
          and collaborative projects in CFD and visualization.
        </p>
        <a 
          href="mailto:email@example.com" 
          className="btn bg-white/6 border border-white/10"
          style={{ display: 'inline-flex' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  )
}