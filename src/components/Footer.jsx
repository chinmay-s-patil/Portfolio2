'use client'

export default function Footer({ onContactOpen }) {
  return (
    <footer className="site-footer" style={{ padding: '1rem 1rem 0.5rem' }}>
      <div style={{ maxWidth: '90%', margin: '0 auto' }}>

        {/* CTA section */}
        <div style={{
          textAlign: 'center',
          padding: '2rem 0 2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '1.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Have a project in mind?
          </p>
          <button
            onClick={onContactOpen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px',
              color: '#fff',
              fontSize: '14px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              background: 'transparent',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            Get in touch
          </button>
        </div>

        {/* Main content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '3rem',
          marginBottom: '0.5rem',
          alignItems: 'start',
          justifyItems: 'center',
        }}>
          {/* Left: About */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h4 className="font-semibold mb-3 text-lg">Chinmay Patil</h4>
            <p className="muted text-sm" style={{ lineHeight: '1.7', maxWidth: '45ch' }}>
              CFD Engineer & Web Developer specializing in fluid simulations and interactive data visualization.
              Bridging computational engineering with modern web technologies.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }} aria-label="quick links">
              <a href="#intro" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">About Me</a>
              <a href="#education" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">Education</a>
              <a href="#experience" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">Experience</a>
              <a href="#projects" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">Projects</a>
              <a href="#events" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">Events</a>
            </nav>
          </div>

          {/* Right: Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="https://github.com/chinmay-s-patil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all text-sm"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chinmay-shashikant-patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@ChinDoesSims"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all text-sm"
                aria-label="Twitter"
              >
                Youtube
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a href="mailto:patil.chinmay3031@gmail.com" className="muted text-sm hover:text-[hsl(var(--accent))] transition-colors">
                patil.chinmay3031@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Chinmay Patil. All rights reserved.
          </div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Built with Vite, React & ❤️
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            footer > div > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            footer > div > div:last-child {
              flex-direction: column !important;
              text-align: center !important;
            }
          }
        `}</style>
      </div>
    </footer>
  )
}