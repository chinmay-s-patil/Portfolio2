'use client'

import { useState, useEffect } from 'react';

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState('masters');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Slideshow data
  const mastersImages = [
    '/TUM/slideshow/image1.jpg',
    '/TUM/slideshow/image2.jpg',
    '/TUM/slideshow/image3.jpg',
    '/TUM/slideshow/image4.jpg',
    '/TUM/slideshow/image5.jpg'
  ];
  
  const bachelorsImages = [
    '/VIT/slideshow/image1.jpg',
    '/VIT/slideshow/image2.jpg',
    '/VIT/slideshow/image3.jpg'
  ];
  
  const currentImages = activeTab === 'masters' ? mastersImages : bachelorsImages;
  
  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [currentImages.length]);
  
  // Reset image index when switching tabs
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  const mastersData = {
    kicker: 'Academic Background',
    title: 'Master of Science',
    institution: 'Technical University of Munich (TUM)',
    degree: 'Aerospace Engineering',
    period: 'October 2021 — Present',
    description: 'Pursuing advanced studies in aerospace engineering with specialization in computational fluid dynamics and aerodynamics. Engaging with cutting-edge research in turbulence modeling, high-performance computing, and numerical methods for complex flow simulations.',
    skills: [
      'Advanced CFD',
      'Turbulence Modeling',
      'High-Performance Computing',
      'Aerodynamic Design',
      'Numerical Methods',
      'Flow Visualization'
    ]
  };

  const bachelorsData = {
    kicker: 'Academic Background',
    title: 'Bachelor of Technology',
    institution: 'VIT Chennai',
    degree: 'Mechanical Engineering',
    period: 'July 2017 — May 2021',
    description: 'Completed comprehensive undergraduate program in mechanical engineering, developing strong fundamentals in thermodynamics, fluid mechanics, and computational methods. Gained hands-on experience through laboratory work, projects, and industry internships.',
    skills: [
      'Fluid Mechanics',
      'Heat Transfer',
      'Thermodynamics',
      'CAD/CAM',
      'Engineering Analysis',
      'Project Management'
    ]
  };

  const currentData = activeTab === 'masters' ? mastersData : bachelorsData;

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '0 2rem'
    }}>
      {/* Tab Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <button
          onClick={() => setActiveTab('masters')}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            background: activeTab === 'masters' 
              ? 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1))'
              : 'rgba(255, 255, 255, 0.05)',
            border: activeTab === 'masters'
              ? '2px solid hsl(var(--accent))'
              : '2px solid rgba(255, 255, 255, 0.1)',
            color: activeTab === 'masters' ? 'hsl(var(--accent))' : 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: activeTab === 'masters' 
              ? '0 4px 20px hsl(var(--accent) / 0.3)'
              : 'none'
          }}
        >
          Master's
        </button>
        <button
          onClick={() => setActiveTab('bachelors')}
          style={{
            padding: '0.75rem 2rem',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            background: activeTab === 'bachelors' 
              ? 'linear-gradient(135deg, hsl(var(--accent) / 0.25), hsl(var(--accent) / 0.1))'
              : 'rgba(255, 255, 255, 0.05)',
            border: activeTab === 'bachelors'
              ? '2px solid hsl(var(--accent))'
              : '2px solid rgba(255, 255, 255, 0.1)',
            color: activeTab === 'bachelors' ? 'hsl(var(--accent))' : 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: activeTab === 'bachelors' 
              ? '0 4px 20px hsl(var(--accent) / 0.3)'
              : 'none'
          }}
        >
          Bachelor's
        </button>
      </div>

      {/* Content Area */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'start'
      }}>
        {/* Left Side - Text Content */}
        <div style={{ 
          animation: 'fadeIn 0.5s ease-in',
          paddingRight: '2rem'
        }}>
          <div style={{
            fontSize: '0.85rem',
            color: 'hsl(var(--accent))',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            {currentData.kicker}
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {currentData.title}
          </h2>

          <div style={{
            fontSize: '1.5rem',
            color: 'hsl(var(--accent))',
            fontWeight: '600',
            marginBottom: '0.75rem'
          }}>
            {currentData.degree}
          </div>

          <div style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>
            {currentData.institution}
          </div>

          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            {currentData.period}
          </div>

          <p style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2rem'
          }}>
            {currentData.description}
          </p>

          {/* Skills Tags */}
          <div>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Key Skills & Focus Areas
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {currentData.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.2s ease'
                  }}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Slideshow */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {currentImages.map((img, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: idx === currentImageIndex ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                background: `url(${img}) center/cover no-repeat`,
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Fallback for missing images */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(20, 255, 200, 0.1), rgba(140, 255, 200, 0.05))',
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem'
              }}>
                {activeTab === 'masters' ? 'TUM Campus' : 'VIT Chennai Campus'}
              </div>
            </div>
          ))}

          {/* Slideshow Indicators */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 10
          }}>
            {currentImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                style={{
                  width: idx === currentImageIndex ? '40px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentImageIndex 
                    ? 'hsl(var(--accent))' 
                    : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: idx === currentImageIndex 
                    ? '0 0 10px hsl(var(--accent) / 0.6)' 
                    : 'none'
                }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentImageIndex((prev) => 
              (prev - 1 + currentImages.length) % currentImages.length
            )}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ‹
          </button>
          
          <button
            onClick={() => setCurrentImageIndex((prev) => 
              (prev + 1) % currentImages.length
            )}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            ›
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}