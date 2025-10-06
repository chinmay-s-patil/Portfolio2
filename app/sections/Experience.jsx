export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="kicker">Career Journey</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
      <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
        My career combines hands-on CFD engineering with modern software development, 
        creating powerful tools that bridge simulation and visualization.
      </p>

      <div className="timeline">
        <div className="card">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-xl mb-2">CFD Engineer</h4>
              <div className="muted text-sm flex items-center gap-2">
                <span style={{ fontWeight: '600' }}>Example Co</span>
                <span style={{ opacity: 0.5 }}>•</span>
                <span>2023 — Present</span>
              </div>
            </div>
            <div style={{
              padding: '0.4rem 1rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15), hsl(var(--accent) / 0.05))',
              border: '1px solid hsl(var(--accent) / 0.2)',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'hsl(var(--accent))'
            }}>
              Current Role
            </div>
          </div>
          
          <ul className="space-y-3 muted" style={{ lineHeight: '1.7' }}>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Architected and deployed simulation workflows using OpenFOAM and Ansys Fluent, reducing analysis time by 40% through automation and optimization</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Developed Python-based post-processing pipelines for batch analysis, automated report generation, and interactive data visualization</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Implemented quality control systems for mesh generation with automated validation checks and detailed metric reporting</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Collaborated with cross-functional teams to translate complex simulation results into actionable engineering insights</span>
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['OpenFOAM', 'Fluent', 'Python', 'HPC', 'Automation'].map(skill => (
              <span key={skill} style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="mb-4">
            <h4 className="font-semibold text-xl mb-2">Web Development & Visualization</h4>
            <div className="muted text-sm flex items-center gap-2">
              <span style={{ fontWeight: '600' }}>Personal Projects & Freelance</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>2021 — Present</span>
            </div>
          </div>
          
          <ul className="space-y-3 muted" style={{ lineHeight: '1.7' }}>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Built modern portfolio sites and interactive dashboards using Next.js, React, and Tailwind CSS with focus on performance and UX</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Created web-based visualization tools that integrate seamlessly with CFD workflows, featuring real-time 3D rendering and data exploration</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Developed custom data pipelines connecting ParaView exports to interactive web interfaces for stakeholder presentations</span>
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Next.js', 'React', 'Three.js', 'D3.js', 'Tailwind'].map(skill => (
              <span key={skill} style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--muted)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="mb-4">
            <h4 className="font-semibold text-xl mb-2">Engineering Intern</h4>
            <div className="muted text-sm flex items-center gap-2">
              <span style={{ fontWeight: '600' }}>CSIR SERC</span>
              <span style={{ opacity: 0.5 }}>•</span>
              <span>2020</span>
            </div>
          </div>
          
          <ul className="space-y-3 muted" style={{ lineHeight: '1.7' }}>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Gained hands-on experience in advanced wind engineering laboratories and experimental testing facilities</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Assisted in validation studies comparing CFD predictions with wind tunnel measurements</span>
            </li>
            <li className="flex gap-3">
              <span style={{ color: 'hsl(var(--accent))', marginTop: '0.25rem' }}>▹</span>
              <span>Developed foundational understanding of turbulence modeling and experimental fluid mechanics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}