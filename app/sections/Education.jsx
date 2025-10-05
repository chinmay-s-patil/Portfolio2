export default function Education(){
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <div className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">B.Tech — Mechanical Engineering</h4>
          <p className="text-sm opacity-90">VIT Chennai — 2021</p>
          <p className="mt-2">Relevant coursework: Fluid Mechanics, CFD, Structural Analysis.</p>
        </div>

        <div className="bg-white/5 p-4 rounded">
          <h4 className="font-semibold">Internship — CSIR SERC</h4>
          <p className="text-sm opacity-90">Hands-on labs: Wind engineering, structural testing.</p>
        </div>
      </div>
    </div>
  )
}
