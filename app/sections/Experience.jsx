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

      {/* Year Tabs - No Progress Bar */}
      <div className="tabs-wrapper" style={{ position: 'relative', marginBottom: '3rem', flexShrink: 0 }}>
        <div className="year-tabs" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className="year-button"
              style={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: idx === activeIndex ? '2px solid hsl(var(--accent))' : '2px solid rgba(255,255,255,0.1)',
                background: idx === activeIndex 
                  ? 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1))' 
                  : 'rgba(255,255,255,0.03)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: idx === activeIndex ? '0 4px 20px hsl(var(--accent) / 0.3)' : 'none'
              }}
              aria-current={idx === activeIndex}
            >
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: idx === activeIndex ? 'hsl(var(--accent))' : 'rgba(255,255,255,0.6)',
                transition: 'color 0.3s'
              }}>
                {exp.year}
              </div>
              <div style={{
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center'
              }}>
                {exp.type}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="main-grid" style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '2rem', flex: 1, overflow: 'hidden' }}>
        {/* Left: scrollable panels */}
        <div ref={scrollContainerRef} className="exp-scroll" style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          display: 'flex',
          gap: 0,
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}>
          {experiences.map((exp, idx) => (
            <article key={idx} className="exp-panel" style={{
              minWidth: '100%',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              display: 'flex',
              alignItems: 'flex-start',
              paddingRight: '2rem'
            }} aria-hidden={idx !== activeIndex}>
              <div className="exp-panel-inner" style={{
                width: '100%',
                animation: idx === activeIndex ? 'fadeIn 0.5s ease-in' : 'none'
              }}>
                <div className="header" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div className="accent" style={{
                    width: '4px',
                    height: '60px',
                    borderRadius: '999px',
                    flexShrink: 0,
                    background: `linear-gradient(180deg, ${exp.color}, transparent)`
                  }} />
                  <div>
                    <h3 className="role" style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      marginBottom: '0.25rem',
                      color: exp.color
                    }}>
                      {exp.role}
                    </h3>
                    <div className="company" style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: '500'
                    }}>
                      {exp.company}
                    </div>
                    <div className="period" style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.4)',
                      marginTop: '0.25rem',
                      fontStyle: 'italic'
                    }}>
                      {exp.period}
                    </div>
                  </div>
                </div>

                <p className="desc" style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '1.5rem'
                }}>
                  {exp.description}
                </p>

                <div className="achievements" style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '0.75rem'
                  }}>
                    Key Achievements
                  </h4>
                  <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: 0,
                    margin: 0,
                    listStyle: 'none'
                  }}>
                    {exp.achievements.map((a, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start'
                      }}>
                        <span className="bullet" style={{
                          color: exp.color,
                          fontSize: '1rem',
                          lineHeight: 1,
                          marginTop: '0.25rem',
                          flexShrink: 0
                        }}>
                          ▹
                        </span>
                        <span className="ach-text" style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '0.9rem',
                          lineHeight: '1.6'
                        }}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skills">
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '0.75rem'
                  }}>
                    Technologies & Skills
                  </h4>
                  <div className="skill-list" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {exp.skills.map((s, i) => (
                      <span key={i} className="skill-pill" style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease',
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        color: exp.color
                      }}>
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
          <div className="fade-left" style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, rgba(10, 14, 26, 1) 0%, rgba(10, 14, 26, 0.8) 40%, rgba(10, 14, 26, 0) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          <div className="slideshow-container" style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {currentExperience.images.map((img, idx) => (
              <div
                key={idx}
                className="slide"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: idx === currentImageIndex ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: idx === currentImageIndex ? 1 : 0
                }}
              >
                <div className="slide-fallback" style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1rem',
                  background: `linear-gradient(135deg, ${currentExperience.color}20, ${currentExperience.color}05)`
                }}>
                  {currentExperience.company}
                </div>
              </div>
            ))}
          </div>

          <div className="indicators" style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 3
          }}>
            {currentExperience.images.map((_, idx) => (
              <div
                key={idx}
                className="indicator"
                style={{
                  width: idx === currentImageIndex ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentImageIndex 
                    ? currentExperience.color
                    : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                  boxShadow: idx === currentImageIndex 
                    ? `0 0 12px ${currentExperience.color}80` 
                    : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity:0; transform:translateX(-20px); }
          to { opacity:1; transform:translateX(0); }
        }

        .year-button:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 968px) {
          .main-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
          }
          .slideshow-container { 
            min-height: 320px; 
          }
        }
      `}</style>
    </section>
  )
}