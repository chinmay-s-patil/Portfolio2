// app/page.jsx
import './globals.css'
import NavDots from './components/NavDots'
import Header from './components/Header'
import SectionWrapper from './components/SectionWrapper'

import Landing from './sections/Landing'
import Intro from './sections/Intro'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Events from './sections/Events'

// Only metadata goes to client components (no functions)
const sectionsMeta = [
  { id: 'home', label: 'Home' },
  { id: 'intro', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'events', label: 'Events' }
]

// Map id -> server component (kept on the server)
const sectionComponents = {
  home: Landing,
  intro: Intro,
  education: Education,
  experience: Experience,
  projects: Projects,
  events: Events
}

export default function Home() {
  return (
    <>
      <Header />
      {/* pass only plain data (no functions) */}
      <NavDots sections={sectionsMeta} />
      <main id="sections" aria-label="Full page sections">
        {sectionsMeta.map((s, idx) => {
          const Comp = sectionComponents[s.id]
          return (
            <SectionWrapper key={s.id} id={s.id} index={idx}>
              {/* render the server component here (no function is passed as prop) */}
              <Comp />
            </SectionWrapper>
          )
        })}
      </main>
    </>
  )
}
