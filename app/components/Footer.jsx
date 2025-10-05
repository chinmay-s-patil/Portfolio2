'use client'
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-left">
            <div className="font-semibold">Chinmay S Patil</div>
            <div className="muted text-sm">Mechanical Engineer · CFD & Web</div>
          </div>

          <div className="flex gap-4 items-center">
            {/* Replace hrefs with your real links */}
            <a aria-label="GitHub" href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="muted hover:text-black">
              {/* GitHub SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.11-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.73 0-1.27.45-2.31 1.18-3.12-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.19a10.97 10.97 0 0 1 5.73 0c2.19-1.5 3.15-1.19 3.15-1.19.62 1.57.23 2.73.11 3.02.74.81 1.18 1.85 1.18 3.12 0 4.46-2.7 5.44-5.27 5.72.41.36.77 1.07.77 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.21.68.8.56C20.71 21.4 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>

            <a aria-label="LinkedIn" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="muted hover:text-black">
              {/* LinkedIn SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76 0-.98.78-1.76 1.75-1.76s1.75.78 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.7h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.59v5.6z"/></svg>
            </a>

            <a aria-label="Linktree" href="https://linktr.ee/yourusername" target="_blank" rel="noreferrer" className="muted hover:text-black">
              {/* link icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h3v2h-3A2.1 2.1 0 0 0 4 12a2.1 2.1 0 0 0 2.1 2.1H9v2H6a4.1 4.1 0 0 1-2.1-7.8zM8 10h8v4H8v-4zm9 6h-3v-2h3A2.1 2.1 0 0 0 19.1 12 2.1 2.1 0 0 0 17 9.9h-3v-2h3a4.1 4.1 0 1 1 0 8z"/></svg>
            </a>

            <a aria-label="Instagram" href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="muted hover:text-black">
              {/* Instagram SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
            </a>
          </div>
        </div>

        {/* contact list */}
        <div className="mt-6 muted text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
          <div><strong>Email:</strong> <a className="underline" href="mailto:email@example.com">email@example.com</a></div>
          <div><strong>Phone:</strong> <a className="underline" href="tel:+911234567890">+91 12345 67890</a></div>
          <div><strong>Location:</strong> Chennai, India</div>
          <div><strong>More:</strong> <a className="underline" href="https://linktr.ee/yourusername" target="_blank" rel="noreferrer">Linktree</a></div>
        </div>

        <div className="mt-6 muted text-sm">© {new Date().getFullYear()} Chinmay S Patil. All rights reserved.</div>
      </div>
    </footer>
  )
}
