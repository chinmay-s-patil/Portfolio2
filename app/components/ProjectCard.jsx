'use client'
export default function ProjectCard({ title, subtitle, description, href }) {
  return (
    <article className="project-card card">
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="text-sm muted">{subtitle}</div>
        <p className="mt-3 text-sm leading-relaxed">{description}</p>
        <div className="mt-4">
          <a href={href || '#'} className="inline-block px-3 py-2 rounded-md bg-white/6 hover:bg-white/8 text-sm">View</a>
        </div>
      </div>
    </article>
  )
}
