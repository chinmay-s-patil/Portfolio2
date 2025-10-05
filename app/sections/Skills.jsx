// app/sections/Skills.jsx
export default function Skills(){
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <strong>Simulation</strong>
          <div className="muted mt-1">OpenFOAM · Fluent · Meshing · Validation</div>
        </div>
        <div className="card">
          <strong>Programming</strong>
          <div className="muted mt-1">Python · NumPy · Pandas · ML</div>
        </div>
        <div className="card">
          <strong>Web</strong>
          <div className="muted mt-1">Next.js · React · Tailwind</div>
        </div>
      </div>
    </div>
  )
}
