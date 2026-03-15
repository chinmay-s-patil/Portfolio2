import dynamic from 'next/dynamic'
import NavDots from './Navigation/NavDots'
import HeaderNormalized from './components/HeaderNormalized'
import Footer from './components/Footer'

// Lazy load heavy sections to reduce initial bundle size
const LandingNormalized = dynamic(() => import('./LandingSection/LandingNormalized'), {
  loading: () => null,
})


const EventsNormalized = dynamic(() => import('./EventsSection/EventsNormalized'), {
  loading: () => null,
})


const sectionsMeta = [
  { id: 'landing', label: 'Landing' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'openfoam', label: 'OpenFOAM' },
//  { id: 'cad', label: 'CAD' },
  { id: 'visualization', label: 'Visualization' },
  { id: 'events', label: 'Events' },
  // { id: 'upcoming', label: 'Upcoming' },
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
        
        <section id="events" className="section">
          <EventsNormalized />
        </section>
        
        <section id="contact" className="section" style={{ minHeight: 'auto', height: 'auto', padding: 0 }}>
          <Footer />
        </section>
      </main>
    </>
  )
}