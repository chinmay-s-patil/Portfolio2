export default function Events(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Events & Workshops</h2>

      <div className="cards-grid">
        <div className="card">
          <h4 className="font-semibold">Advanced CFD Workshop — CSIR SERC</h4>
          <div className="muted text-sm">2022</div>
          <p className="mt-2 muted">Hands-on sessions on meshing, turbulence modeling and validation.</p>
        </div>

        <div className="card">
          <h4 className="font-semibold">Student Aerospace Meet — Poster</h4>
          <div className="muted text-sm">2023</div>
          <p className="mt-2 muted">Presented poster on propeller flow-field visualizations.</p>
        </div>
      </div>
    </div>
  )
}
