'use client'

import { useState, useEffect, useRef } from 'react'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const experiences = [
    {
      year: 'Oct 2024',
      role: 'Senior CFD Engineer',
      company: 'AeroTech Solutions',
      type: 'Full-time',
      period: 'Jan 2024 — Present',
      description:
        'Leading advanced simulation projects for aerospace applications, specializing in turbomachinery and external aerodynamics. Architecting automated workflows that reduced analysis time by 60%.',
      achievements: [
        'Implemented machine learning-enhanced mesh adaptation',
        'Developed custom OpenFOAM solvers for specialized flows',
        'Led team of 3 engineers on major aircraft component analysis'
      ],
      skills: ['OpenFOAM', 'Python', 'ML Integration', 'Team Leadership'],
      color: 'hsl(140, 70%, 60%)',
      images: [
        '/experience/2024/img1.jpg',
        '/experience/2024/img2.jpg',
        '/experience/2024/img3.jpg'
      ]
    },
    {
      year: '2023',
      role: 'CFD Engineer',
      company: 'FluidDynamics Corp',
      type: 'Full-time',
      period: 'Mar 2023 — Dec 2023',
      description:
        'Executed complex multi-physics simulations for industrial clients across automotive, energy, and HVAC sectors. Built automated post-processing pipelines and interactive dashboards.',
      achievements: [
        'Delivered 15+ successful client projects',
        'Created Python toolkit adopted company-wide',
        'Published technical blog posts on CFD best practices'
      ],
      skills: ['Ansys Fluent', 'Python', 'Automation', 'Consulting'],
      color: 'hsl(160, 65%, 55%)',
      images: [
        '/experience/2023/img1.jpg',
        '/experience/2023/img2.jpg',
        '/experience/2023/img3.jpg'
      ]
    },
    {
      year: '2022',
      role: 'Graduate Research Assistant',
      company: 'Technical University of Munich',
      type: 'Part-time',
      period: 'Oct 2022 — Feb 2023',
      description:
        'Conducted cutting-edge research in aeroacoustics and flow-induced noise. Developed novel methodologies for noise prediction in complex geometries using hybrid CFD-CAA approaches.',
      achievements: [
        'Co-authored 2 conference papers',
        'Validated simulations against wind tunnel data',
        'Contributed to open-source acoustic post-processing tools'
      ],
      skills: ['Research', 'Aeroacoustics', 'FW-H', 'Publication'],
      color: 'hsl(180, 60%, 50%)',
      images: [
        '/experience/2022/img1.jpg',
        '/experience/2022/img2.jpg',
        '/experience/2022/img3.jpg'
      ]
    },
    {
      year: '2021',
      role: 'Web Developer (Freelance)',
      company: 'Self-Employed',
      type: 'Freelance',
      period: '2021 — Present',
      description:
        'Building modern web applications and visualization dashboards for engineering firms. Specializing in interactive 3D data visualization and responsive design for technical audiences.',
      achievements: [
        'Delivered 10+ client websites and dashboards',
        'Created CFD visualization tools with Three.js',
        'Integrated real-time simulation data displays'
      ],
      skills: ['Next.js', 'React', 'Three.js', 'D3.js'],
      color: 'hsl(200, 55%, 45%)',
      images: [
        '/experience/2021/img1.jpg',
        '/experience/2021/img2.jpg',
        '/experience/2021/img3.jpg'
      ]
    },
    {
      year: '2020',
      role: 'Engineering Intern',
      company: 'CSIR SERC',
      type: 'Internship',
      period: 'Summer 2020',
      description:
        'Gained foundational experience in wind engineering and experimental fluid mechanics. Assisted in validation studies comparing CFD predictions with wind tunnel measurements.',
      achievements: [
        'Completed comprehensive lab safety training',
        'Assisted in 5 wind tunnel test campaigns',
        'Developed Python scripts for data processing'
      ],
      skills: ['Wind Engineering', 'Experiments', 'Python', 'Data Analysis'],
      color: 'hsl(220, 50%, 40%)',
      images: [
        '/experience/2020/img1.jpg',
        '/experience/2020/img2.jpg',
        '/experience/2020/img3.jpg'
      ]
    }
  ]

  const SCALE = 0.75
  const currentExperience = experiences[activeIndex]

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentExperience.images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [currentExperience.images.length])

  // Reset image index when switching experiences
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeIndex])

  // Horizontal scroll detection
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      // Each child is min-width:100% so item width equals container.clientWidth
      const scrollLeft = container.scrollLeft
      const itemWidth = container.clientWidth || 1
      const newIndex = Math.min(Math.round(scrollLeft / itemWidth), experiences.length - 1)
      setActiveIndex(newIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [experiences.length])

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current
    if (!container) return

    const itemWidth = container.clientWidth || 1
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  const calculateProgress = () => {
    return (activeIndex / (experiences.length - 1)) * 100
  }

  return (
    <section className="experience-section" style={{ maxWidth: '1200px', margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', padding: '0 2rem' }}>
      <div
        className="intro"
        style={{
          transform: `scale(${SCALE})`,
          transformOrigin: 'center top',
          flexShrink: 0,
          marginBottom: '2rem'
        }}
      >
        <div className="kicker">Career Journey</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Timeline</h2>
        <p className="muted text-lg" style={{ maxWidth: '60ch' }}>
          Navigate through my career journey — from cutting-edge research to industry applications and creative web development.
        </p>
      </div>

      {/* Tabs + Progress */}
      <div className="tabs-wrapper" style={{ position: 'relative', marginBottom: '3rem', flexShrink: 0 }}>
        <div className="progress-bg" />
        <div className="progress-fill" style={{ width: `${calculateProgress()}%` }} />

        <div className="year-tabs">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`year-button ${idx === activeIndex ? 'active' : ''}`}
              aria-current={idx === activeIndex}
            >
              <div className="year">{exp.year}</div>
              <div className="type">{exp.type}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        {/* Left: scrollable panels */}
        <div ref={scrollContainerRef} className="exp-scroll">
          {experiences.map((exp, idx) => (
            <article key={idx} className="exp-panel" aria-hidden={idx !== activeIndex}>
              <div className={`exp-panel-inner ${idx === activeIndex ? 'enter' : ''}`}>
                <div className="header">
                  <div className="accent" style={{ background: `linear-gradient(180deg, ${exp.color}, transparent)` }} />
                  <div>
                    <h3 className="role" style={{ color: exp.color }}>{exp.role}</h3>
                    <div className="company">{exp.company}</div>
                    <div className="period">{exp.period}</div>
                  </div>
                </div>

                <p className="desc">{exp.description}</p>

                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {exp.achievements.map((a, i) => (
                      <li key={i}>
                        <span className="bullet" style={{ color: exp.color }}>▹</span>
                        <span className="ach-text">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skills">
                  <h4>Technologies & Skills</h4>
                  <div className="skill-list">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="skill-pill" style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}40`, color: exp.color }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right: slideshow */}
        <div className="slideshow-column" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          <div className="fade-left" />

          <div className="slideshow-container">
            {currentExperience.images.map((img, idx) => (
              <div
                key={idx}
                className={`slide ${idx === currentImageIndex ? 'visible' : ''}`}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="slide-fallback" style={{ background: `linear-gradient(135deg, ${currentExperience.color}20, ${currentExperience.color}05)` }}>
                  {currentExperience.company}
                </div>
              </div>
            ))}
          </div>

          <div className="indicators">
            {currentExperience.images.map((_, idx) => (
              <div key={idx} className={`indicator ${idx === currentImageIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </div>

      {/* single styled-jsx tag (no nested tags) */}
      <style jsx>{`
        /* Progress */
        .progress-bg {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          z-index: 0;
        }
        .progress-fill {
          position: absolute;
          left: 0;
          top: calc(50% - 1.5px);
          height: 3px;
          background: linear-gradient(90deg, hsl(var(--accent)), rgba(140, 255, 200, 0.6));
          border-radius: 999px;
          z-index: 1;
          transition: width 0.3s ease;
          box-shadow: 0 0 12px hsl(var(--accent) / 0.5);
        }

        .year-tabs {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
        }

        .year-button {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .year-button:hover { transform: translateY(-3px); }
        .year-button.active {
          background: linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1));
          border: 2px solid hsl(var(--accent));
          box-shadow: 0 4px 20px hsl(var(--accent) / 0.3);
        }
        .year { font-size: 1.5rem; font-weight: 700; color: rgba(255,255,255,0.6); transition: color 0.3s; }
        .year-button.active .year { color: hsl(var(--accent)); }
        .type { font-size: 0.65rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.05em; text-align: center; }

        /* Scroll container */
        .exp-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          display: flex;
          gap: 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .exp-scroll::-webkit-scrollbar { display: none; }
        .exp-panel {
          min-width: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          display: flex;
          align-items: flex-start;
          padding-right: 2rem;
        }
        .exp-panel-inner { width: 100%; }
        .exp-panel-inner.enter { animation: fadeIn 0.5s ease-in; }

        .header { display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; }
        .accent { width:4px; height:60px; border-radius:999px; flex-shrink:0; }
        .role { font-size:1.75rem; font-weight:700; margin-bottom:0.25rem; }
        .company { font-size:1.1rem; color: rgba(255,255,255,0.6); font-weight:500; }
        .period { font-size:0.85rem; color: rgba(255,255,255,0.4); margin-top:0.25rem; font-style:italic; }

        .desc { font-size:1rem; line-height:1.8; color: rgba(255,255,255,0.7); margin-bottom:1.5rem; }

        .achievements h4,
        .skills h4 { font-size:0.9rem; font-weight:600; color: rgba(255,255,255,0.9); margin-bottom:0.75rem; }
        .achievements ul { display:flex; flex-direction:column; gap:0.5rem; padding:0; margin:0; list-style:none; }
        .achievements li { display:flex; gap:0.75rem; align-items:flex-start; }
        .bullet { font-size:1rem; line-height:1; margin-top:0.25rem; flex-shrink:0; }
        .ach-text { color: rgba(255,255,255,0.7); font-size:0.9rem; line-height:1.6; }

        .skill-list { display:flex; flex-wrap:wrap; gap:0.5rem; }
        .skill-pill { padding:0.4rem 0.85rem; border-radius:8px; font-size:0.8rem; font-weight:500; transition: all 0.2s ease; }

        /* Slideshow */
        .slideshow-column { display:flex; align-items:center; position:relative; }
        .fade-left {
          position:absolute; left:0; top:0; bottom:0; width:120px;
          background: linear-gradient(to right, rgba(10, 14, 26, 1) 0%, rgba(10, 14, 26, 0.8) 40%, rgba(10, 14, 26, 0) 100%);
          z-index:2; pointer-events:none;
        }
        .slideshow-container {
          position:relative; width:100%; height:100%; min-height:500px; border-radius:16px; overflow:hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.1);
        }
        .slide { position:absolute; inset:0; opacity:0; transition: opacity 1.2s ease-in-out; background-color: rgba(255,255,255,0.05); display:flex; align-items:center; justify-content:center; }
        .slide.visible { opacity:1; z-index:1; }
        .slide-fallback { width:100%; height:100%; display:flex; align-items:center; justify-content:center; color: rgba(255,255,255,0.5); font-size:1rem; }

        .indicators { position:absolute; bottom:1.5rem; left:50%; transform:translateX(-50%); display:flex; gap:0.5rem; z-index:3; }
        .indicator { width:8px; height:8px; border-radius:4px; background: rgba(255,255,255,0.3); transition: all 0.3s ease; }
        .indicator.active { width:32px; height:8px; border-radius:4px; background: var(--indicator-color, rgba(255,255,255,0.9)); box-shadow: 0 0 12px rgba(255,255,255,0.3); }

        @keyframes fadeIn {
          from { opacity:0; transform:translateX(-20px); }
          to { opacity:1; transform:translateX(0); }
        }

        /* Responsive: stack columns on small screens */
        @media (max-width: 968px) {
          .main-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .slideshow-container { min-height: 320px; }
        }
      `}</style>
    </section>
  )
}
