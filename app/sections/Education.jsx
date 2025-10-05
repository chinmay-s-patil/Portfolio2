export default function Education(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      <div className="timeline">
        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">B.Tech — Mechanical Engineering</h4>
              <div className="muted text-sm">VIT Chennai · 2017 — 2021</div>
              <p className="mt-2 muted">Coursework: Fluid Mechanics, Heat Transfer, Computational Methods.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <h4 className="font-semibold">Internship — CSIR SERC</h4>
            <div className="muted text-sm">Advanced labs exposure in wind engineering and testing.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
