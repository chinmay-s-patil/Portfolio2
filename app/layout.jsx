import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Full-page portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {children}
      </body>
    </html>
  )
}
