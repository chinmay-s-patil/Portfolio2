'use client'
import { useState, useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Optimization of Pyrolysis-Based Plastic Oil Yield',
      category: 'B.Tech Thesis',
      subtitle: 'ML Model · Experimental Analysis',
      period: 'Jan 2024 — May 2024',
      description: 'Designed and executed Taguchi-based pyrolysis experiments on HDPE, PS, and blends. Analyzed pyrolysis oils and feedstocks using FTIR, GC-MS, and bomb calorimetry. Developed machine learning models achieving 95.96% R² accuracy for yield prediction, enabling optimization of pyrolysis parameters for maximum oil recovery.',
      learnings: [
        'Designed DOE experiments using Taguchi methodology',
        'Built ML models with 95.96% R² accuracy',
        'Analyzed materials with FTIR, GC-MS, bomb calorimetry'
      ],
      tags: ['Alternative Fuels', 'Machine Learning', 'Thermal', 'Experimental Design'],
      media: [
        { type: 'image', src: '/Projects/Pyrolysis of Plastics/Pyrolysis of Plastics (1).jpg', caption: 'Experimental setup' },
        { type: 'image', src: '/Projects/Pyrolysis of Plastics/Pyrolysis of Plastics (2).jpg', caption: 'Analysis results' },
        { type: 'image', src: '/Projects/Pyrolysis of Plastics/Pyrolysis of Plastics (3).jpg', caption: 'Analysis results' }
      ],
      href: '#'
    },
    {
      title: 'Hybrid Battery Cooling Mechanism',
      category: 'Thermal Management',
      subtitle: 'Ansys CFD · SolidWorks',
      period: 'Sep 2023 — Dec 2023',
      description: 'Engineered and simulated a hybrid cooling system utilizing Thermal Interface Material (TIM), Phase Change Material (PCM), and liquid coolant. Performed comprehensive thermal analysis in SolidWorks and Ansys, achieving 67.31% efficiency improvement for compact battery systems under variable load conditions.',
      learnings: [
        'Achieved 67.31% cooling efficiency improvement',
        'Integrated TIM, PCM, and liquid coolant systems',
        'Performed transient thermal CFD analysis'
      ],
      tags: ['Thermal Management', 'CFD', 'Batteries', 'Ansys'],
      media: [
        { type: 'image', src: '/Projects/Battery Thermal Management System/Battery Thermal Management System (1).jpg' },
        { type: 'image', src: '/Projects/Battery Thermal Management System/Battery Thermal Management System (2).jpg' },
        { type: 'image', src: '/Projects/Battery Thermal Management System/Battery Thermal Management System (3).jpg' },
        { type: 'image', src: '/Projects/Battery Thermal Management System/Battery Thermal Management System (4).jpg' }
      ],
      href: '#'
    },
    {
      title: 'Reverse Engineering S500 Drone',
      category: '3D Scanning & CAD',
      subtitle: '3D Scanning · Geomagic',
      period: 'Jun 2023 — Aug 2023',
      description: 'Captured high-fidelity 3D scans of S500 drone components and reconstructed detailed CAD model in SolidWorks with 0.01mm tolerance. Achieved complete digital assembly with accurate dimensional accuracy, validated against manufacturer kit documentation for potential manufacturing and design optimization applications.',
      learnings: [
        'Performed high-precision 3D scanning',
        'CAD reconstruction with 0.01mm tolerance',
        'Full assembly validation and documentation'
      ],
      tags: ['Reverse Engineering', 'CAD', 'SolidWorks', '3D Scanning'],
      media: [
        { type: 'image', src: '/projects/drone-scan.jpg' }
      ],
      href: '#'
    },
    {
      title: 'CFD Evaluation of Drone Propeller Downwash',
      category: 'Aerodynamics',
      subtitle: 'OpenFOAM · Flow Analysis',
      period: 'Mar 2023 — May 2023',
      description: 'Conducted comprehensive CFD simulations of drone propeller downwash effects to analyze aerodynamic performance and flight stability. Quantified downwash influence on lift coefficient distribution and developed design recommendations for improved drone performance in various flight conditions.',
      learnings: [
        'Simulated propeller aerodynamics in OpenFOAM',
        'Quantified downwash effects on lift coefficient',
        'Developed design optimization recommendations'
      ],
      tags: ['CFD', 'Aerodynamics', 'OpenFOAM', 'Propeller'],
      media: [
        { type: 'image', src: '/projects/propeller-downwash.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Wind Turbine Performance with Vortex Generators',
      category: 'Renewable Energy',
      subtitle: 'CFD · Energy Optimization',
      period: 'Dec 2022 — Feb 2023',
      description: 'Performed comparative CFD simulations of wind turbine configurations with and without vortex generators. Analyzed lift enhancement, flow stability improvements, and overall energy capture gains. Results demonstrated significant performance benefits through passive flow control devices.',
      learnings: [
        'Analyzed vortex generator effects on turbine blades',
        'Quantified lift and energy capture improvements',
        'Optimized passive flow control strategies'
      ],
      tags: ['CFD', 'Wind Energy', 'Turbine', 'Flow Control'],
      media: [
        { type: 'image', src: '/projects/wind-turbine.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Solar Parapet Roof Panel Aerodynamics',
      category: 'Building CFD',
      subtitle: 'OpenFOAM · Custom ABL',
      period: 'Sep 2022 — Nov 2022',
      description: 'Simulated wind loads on parapet roof-mounted solar panels using OpenFOAM with custom atmospheric boundary layer (ABL) conditions. Assessed effects of parapet height on wind sheltering and panel structural loads, providing design guidance for durable solar installations on commercial buildings.',
      learnings: [
        'Developed custom ABL boundary conditions',
        'Analyzed wind load distribution on solar arrays',
        'Evaluated parapet height effects on sheltering'
      ],
      tags: ['CFD', 'Solar', 'Building', 'OpenFOAM'],
      media: [
        { type: 'image', src: '/projects/solar-parapet.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Propeller Aeroacoustics Study',
      category: 'Acoustics',
      subtitle: 'LES · FW-H · Ansys Fluent',
      period: 'Jun 2022 — Aug 2022',
      description: 'Conducted transient aeroacoustic simulations of propellers using Large Eddy Simulation (LES) with sliding mesh and Ffowcs Williams-Hawkings (FW-H) analogy. Evaluated noise propagation at multiple receiver points and compared acoustic signatures of standard, foldable, and toroidal propeller geometries.',
      learnings: [
        'Performed LES with sliding mesh technique',
        'Applied FW-H analogy for noise prediction',
        'Compared acoustic performance of multiple designs'
      ],
      tags: ['Aeroacoustics', 'Noise', 'CFD', 'LES', 'Ansys'],
      media: [
        { type: 'image', src: '/projects/propeller-acoustics.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Natural Gas Combustion Simulation',
      category: 'Combustion',
      subtitle: 'OpenFOAM · AMR',
      period: 'Mar 2022 — May 2022',
      description: 'Modeled combustion of Indian composition natural gas on a domestic stove burner using adaptive mesh refinement (AMR) in OpenFOAM. Resolved flame structure, pollutant formation mechanisms, and emissions profiles under varying burner configurations to optimize efficiency and reduce emissions.',
      learnings: [
        'Implemented adaptive mesh refinement for combustion',
        'Modeled pollutant formation and emissions',
        'Optimized burner design for efficiency'
      ],
      tags: ['Combustion', 'CFD', 'Energy', 'OpenFOAM'],
      media: [
        { type: 'image', src: '/projects/combustion.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Laser Bed Powder Fusion Simulations',
      category: 'Additive Manufacturing',
      subtitle: 'Process Analysis · Thermal',
      period: 'Dec 2021 — Feb 2022',
      description: 'Analyzed melting, solidification, and microstructure evolution in Laser Powder Bed Fusion (LBPF) additive manufacturing processes. Evaluated impacts of laser power, scan speed, and powder properties on part quality. Identified optimal process parameters to minimize defects and improve mechanical properties.',
      learnings: [
        'Simulated LBPF melting and solidification',
        'Analyzed microstructure evolution',
        'Optimized process parameters for quality'
      ],
      tags: ['Additive Manufacturing', 'Thermal', 'Materials', 'Process'],
      media: [
        { type: 'image', src: '/projects/lbpf.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Immersion Cooling in Battery Thermal Management',
      category: 'Thermal Systems',
      subtitle: 'Parametric Study · OpenFOAM',
      period: 'Sep 2021 — Nov 2021',
      description: 'Systematically studied effects of coolant types, C-rating, and inlet velocity on battery thermal management performance using OpenFOAM. Comprehensive parametric analysis demonstrated 43.99% temperature reduction improvement with optimized immersion cooling configuration.',
      learnings: [
        'Conducted parametric thermal analysis',
        'Achieved 43.99% temperature improvement',
        'Compared multiple coolant configurations'
      ],
      tags: ['Thermal', 'Batteries', 'CFD', 'OpenFOAM'],
      media: [
        { type: 'image', src: '/projects/immersion-cooling.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Simulation of Truck Platooning',
      category: 'Vehicle Aerodynamics',
      subtitle: 'OpenFOAM · Drag Reduction',
      period: 'Jun 2021 — Aug 2021',
      description: 'CFD study of aerodynamic interactions and drag reduction potential in truck platooning configurations. Quantified fuel efficiency improvements through optimized vehicle spacing and formations. Revealed significant aerodynamic benefits and provided recommendations for autonomous platooning systems.',
      learnings: [
        'Quantified drag reduction in platooning',
        'Optimized vehicle spacing for efficiency',
        'Analyzed wake interactions between vehicles'
      ],
      tags: ['CFD', 'Transport', 'Optimization', 'OpenFOAM'],
      media: [
        { type: 'image', src: '/projects/truck-platoon.jpg' }
      ],
      href: '#'
    },
    {
      title: 'PINN for CFD Simulations',
      category: 'Machine Learning',
      subtitle: 'Physics-Informed Neural Net',
      period: 'Mar 2021 — May 2021',
      description: 'Developed Physics-Informed Neural Network (PINN) model for simulating flow around a cylinder. Demonstrated capability of neural networks to learn fluid dynamics governing equations. Established foundation for future work on variable geometry applications and robust physics embedding.',
      learnings: [
        'Developed PINN for fluid dynamics',
        'Trained model on cylinder flow physics',
        'Validated against traditional CFD results'
      ],
      tags: ['Machine Learning', 'CFD', 'Physics', 'Neural Networks'],
      media: [
        { type: 'image', src: '/projects/pinn.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Bullet Impact Simulations',
      category: 'Impact Dynamics',
      subtitle: 'Ansys Explicit · FEA',
      period: 'Dec 2020 — Feb 2021',
      description: 'Analyzed impact dynamics of high-velocity bullet on bolted plate assembly using Ansys Explicit Dynamics. Evaluated stress distribution, material deformation, and energy absorption in high-speed impact events. Provided insights for protective structure design and ballistic applications.',
      learnings: [
        'Performed explicit dynamics simulation',
        'Analyzed high-velocity impact mechanics',
        'Evaluated stress and deformation patterns'
      ],
      tags: ['Impact', 'FEA', 'Materials', 'Ansys'],
      media: [
        { type: 'image', src: '/projects/bullet-impact.jpg' }
      ],
      href: '#'
    },
    {
      title: 'Aerodynamics of Ground-Mounted Solar Arrays',
      category: 'Renewable Energy',
      subtitle: 'CFD · Pressure Mapping',
      period: 'Sep 2020 — Nov 2020',
      description: 'Performed steady-state and transient CFD simulations to map pressure and force distributions on ground-mounted solar panel arrays. Analyzed wind loading under various orientations and environmental conditions. Results guided structural design for optimized and cost-effective solar installations.',
      learnings: [
        'Mapped pressure distributions on solar arrays',
        'Performed transient wind load analysis',
        'Optimized panel orientation for loading'
      ],
      tags: ['CFD', 'Solar', 'Optimization', 'Wind Loading'],
      media: [
        { type: 'video', src: '/Projects/Aerodynamics of Ground-Mounted Solar Arrays/Aerodynamics of Ground-Mounted Solar Arrays.mp4' }
      ],
      href: '#'
    },
    {
      title: 'CAD Model of Solar Vortex Engine',
      category: 'Design Engineering',
      subtitle: 'SolidWorks · Precision Modeling',
      period: 'Jun 2020 — Aug 2020',
      description: 'Created precise CAD baseline model of solar vortex engine for future computational simulations. Incorporated current research standards with 1mm tolerance specifications. Detailed component modeling enables parametric studies and design optimization in renewable energy applications.',
      learnings: [
        'Developed detailed CAD model with 1mm tolerance',
        'Incorporated research-based design standards',
        'Created parametric model for optimization'
      ],
      tags: ['CAD', 'Design', 'Energy', 'SolidWorks'],
      media: [
        { type: 'image', src: 'Projects/SVE/SVE (1).png' },
        { type: 'image', src: 'Projects/SVE/SVE (2).png' },
      ],
      href: '#'
    },
    {
      title: 'Wind Tunnel Test Section Modeling',
      category: 'Experimental Setup',
      subtitle: 'SolidWorks · Precision CAD',
      period: 'Mar 2020 — May 2020',
      description: '3D modeled wind tunnel test sections with 0.01mm tolerance from field measurements. Detailed CAD models support instrumentation placement, flow visualization, and experimental analysis. High-precision modeling ensures accurate experimental setup and reproducible results.',
      learnings: [
        'Precision modeling with 0.01mm tolerance',
        'Field measurement to CAD workflow',
        'Design for instrumentation integration'
      ],
      tags: ['CAD', 'Experiment', 'Aerodynamics', 'SolidWorks'],
      media: [
        { type: 'image', src: 'Projects/CAD Modeling of Wind Tunnel Test Section/CAD Modeling of Wind Tunnel Test Section.jpg' },
        { type: 'image', src: 'Projects/CAD Modeling of Wind Tunnel Test Section/CAD Modeling of Wind Tunnel Test Section.png' }
      ],
      href: '#'
    },
    {
      title: 'Computational Correlation of J-Integral parameter for Inclined Crack using FEM and ML',
      category: 'Structural Analysis',
      subtitle: 'COMSOL · J-Integral · ML',
      period: 'Dec 2019 — Feb 2020',
      description: 'Simulated angled crack propagation using COMSOL Multiphysics and J-integral method. Compiled extensive dataset of crack behavior under various loading conditions. Developed machine learning and neural network models achieving >99% prediction accuracy for crack propagation paths.',
      learnings: [
        'Simulated crack propagation with J-integral',
        'Generated comprehensive fracture dataset',
        'Built ML models with >99% accuracy'
      ],
      tags: ['Fracture', 'ML', 'FEA', 'COMSOL'],
      media: [
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (1).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (10).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (2).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (3).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (4).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (5).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (6).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (7).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (8).png' },
        { type: 'image', src: '/Projects/Inclined Crack/Inclined Crack (9).png' }
      ],
      href: '#'
    },
    {
      title: 'Graphite Rupture Strength Prediction',
      category: 'Materials Science',
      subtitle: 'Deep Learning · Property Prediction',
      period: 'Sep 2019 — Nov 2019',
      description: 'Developed deep learning model achieving 98.1% accuracy for predicting graphite rupture strength using historic nuclear-grade graphite datasets. Model enables rapid material property prediction for reactor design and safety assessment without extensive mechanical testing.',
      learnings: [
        'Achieved 98.1% prediction accuracy',
        'Processed nuclear-grade graphite datasets',
        'Developed property prediction framework'
      ],
      tags: ['Deep Learning', 'Materials', 'Prediction', 'Neural Networks'],
      media: [
        { type: 'image', src: '/Projects/Nuclear Graphite/Nuclear Graphite (1).png' },
        { type: 'image', src: '/Projects/Nuclear Graphite/Nuclear Graphite (2).png' }
      ],
      href: '#'
    },
    {
      title: 'Language Identification in Music',
      category: 'Audio Processing',
      subtitle: 'Python · PyTorch · MFCC',
      period: 'Jun 2019 — Aug 2019',
      description: 'Built deep learning system achieving 97% accuracy for language detection in music using Mel-frequency cepstral coefficients (MFCC) and advanced audio feature engineering. Implemented in PyTorch with robust preprocessing pipeline for real-world audio data.',
      learnings: [
        'Achieved 97% language detection accuracy',
        'Implemented MFCC feature extraction',
        'Built end-to-end audio processing pipeline'
      ],
      tags: ['Deep Learning', 'Audio', 'PyTorch', 'Signal Processing'],
      media: [
        { type: 'image', src: '/projects/music-language.jpg' },
      ],
      href: '#'
    },
    {
      title: 'Guitar Design Project',
      category: 'Product Design',
      subtitle: 'CAD · Showcase',
      period: 'Jan 2019 — Mar 2019',
      description: 'Created highly detailed and visually optimized guitar model in CAD software as first-year engineering showcase project. Demonstrated proficiency in surface modeling, assembly design, and engineering graphics principles through comprehensive instrument design.',
      learnings: [
        'Detailed surface and solid modeling',
        'Assembly design and visualization',
        'Engineering graphics fundamentals'
      ],
      tags: ['Design', 'CAD', 'Showcase', 'Product Design'],
      media: [
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (1).jpg' },
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (2).jpg' },
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (3).jpg' },
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (4).jpg' },
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (5).jpg' },
        { type: 'image', src: '/Projects/Guitar Design Project/Guitar Design Project (6).jpg' }
      ],
      href: '#'
    },
    {
      title: 'Aerodynamics Lab Experiments',
      category: 'Experimental Research',
      subtitle: 'Instrumentation · Wind Tunnel',
      period: 'Sep 2018 — Dec 2018',
      description: 'Conducted hands-on experimentation in aerodynamics laboratory focusing on wind turbine instrumentation, hot-wire anemometry, and pitot tube analysis under faculty supervision. Gained practical experience in measurement techniques, data acquisition, and experimental uncertainty analysis.',
      learnings: [
        'Wind turbine instrumentation setup',
        'Hot-wire anemometry measurements',
        'Pitot tube calibration and analysis'
      ],
      tags: ['Experiment', 'Wind', 'Instrumentation', 'Measurement'],
      media: [
        { type: 'image', src: '/Projects/Aerodynamics Lab Experiments/Aerodynamics Lab Experiments (1).jpg' },
        { type: 'image', src: '/Projects/Aerodynamics Lab Experiments/Aerodynamics Lab Experiments (2).jpg' },
        { type: 'image', src: '/Projects/Aerodynamics Lab Experiments/Aerodynamics Lab Experiments (3).jpg' },
        { type: 'image', src: '/Projects/Aerodynamics Lab Experiments/Aerodynamics Lab Experiments (4).jpg' },
      ],
      href: '#'
    }
  ]

  const PROJECTS_PER_PAGE = 6
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

  // Scroll detection
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const containerWidth = container.clientWidth
      const page = Math.round(scrollLeft / containerWidth)
      setCurrentPage(Math.min(page, totalPages - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [totalPages])

  const scrollToPage = (pageIndex) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const containerWidth = container.clientWidth
    container.scrollTo({
      left: containerWidth * pageIndex,
      behavior: 'smooth'
    })
  }

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1)
    }
  }

  const goToPrevious = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1)
    }
  }

  return (
    <>
      <div style={{ 
        maxWidth: 'min(90vw, 1400px)',
        margin: '0 auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(1rem, 2vw, 2rem)'
      }}>
        {/* Header - using fluid typography */}
        <div style={{ 
          flexShrink: 0, 
          marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)' 
        }}>
          <div className="kicker" style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
            marginBottom: 'clamp(0.5rem, 1vh, 1rem)'
          }}>
            Portfolio
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: 'clamp(0.75rem, 2vh, 1.25rem)',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1'
          }}>
            Selected Projects
          </h2>
          <p className="muted" style={{ 
            maxWidth: '65ch',
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: '1.6',
            marginBottom: 'clamp(1rem, 2vh, 1.5rem)'
          }}>
            A showcase of computational fluid dynamics simulations, visualization tools, 
            and web applications that demonstrate my technical capabilities and problem-solving approach.
          </p>
        </div>

        {/* Navigation Controls */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'clamp(0.75rem, 2vw, 1.25rem)',
          marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)',
          flexShrink: 0
        }}>
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            style={{
              width: 'clamp(36px, 5vw, 44px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: '50%',
              background: currentPage === 0 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentPage === 0 ? 0.3 : 1,
              transition: 'all 0.3s ease'
            }}
            className="nav-button-hover"
            aria-label="Previous page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div style={{ 
            display: 'flex', 
            gap: 'clamp(0.375rem, 1vw, 0.625rem)',
            alignItems: 'center'
          }}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                style={{
                  width: idx === currentPage ? 'clamp(40px, 6vw, 52px)' : 'clamp(28px, 4vw, 36px)',
                  height: 'clamp(5px, 0.8vh, 7px)',
                  borderRadius: '4px',
                  background: idx === currentPage 
                    ? 'hsl(var(--accent))' 
                    : 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: idx === currentPage 
                    ? '0 0 12px hsl(var(--accent) / 0.5)' 
                    : 'none'
                }}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            style={{
              width: 'clamp(36px, 5vw, 44px)',
              height: 'clamp(36px, 5vw, 44px)',
              borderRadius: '50%',
              background: currentPage === totalPages - 1 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: currentPage === totalPages - 1 ? 0.3 : 1,
              transition: 'all 0.3s ease'
            }}
            className="nav-button-hover"
            aria-label="Next page"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="projects-scroll"
          style={{
            flex: 1,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory',
            display: 'flex',
            WebkitOverflowScrolling: 'touch',
            minHeight: 0
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              style={{
                minWidth: '100%',
                width: '100%',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                display: 'flex',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ width: '100%' }}>
                <div className="projects-grid" style={{
                  display: 'grid',
                  gap: 'clamp(1rem, 2vw, 1.75rem)',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                  gridAutoRows: '1fr'
                }}>
                  {projects
                    .slice(pageIndex * PROJECTS_PER_PAGE, (pageIndex + 1) * PROJECTS_PER_PAGE)
                    .map((p, i) => (
                      <ProjectCard 
                        key={pageIndex * PROJECTS_PER_PAGE + i}
                        title={p.title}
                        period={p.period}
                        tags={p.tags}
                        onClick={() => setSelectedProject(p)}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style jsx>{`
        .projects-scroll::-webkit-scrollbar {
          display: none;
        }

        .nav-button-hover:not(:disabled):hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(1.1);
        }

        /* Responsive grid breakpoints */
        @media (min-width: 1400px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            grid-template-rows: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) and (max-width: 1399px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr);
          }
        }

        @media (max-width: 899px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto;
          }
        }

        /* Ensure consistent aspect ratio for cards */
        .projects-grid > * {
          min-height: clamp(200px, 30vh, 280px);
        }
      `}</style>
    </>
  )
}