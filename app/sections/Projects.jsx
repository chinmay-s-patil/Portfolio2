import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  const projects = [
    {
      title: 'Drone Propeller Simulation',
      subtitle: 'OpenFOAM · AMI · Mesh refinement',
      description: 'Reverse engineered a propeller, ran multiple simulations to optimize tip geometry and capture vortex shedding characteristics.',
      href: '#'
    },
    {
      title: 'Solar Vortex Engine Sim',
      subtitle: 'OpenFOAM · Radiation',
      description: 'Set up a multi-region solver with radiation and buoyancy to simulate solar vortex behaviors.',
      href: '#'
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Next.js · Tailwind',
      description: 'This site — built to showcase projects, timeline, and media. Mobile-first and fast.',
      href: '#'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Selected Projects</h2>
      <div className="project-grid">
        {projects.map((p,i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
