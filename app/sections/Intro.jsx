export default function Intro(){
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed max-w-3xl">
        Short professional intro. Example:
        I’m a CFD & web developer who loves building tools and visualizations that make complex problems intuitive.
        I use OpenFOAM, Fluent, React/Next.js and Python.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/4 p-4 rounded-lg">
          <h3 className="font-semibold">Skills</h3>
          <ul className="mt-2 list-disc list-inside">
            <li>CFD & OpenFOAM</li>
            <li>React / Next.js</li>
            <li>Python, data processing</li>
          </ul>
        </div>

        <div className="bg-white/4 p-4 rounded-lg">
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2">email@example.com • GitHub / LinkedIn</p>
        </div>
      </div>
    </div>
  )
}
