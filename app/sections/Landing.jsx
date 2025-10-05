export default function Landing(){
  return (
    <div className="split">
      {/* background image (absolute) */}
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="kicker">Hello — I’m</div>
        <h1 className="h1">Chinmay Patil — I design fluid simulations & build interfaces to visualize them.</h1>
        <p className="h-sub">CFD engineer focused on OpenFOAM and visualization. I build reproducible simulation pipelines and fast web UIs so results can be explored by engineers and stakeholders.</p>

        <div className="cta-row">
          <a className="btn bg-white text-slate-900" href="#projects">See projects</a>
          <a className="btn border border-white/10" href="#experience">Experience</a>
        </div>

        <div style={{height:18}} />
        <div className="cards">
          <div className="card">
            <strong>Focus</strong>
            <div className="muted mt-1">CFD | OpenFOAM | Python | Next.js</div>
          </div>
          <div className="card">
            <strong>Availability</strong>
            <div className="muted mt-1">Open to freelance & collaboration</div>
          </div>
        </div>
      </div>

      <aside className="portrait" aria-hidden="false">
        {/* portrait image */}
        <img src="/portrait.jpg" alt="Chinmay Patil portrait" style={{width:'100%', height:'100%', objectFit:'cover'}} />
      </aside>
    </div>
  )
}
