'use client'

import { memo } from 'react'
import LazyImage from './LazyImage'

const EventsCard = memo(function EventsCard({ event, onClick, scale }) {
  return (
    <div
      onClick={() => onClick(event)}
      style={{
        cursor: 'pointer',
        transform: `rotate(${event.rotation}deg) scale(${scale})`,
        transformOrigin: 'top center',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        contain: 'content', // CSS containment for performance
        contentVisibility: 'auto' // Skip rendering when off-screen
      }}
      className="polaroid-card"
    >
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        padding: `${16 * scale}px`,
        paddingBottom: `${64 * scale}px`,
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: `${24 * scale}px`,
          left: `${24 * scale}px`,
          padding: `${8 * scale}px ${16 * scale}px`,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          fontSize: `${20 * scale}px`,
          fontWeight: '900',
          color: event.color,
          zIndex: 10,
          border: `2px solid ${event.color}60`,
          boxShadow: `0 4px 12px ${event.color}30`
        }}>
          {event.year}
        </div>

        <div style={{
          width: '100%',
          height: `${280 * scale}px`,
          background: `linear-gradient(135deg, ${event.color}20, ${event.color}05)`,
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: `${16 * scale}px`
        }}>
          <LazyImage
            src={event.images[0]}
            alt={event.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.9)'
            }}
          />

          <div style={{
            position: 'absolute',
            top: `${16 * scale}px`,
            right: `${16 * scale}px`,
            padding: `${6 * scale}px ${14 * scale}px`,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            borderRadius: '20px',
            fontSize: `${12 * scale}px`,
            fontWeight: '700',
            color: event.color,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {event.type}
          </div>
        </div>

        <div style={{
          fontFamily: "'Caveat', cursive",
          fontSize: `${19 * scale}px`,
          color: '#e0e0e0',
          textAlign: 'center',
          marginBottom: `${8 * scale}px`,
          fontWeight: '600'
        }}>
          {event.title}
        </div>

        <div style={{
          fontSize: `${14 * scale}px`,
          color: '#a0a0a0',
          textAlign: 'center',
          marginBottom: `${12 * scale}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: `${8 * scale}px`
        }}>
          <svg width={14 * scale} height={14 * scale} viewBox="0 0 24 24" fill="none">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
          {event.location}
        </div>

        <div style={{
          fontSize: `${13 * scale}px`,
          color: '#808080',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          {event.date}
        </div>

        <div style={{
          position: 'absolute',
          top: `-${8 * scale}px`,
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          width: `${80 * scale}px`,
          height: `${20 * scale}px`,
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }} />
      </div>
    </div>
  )
})

export default EventsCard