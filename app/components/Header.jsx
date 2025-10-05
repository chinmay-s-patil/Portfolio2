'use client'
export default function Header(){
  return (
    <header className="site-header" role="banner">
      <div className="brand">Chinmay S Patil</div>
      <nav className="hidden md:flex gap-3 ml-2" aria-label="Primary">
        <a href="#intro" className="text-sm px-3 py-1 rounded-md hover:bg-black/4">About</a>
        <a href="#skills" className="text-sm px-3 py-1 rounded-md hover:bg-black/4">Skills</a>
        <a href="#projects" className="text-sm px-3 py-1 rounded-md hover:bg-black/4">Projects</a>
      </nav>
    </header>
  )
}
