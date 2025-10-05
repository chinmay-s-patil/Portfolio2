export default function Experience(){
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>

      <div className="space-y-4">
        <div className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">CFD Engineer — Example Co</h4>
          <p className="text-sm opacity-90">2023 — Present</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Ran simulations in OpenFOAM and Fluent for aerodynamics projects.</li>
            <li>Built pre- and post-processing pipelines in Python.</li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">Web Developer — Personal Projects</h4>
          <p className="text-sm opacity-90">2021 — Present</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Built portfolio sites, visualization dashboards using Next.js + React.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
