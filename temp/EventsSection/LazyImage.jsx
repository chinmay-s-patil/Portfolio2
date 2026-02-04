'use client'

import { useState, useRef, useEffect } from 'react'

export default function LazyImage({ src, alt, style, className }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' } // Start loading 50px before visible
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={imgRef}
      style={{
        ...style,
        backgroundColor: '#1a1a1a',
        backgroundImage: isLoaded ? 'none' : 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
        backgroundSize: isLoaded ? 'auto' : '200% 100%',
        animation: isLoaded ? 'none' : 'shimmer 1.5s infinite'
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          className={className}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}