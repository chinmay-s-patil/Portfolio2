export default function Landing(){
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Chinmay</h1>
      <p className="text-lg max-w-2xl mx-auto opacity-90">
        I build simulations, software and web experiences. Welcome to my portfolio — scroll to explore.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#projects" className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium">See Projects</a>
        <a href="#intro" className="px-5 py-3 rounded-md border border-white/20">About me</a>
      </div>
    </div>
  )
}
