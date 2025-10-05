'use client'
import React from 'react'

export default function SectionWrapper({ id, index, children }) {
  return (
    <section id={id} className={`section ${index % 2 ? 'section--alt' : ''}`}>
      <div className="max-w-6xl w-full">
        {children}
      </div>
    </section>
  )
}
