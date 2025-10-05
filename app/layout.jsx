import './globals.css'

export const metadata = {
  title: 'Chinmay Patil — Portfolio',
  description: 'Chinmay Patil — CFD, OpenFOAM, Web Development'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google font (replace with your preferred) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100 font-sans">
        {children}
      </body>
    </html>
  )
}
