'use client'
import React, { useRef } from 'react'

export default function SectionWrapper({ id, index, children }) {
  const ref = useRef(null)

  return (
    <section id={id} ref={ref} className={`section ${index % 2 ? 'section--alt' : ''}`}>
      <div className="max-w-4xl w-full">
        {children}
      </div>
    </section>
  )
}
