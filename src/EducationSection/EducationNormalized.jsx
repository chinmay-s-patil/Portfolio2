'use client'

import { useState, useEffect } from 'react'

export default function EducationNormalized() {
  const [activeTab, setActiveTab] = useState('masters')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scale, setScale] = useState(1)

  const BASE_WIDTH  = 1920
  const BASE_HEIGHT = 1080

  useEffect(() => {
    const calculateScale = () => {
      const widthScale  = window.innerWidth  / BASE_WIDTH
      const heightScale = window.innerHeight / BASE_HEIGHT
      setScale(Math.min(widthScale, heightScale))
    }
    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  const mastersImages = [
    '/Education/TUM/TUM (1).jpg',
    '/Education/TUM/TUM (2).jpg',
    '/Education/TUM/TUM (3).jpg',
    '/Education/TUM/TUM (4).jpg',
    '/Education/TUM/TUM (5).jpg',
    '/Education/TUM/TUM (6).jpg',
    '/Education/TUM/TUM (7).jpg',
  ]

  const bachelorsImages = [
    '/Education/VITC/VITC (1).jpeg',
    '/Education/VITC/VITC (10).jpg',
    '/Education/VITC/VITC (11).jpg',
    '/Education/VITC/VITC (2).JPG',
    '/Education/VITC/VITC (3).jpg',
    '/Education/VITC/VITC (4).jpg',
    '/Education/VITC/VITC (5).jpg',
    '/Education/VITC/VITC (6).jpg',
    '/Education/VITC/VITC (7).jpg',
    '/Education/VITC/VITC (8).jpg',
    '/Education/VITC/VITC (9).jpg',
    '/Education/VITC/VITC (1).jpg',
    '/Education/VITC/VITC (1).png',
  ]

  const mastersData = {
    degree: 'Aerospace Engineering',
    title: 'Master of Science',
    institution: 'Technical University of Munich (TUM)',
    period: 'October 2025 - Present',
    description: 'Pursuing advanced studies in aerospace engineering with specialization in computational fluid dynamics and aerodynamics. Engaging with cutting-edge research in turbulence modeling, high-performance computing, and numerical methods for complex flow simulations.',
    skills: ['Advanced CFD'],
  }

  const bachelorsData = {
    degree: 'Mechanical Engineering',
    title: 'Bachelor of Technology',
    institution: 'VIT Chennai',
    period: 'June 2021 - May 2025',
    description: 'Completed comprehensive undergraduate program in mechanical engineering, developing strong fundamentals in thermodynamics, fluid mechanics, and computational methods. Gained hands-on experience through laboratory work, projects, and industry internships.',
    skills: [
      'Fluid Mechanics',
      'Computational Fluid Dynamics',
      'Heat Transfer',
      'Thermodynamics',
      'Engineering Analysis',
      'Mechanical Design',
    ],
  }

  const currentImages = activeTab === 'masters' ? mastersImages : bachelorsImages
  const currentData   = activeTab === 'masters' ? mastersData   : bachelorsData

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [currentImages.length])

  useEffect(() => { setCurrentImageIndex(0) }, [activeTab])

  return (
    <>
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          position: 'relative',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '1400px',
            height: '900px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ── Header ── */}
          <div style={{ flexShrink: 0, marginBottom: '0px' }}>
            <div style={{
              fontSize: '14px',
              color: 'hsl(140, 70%, 60%)',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              lineHeight: '1.4',
            }}>
              Education History
            </div>

            <h2 style={{
              fontSize: '56px',
              fontWeight: '700',
              marginBottom: '16px',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'whitesmoke',
              backgroundClip: 'text',
            }}>
              Where I Studied
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '3px',
              color: 'rgba(255,255,255,0.68)',
              maxWidth: '900px',
            }}>
              Explore my academic foundation — from fundamental engineering principles to cutting-edge computational research.
            </p>
          </div>

          {/* ── Tabs ── */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '32px',
            flexShrink: 0,
            justifyContent: 'center',
          }}>
            {['masters', 'bachelors'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  background: activeTab === tab
                    ? 'linear-gradient(135deg, hsl(var(--accent), 0.25), hsl(var(--accent), 0.1))'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === tab
                    ? '2px solid hsl(var(--accent))'
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  color: activeTab === tab
                    ? 'hsl(var(--accent))'
                    : 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeTab === tab
                    ? '0 6px 24px hsl(var(--accent) / 0.25)'
                    : 'none',
                }}
              >
                {tab === 'masters' ? "Master's" : "Bachelor's"}
              </button>
            ))}
          </div>

          {/* ── Main Content ── */}
          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center',
              minHeight: 0,
            }}
          >
            {/* Left: Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
                {currentData.title}
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'hsl(var(--accent))' }}>
                {currentData.degree}
              </div>
              <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', fontWeight: '500', marginBottom: '8px' }}>
                {currentData.institution}
              </div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px', fontStyle: 'italic' }}>
                {currentData.period}
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: 'rgba(255,255,255,0.68)' }}>
                {currentData.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {currentData.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                    style={{
                      padding: '8px 20px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: '500',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Slideshow */}
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
              <div style={{
                position: 'absolute',
                left: 0, top: 0, bottom: 0,
                width: '120px',
                background: 'linear-gradient(to right, rgba(10,14,26,1) 0%, rgba(10,14,26,0.8) 40%, rgba(10,14,26,0) 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(20,20,30,0.5)',
              }}>
                {currentImages.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: idx === currentImageIndex ? 1 : 0,
                      transition: 'opacity 1.2s ease-in-out',
                      zIndex: idx === currentImageIndex ? 1 : 0,
                    }}
                  >
                    <img
                      src={img}
                      alt={`${currentData.institution} - Image ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  )
}