export default function ProjectCard({ title, period, learnings = [], onClick }) {
  return (
    <article className="project-card card group">
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: '1rem', flex: '0 0 auto' }}>
          <h4 className="font-semibold text-xl mb-3 group-hover:text-[hsl(var(--accent))] transition-colors">
            {title}
          </h4>
          <div 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--muted)',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {period}
          </div>
        </div>

        {/* Learnings */}
        <div style={{ flex: '1 1 auto', marginBottom: '1.25rem' }}>
          <div style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Key Learnings
          </div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {learnings.slice(0, 3).map((learning, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.75)'
                }}
              >
                <span style={{ color: 'hsl(var(--accent))', flexShrink: 0, marginTop: '0.15rem' }}>•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div style={{ flex: '0 0 auto' }}>
          <button 
            className="btn bg-white/6 border border-white/10" 
            onClick={onClick}
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '0.9rem',
              padding: '0.75rem 1.5rem'
            }}
          >
            <span>View Details</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ transition: 'transform 0.2s ease' }}
              className="group-hover:translate-x-1"
            >
              <path 
                d="M6 3L11 8L6 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}