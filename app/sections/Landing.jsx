export default function Landing(){
  return (
    <div className="hero max-w-6xl w-full mx-auto">
      <div className="hero-card">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="badge">CFD Engineer • Web Dev</div>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">Hi — I’m Chinmay.<br/>I build simulations & interfaces.</h1>
            <p className="mt-4 text-lg muted max-w-xl">OpenFOAM, Fluent, Python and modern web tools. I design simulation pipelines, visualize results, and build usable web apps for engineering workflows.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-white text-slate-900 font-medium">See projects</a>
              <a href="#experience" className="px-4 py-2 rounded-md border border-white/10">Experience</a>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="badge">OpenFOAM</span>
              <span className="badge">CFD</span>
              <span className="badge">Next.js</span>
              <span className="badge">Python</span>
            </div>
          </div>
        </div>
      </div>

      <div className="portrait relative">
        {/* decorative blob */}
        <svg className="blob" width="380" height="380" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g transform="translate(300,300)">
            <path fill="hsl(140 60% 60%)" d="M120,-150C150,-110,170,-70,172,-26C174,18,158,66,130,102C102,138,62,162,22,165C-18,168,-58,151,-96,126C-134,101,-170,68,-190,26C-210,-16,-214,-64,-193,-100C-173,-136,-129,-160,-85,-172C-41,-184,4,-184,46,-173C88,-161,116,-190,120,-150Z" opacity="0.12"/>
          </g>
        </svg>

        {/* placeholder avatar (replace with real photo) */}
        <div className="w-64 h-64 bg-gradient-to-tr from-white/5 to-white/3 rounded-md flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-semibold">Chinmay</div>
            <div className="muted text-sm mt-1">CFD & Web</div>
          </div>
        </div>
      </div>
    </div>
  )
}
