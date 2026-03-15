import { lazy, Suspense } from 'react'
import NavDots from './Navigation/NavDots'
import HeaderNormalized from './components/HeaderNormalized'
import Footer from './components/Footer'

// React.lazy replaces next/dynamic - same lazy loading, no Next.js needed
const LandingNormalized      = lazy(() => import('./LandingSection/LandingNormalized'))
const EducationNormalized    = lazy(() => import('./EducationSection/EducationNormalized'))
const ExperienceNormalized   = lazy(() => import('./ExperienceSection/ExperienceNormalized'))
const SkillsNormalized       = lazy(() => import('./SkillsSection/SkillsNormalized'))
const ProjectsNormalized     = lazy(() => import('./ProjectsSection/ProjectsNormalized'))
const OpenFOAMNormalized     = lazy(() => import('./OpenFoamSection/OpenFOAMNormalized'))
const CADNormalized          = lazy(() => import('./CADSection/CADGLTFNormalized'))
const VisualizationNormalized = lazy(() => import('./VisualizationSection/VisualizationNormalized'))
const EventsNormalized       = lazy(() => import('./EventsSection/EventsNormalized'))
const UpcomingNormalized     = lazy(() => import('./UpcomingSection/UpcomingNormalized'))

const sectionsMeta = [
  { id: 'landing',       label: 'Landing' },
  { id: 'education',     label: 'Education' },
  { id: 'experience',    label: 'Experience' },
  { id: 'skills',        label: 'Skills' },
  { id: 'projects',      label: 'Projects' },
  { id: 'openfoam',      label: 'OpenFOAM' },
  { id: 'cad',           label: 'CAD' },
  { id: 'visualization', label: 'Visualization' },
  { id: 'events',        label: 'Events' },
  { id: 'upcoming',      label: 'Upcoming' },
]

// Suspense fallback - null means no loading spinner (same as your Next.js loading: () => null)
const NullFallback = () => null

export default function App() {
  return (
    <>
      <HeaderNormalized />
      <NavDots sections={sectionsMeta} />

      <main id="sections" aria-label="Portfolio sections">
        <section id="landing" className="section">
          <Suspense fallback={<NullFallback />}>
            <LandingNormalized />
          </Suspense>
        </section>

        <section id="education" className="section">
          <Suspense fallback={<NullFallback />}>
            <EducationNormalized />
          </Suspense>
        </section>

        <section id="experience" className="section">
          <Suspense fallback={<NullFallback />}>
            <ExperienceNormalized />
          </Suspense>
        </section>

        <section id="skills" className="section">
          <Suspense fallback={<NullFallback />}>
            <SkillsNormalized />
          </Suspense>
        </section>

        <section id="projects" className="section">
          <Suspense fallback={<NullFallback />}>
            <ProjectsNormalized />
          </Suspense>
        </section>

        <section id="openfoam" className="section">
          <Suspense fallback={<NullFallback />}>
            <OpenFOAMNormalized />
          </Suspense>
        </section>

        <section id="cad" className="section">
          <Suspense fallback={<NullFallback />}>
            <CADNormalized />
          </Suspense>
        </section>

        <section id="visualization" className="section">
          <Suspense fallback={<NullFallback />}>
            <VisualizationNormalized />
          </Suspense>
        </section>

        <section id="events" className="section">
          <Suspense fallback={<NullFallback />}>
            <EventsNormalized />
          </Suspense>
        </section>

        <section id="upcoming" className="section">
          <Suspense fallback={<NullFallback />}>
            <UpcomingNormalized />
          </Suspense>
        </section>

        <section id="contact" className="section" style={{ minHeight: 'auto', height: 'auto', padding: 0 }}>
          <Footer />
        </section>
      </main>
    </>
  )
}
