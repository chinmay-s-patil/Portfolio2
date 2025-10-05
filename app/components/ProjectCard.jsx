'use client'
export default function ProjectCard({ title, subtitle, description, href }) {
  return (
    <article className="project-card card">
      <div style={{padding:16}}>
        <h4 className="font-semibold">{title}</h4>
        <div className="muted text-sm" style={{marginTop:6}}>{subtitle}</div>
        <p className="muted" style={{marginTop:10}}>{description}</p>
        <div style={{marginTop:12}}>
          <a className="btn bg-white/6" href={href}>View</a>
        </div>
      </div>
    </article>
  )
}
