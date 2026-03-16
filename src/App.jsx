import { lazy, Suspense } from 'react'
import FloatingDock from './Navigation/FloatingDock'
import Footer from './components/Footer'

const LandingNormalized      = lazy(() => import('./LandingSection/LandingNormalized'))
const HeroNormalized      = lazy(() => import('./HeroSection/HeroSection'))
const EducationNormalized    = lazy(() => import('./EducationSection/EducationNormalized'))
const ExperienceNormalized   = lazy(() => import('./ExperienceSection/ExperienceNormalized'))
const SkillsNormalized       = lazy(() => import('./SkillsSection/SkillsNormalized'))
const ProjectsNormalized     = lazy(() => import('./ProjectsSection/ProjectsNormalized'))
const OpenFOAMNormalized     = lazy(() => import('./OpenFoamSection/OpenFOAMNormalized'))
const CADNormalized          = lazy(() => import('./CADSection/CADGLTFNormalized'))
const VisualizationNormalized = lazy(() => import('./VisualizationSection/VisualizationNormalized'))
const EventsNormalized       = lazy(() => import('./EventsSection/EventsNormalized'))
const UpcomingNormalized     = lazy(() => import('./UpcomingSection/UpcomingNormalized'))

const NullFallback = () => null

export default function App() {
  return (
    <>
      <FloatingDock />

      <main id="sections" aria-label="Portfolio sections">
        <section id="hero" className="section">
          <Suspense fallback={<NullFallback />}><HeroNormalized /></Suspense>
        </section>
        <section id="landing" className="section">
          <Suspense fallback={<NullFallback />}><LandingNormalized /></Suspense>
        </section>
        <section id="education" className="section">
          <Suspense fallback={<NullFallback />}><EducationNormalized /></Suspense>
        </section>
        <section id="experience" className="section">
          <Suspense fallback={<NullFallback />}><ExperienceNormalized /></Suspense>
        </section>
        <section id="skills" className="section">
          <Suspense fallback={<NullFallback />}><SkillsNormalized /></Suspense>
        </section>
        <section id="projects" className="section">
          <Suspense fallback={<NullFallback />}><ProjectsNormalized /></Suspense>
        </section>
        <section id="openfoam" className="section">
          <Suspense fallback={<NullFallback />}><OpenFOAMNormalized /></Suspense>
        </section>
        <section id="cad" className="section">
          <Suspense fallback={<NullFallback />}><CADNormalized /></Suspense>
        </section>
        <section id="visualization" className="section">
          <Suspense fallback={<NullFallback />}><VisualizationNormalized /></Suspense>
        </section>
        <section id="events" className="section">
          <Suspense fallback={<NullFallback />}><EventsNormalized /></Suspense>
        </section>
        <section id="upcoming" className="section">
          <Suspense fallback={<NullFallback />}><UpcomingNormalized /></Suspense>
        </section>
        <section id="contact" className="section" style={{ minHeight: 'auto', height: 'auto', padding: 0 }}>
          <Footer />
        </section>
      </main>
    </>
  )
}