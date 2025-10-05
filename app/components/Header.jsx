'use client'
export default function Header(){
  return (
    <div className="site-header">
      <div className="brand">Chinmay Patil</div>
      <nav className="hidden md:flex gap-3 ml-2">
        <a href="#projects" className="text-sm px-3 py-1 rounded-md hover:bg-white/4">Projects</a>
        <a href="#experience" className="text-sm px-3 py-1 rounded-md hover:bg-white/4">Experience</a>
        <a href="#events" className="text-sm px-3 py-1 rounded-md hover:bg-white/4">Events</a>
      </nav>
    </div>
  )
}
