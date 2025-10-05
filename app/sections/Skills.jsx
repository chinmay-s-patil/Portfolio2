export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Skills</h2>

      <div className="cards">
        <div className="card">
          <h4 className="font-semibold">Design Software</h4>
          <div className="muted mt-2">SolidWorks · FreeCAD · Geomagic DesignX</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Simulation & Modeling</h4>
          <div className="muted mt-2">Ansys · STAR-CCM+ · OpenFOAM · DualSPHysics · COMSOL · LS-DYNA · Abaqus</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Analysis Techniques</h4>
          <div className="muted mt-2">FEA · CFD · Thermal Analysis · Structural Analysis · Aeroacoustics</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Programming & ML</h4>
          <div className="muted mt-2">Python · PyTorch · Machine Learning · Deep Learning · Computer Vision</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Dev Tools</h4>
          <div className="muted mt-2">Git · GitHub · Postman · Next.js · Tailwind</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Other</h4>
          <div className="muted mt-2">Meshing, AMI, Turbulence modeling, ParaView</div>
        </div>
      </div>
    </div>
  )
}
