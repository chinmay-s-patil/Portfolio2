export default function Experience(){
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>

      <div className="space-y-4">
        <div className="card">
          <h4 className="font-semibold">CFD Engineer — Example Co</h4>
          <div className="muted text-sm">2023 — Present</div>
          <ul className="mt-2 list-disc ml-5 muted">
            <li>Designed simulation workflows in OpenFOAM and Fluent.</li>
            <li>Built Python pipelines for batch post-processing and plotting.</li>
          </ul>
        </div>

        <div className="card">
          <h4 className="font-semibold">Web & Visualization — Personal Projects</h4>
          <div className="muted text-sm">2021 — Present</div>
          <ul className="mt-2 list-disc ml-5 muted">
            <li>Built portfolio sites and dashboards with Next.js.</li>
            <li>Linked data visualizations to CFD outputs (ParaView exports).</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
