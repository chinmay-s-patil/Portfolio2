'use client'

export default function ProjectCard({ title, subtitle, description, href, tags = [] }) {
  return (
    <article className="project-card card group">
      <div style={{ padding: '1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '1rem' }}>
          <h4 className="font-semibold text-xl mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
            {title}
          </h4>
          <div 
            className="muted text-sm" 
            style={{ 
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              letterSpacing: '0.02em'
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Description */}
        <p 
          className="muted" 
          style={{ 
            marginTop: '1rem',
            lineHeight: '1.7',
            fontSize: '0.95rem'
          }}
        >
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div style={{ 
            marginTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'var(--muted)',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <div style={{ marginTop: '1.5rem' }}>
          <a 
            className="btn bg-white/6 border border-white/10" 
            href={href}
            style={{
              width: '100%',
              justifyContent: 'center',
              fontSize: '0.9rem',
              padding: '0.75rem 1.5rem'
            }}
          >
            <span>View Project</span>
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
          </a>
        </div>
      </div>
    </article>
  )
}