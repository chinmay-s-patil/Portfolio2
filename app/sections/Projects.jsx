import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  const projects = [
    {
      title: 'Drone Propeller Simulation',
      subtitle: 'OpenFOAM · Mesh / AMI',
      description: 'Reverse engineered an S500 propeller and iterated tip geometry — used AMI for rotation and examined vortex shedding.',
      href: '#'
    },
    {
      title: 'Solar Vortex Engine',
      subtitle: 'Multi-region · Radiation',
      description: 'Built fvDOM radiation-driven natural convection model and tuned mesh regions to capture vortex behavior.',
      href: '#'
    },
    {
      title: 'Interactive Portfolio',
      subtitle: 'Next.js · Tailwind',
      description: 'This portfolio: focused on legibility, performance, and fullpage UX.',
      href: '#'
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Selected projects</h2>
      <div className="project-grid">
        {projects.map((p,i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  )
}
