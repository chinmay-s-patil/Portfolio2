export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Chinmay Patil — Built with ❤️ & Next.js</div>
      <div className="mt-2 muted text-sm">Email: <a className="underline" href="mailto:email@example.com">email@example.com</a></div>
    </footer>
  )
}
