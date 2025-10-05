export default function Intro(){
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="muted text-lg leading-relaxed">I’m a mechanical engineer turned web developer who loves visualizing complex data. I build CFD simulations, process results in Python, and present them via web dashboards so non-experts can explore the data.</p>

      <div className="mt-8 cards-grid">
        <div className="card">
          <h3 className="font-semibold">What I do</h3>
          <p className="mt-2 muted">CFD simulations, meshing, turbulence modelling, post-processing and web visualization.</p>
        </div>

        <div className="card">
          <h3 className="font-semibold">Tools</h3>
          <p className="mt-2 muted">OpenFOAM · Ansys Fluent · Python · NumPy/Pandas · Next.js · Tailwind</p>
        </div>
      </div>
    </div>
  )
}
