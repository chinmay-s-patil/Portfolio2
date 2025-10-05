// app/sections/Contact.jsx
export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Let's connect</h2>
      <p className="muted mb-6">I'm open to collaborate — reach out via email or LinkedIn.</p>
      <div>
        <a href="mailto:email@example.com" className="btn bg-white text-slate-900 mr-3">Email me</a>
        <a href="https://linkedin.com" className="btn border border-white/10">LinkedIn</a>
      </div>
    </div>
  )
}
