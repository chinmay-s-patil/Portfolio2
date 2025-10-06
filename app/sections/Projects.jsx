import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Drone Propeller Simulation',
      subtitle: 'OpenFOAM · Mesh / AMI',
      description: 'Reverse engineered an S500 propeller geometry and optimized tip design through iterative CFD analysis. Implemented AMI (Arbitrary Mesh Interface) for accurate rotation modeling and detailed vortex shedding examination.',
      href: '#',
      tags: ['CFD', 'Aerodynamics', 'OpenFOAM']
    },
    {
      title: 'Solar Vortex Engine',
      subtitle: 'Multi-region · Radiation',
      description: 'Developed fvDOM radiation-driven natural convection model with carefully tuned mesh regions to accurately capture complex vortex formation and behavior patterns in solar thermal systems.',
      href: '#',
      tags: ['Heat Transfer', 'Radiation', 'Multi-physics']
    },
    {
      title: 'Interactive Portfolio',
      subtitle: 'Next.js · Tailwind',
      description: 'Modern, performant portfolio website with full-page scroll-snap navigation, smooth animations, and responsive design. Built with accessibility and user experience as primary considerations.',
      href: '#',
      tags: ['Web Dev', 'React', 'UI/UX']
    },
    {
      title: 'CFD Data Dashboard',
      subtitle: 'Python · D3.js · WebGL',
      description: 'Real-time visualization dashboard for simulation results with interactive 3D flow field rendering, time-series analysis tools, and automated report generation capabilities.',
      href: '#',
      tags: ['Visualization', 'Python', 'Dashboard']
    },
    {
      title: 'Mesh Quality Analyzer',
      subtitle: 'Python · OpenFOAM',
      description: 'Automated mesh quality assessment tool that analyzes OpenFOAM meshes and provides detailed reports on cell quality metrics, aspect ratios, and skewness with visualization.',
      href: '#',
      tags: ['Automation', 'Meshing', 'Tools']
    },
    {
      title: 'Turbulence Model Comparison',
      subtitle: 'OpenFOAM · Analysis',
      description: 'Comprehensive comparative study of RANS turbulence models (k-ε, k-ω SST, Spalart-Allmaras) for external aerodynamics with validation against experimental data.',
      href: '#',
      tags: ['Turbulence', 'Validation', 'Research']
    }
  ]

  const SCALE = 0.75; // change this value as needed

  return (
    <div className="max-w-6xl mx-auto">
      <div style={{ transform: `scale(${SCALE})`, transformOrigin: 'center top' }}>
        <div className="kicker">Portfolio</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
        <p className="muted text-lg mb-12" style={{ maxWidth: '60ch' }}>
          A showcase of computational fluid dynamics simulations, visualization tools, 
          and web applications that demonstrate my technical capabilities and problem-solving approach.
        </p>

        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/chinmay-s-patil" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white/6 border border-white/10"
            style={{ display: 'inline-flex' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}
