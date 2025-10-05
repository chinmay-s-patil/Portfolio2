export default function Projects(){
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <article className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">Drone Propeller Simulation</h4>
          <p className="text-sm opacity-90">OpenFOAM — Mesh, AMI, turbulence modeling</p>
          <p className="mt-2">Summary of what you did & results. Add screenshots or video links below.</p>
        </article>

        <article className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">Portfolio Website</h4>
          <p className="text-sm opacity-90">Next.js + Tailwind</p>
        </article>
      </div>
    </div>
  )
}
