// app/page.jsx
import NavDots from './components/NavDots'
import Header from './components/Header'
import SectionWrapper from './components/SectionWrapper'

import Landing from './sections/Landing'
import About from './sections/Intro'      // About === Intro
import Skills from './sections/Skills'   // new small section
import Experience from './sections/Experience' // special behavior
import Projects from './sections/Projects'
import Contact from './sections/Contact' // new contact section
import Footer from './components/Footer'

const sectionsMeta = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const sectionComponents = {
  home: Landing,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  contact: Contact
}

export default function Home() {
  return (
    <>
      <Header />
      <NavDots sections={sectionsMeta} />
      <main id="sections" aria-label="Full page sections">
        {sectionsMeta.map((s, idx) => {
          const Comp = sectionComponents[s.id]
          return (
            <SectionWrapper key={s.id} id={s.id} index={idx}>
              <Comp />
            </SectionWrapper>
          )
        })}
      </main>
      <Footer />
    </>
  )
}
