// app/page.jsx
import NavDots from './Navigation/NavDots'
import HeaderNormalized from './components/HeaderNormalized'
import Footer from './components/Footer'
import LandingNormalized from './LandingSection/LandingNormalized'

const sectionsMeta = [
  { id: 'landing', label: 'Landing' },
]

export default function Page() {
  return (
    <>
      <HeaderNormalized />
      <NavDots sections={sectionsMeta} />
      
      <main id="sections" aria-label="Portfolio sections">
        <section id="landing" className="section">
          <LandingNormalized />
        </section>
        
        <section id="contact" className="section" style={{ minHeight: 'auto', height: 'auto', padding: 0 }}>
          <Footer />
        </section>
      </main>
    </>
  )
}