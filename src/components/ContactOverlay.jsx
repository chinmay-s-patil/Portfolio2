// 'use client'

// import { useEffect, useState } from 'react'

// const CONTACT_OPTIONS = [
//   {
//     id: 'project',
//     label: 'Start a Project',
//     circleText: 'NEW PROJECT ENQUIRY · NEW PROJECT ENQUIRY · ',
//     letterSpacing: '2.6',
//     icon: (
//       <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
//         <path d="M6 26 L16 6 L26 26 M10 20 h12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     href: null,
//     action: () => { window.location.href = 'mailto:chinmaypatil2412@gmail.com?subject=Project Enquiry' }
//   },
//   {
//     id: 'hire',
//     label: 'Hire Me',
//     circleText: 'HIRE ME · OPEN TO WORK · HIRE ME · OPEN TO WORK · ',
//     letterSpacing: '2.1',
//     icon: (
//       <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
//         <rect x="7" y="11" width="18" height="13" rx="2" stroke="#1a1a1a" strokeWidth="1.5"/>
//         <path d="M12 11V9a4 4 0 0 1 8 0v2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
//         <circle cx="16" cy="17" r="2" fill="#1a1a1a"/>
//       </svg>
//     ),
//     href: 'https://www.linkedin.com/in/chinmay-s-patil',
//     action: () => { window.open('https://www.linkedin.com/in/chinmay-s-patil', '_blank') }
//   },
//   {
//     id: 'ideas',
//     label: 'Talk Ideas',
//     circleText: 'TALK TECH · TALK IDEAS · TALK TECH · TALK IDEAS · ',
//     letterSpacing: '2.2',
//     icon: (
//       <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
//         <path d="M8 8h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round"/>
//       </svg>
//     ),
//     action: () => { window.location.href = 'mailto:chinmaypatil2412@gmail.com?subject=Let\'s Talk CFD / Ideas' }
//   },
//   {
//     id: 'hi',
//     label: 'Say Hi',
//     circleText: 'SAY HI · GET IN TOUCH · SAY HI · GET IN TOUCH ·  ',
//     letterSpacing: '3.2',
//     icon: (
//       <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
//         <path d="M6 10l10 7 10-7" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         <rect x="6" y="8" width="20" height="16" rx="2" stroke="#1a1a1a" strokeWidth="1.5"/>
//       </svg>
//     ),
//     action: () => { window.location.href = 'mailto:chinmaypatil2412@gmail.com' }
//   },
// ]

// export default function ContactOverlay({ isOpen, onClose }) {
//   const [hovered, setHovered] = useState(null)

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
//     return () => { document.body.style.overflow = '' }
//   }, [isOpen])

//   useEffect(() => {
//     const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
//     window.addEventListener('keydown', handleEsc)
//     return () => window.removeEventListener('keydown', handleEsc)
//   }, [onClose])

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         style={{
//           position: 'fixed',
//           inset: 0,
//           zIndex: 300,
//           background: 'rgba(0,0,0,0)',
//           pointerEvents: isOpen ? 'all' : 'none',
//           transition: 'background 0.4s ease',
//           ...(isOpen && { background: 'rgba(0,0,0,0.55)' }),
//         }}
//       />

//       {/* Panel */}
//       <div
//         style={{
//           position: 'fixed',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           zIndex: 301,
//           transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
//           transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
//           pointerEvents: isOpen ? 'all' : 'none',
//         }}
//       >
//         <div style={{
//           background: '#f0ede8',
//           borderRadius: '20px 20px 0 0',
//           padding: '32px 48px 32px',
//           boxShadow: '0 -8px 40px rgba(0,0,0,0.25)',
//         }}>

//           {/* Header */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginBottom: '36px',
//           }}>
//             <h2 style={{
//               fontSize: '15px',
//               fontWeight: '400',
//               color: '#1a1a1a',
//               letterSpacing: '0.3px',
//               margin: 0,
//               fontFamily: 'Helvetica Neue, Arial, sans-serif',
//             }}>
//               How can I help?
//             </h2>
//             <button
//               onClick={onClose}
//               style={{
//                 width: '30px',
//                 height: '30px',
//                 borderRadius: '50%',
//                 border: '1px solid rgba(0,0,0,0.2)',
//                 background: 'transparent',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '16px',
//                 color: '#333',
//                 transition: 'background 0.2s',
//               }}
//               onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.08)'}
//               onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//               aria-label="Close contact"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Options */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(4, 1fr)',
//             gap: '16px',
//             marginBottom: '28px',
//           }}>
//             {CONTACT_OPTIONS.map((opt) => (
//               <div
//                 key={opt.id}
//                 onClick={opt.action}
//                 onMouseEnter={() => setHovered(opt.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   gap: '10px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 {/* SVG ring with rotating text */}
//                 <div style={{ position: 'relative', width: '100px', height: '100px' }}>
//                   <svg
//                     viewBox="0 0 90 90"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="100"
//                     height="100"
//                     style={{
//                       transition: 'transform 0.6s ease',
//                       transform: hovered === opt.id ? 'rotate(30deg)' : 'rotate(0deg)',
//                     }}
//                   >
//                     <circle cx="45" cy="45" r="41" fill="none" stroke="#1a1a1a" strokeWidth="0.8"/>
//                     <defs>
//                       <path id={`cr-${opt.id}`} d="M45,45 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"/>
//                     </defs>
//                     <text
//                       fontSize="8.2"
//                       fill="#1a1a1a"
//                       fontFamily="Helvetica Neue, Arial, sans-serif"
//                       letterSpacing={opt.letterSpacing}
//                     >
//                       <textPath href={`#cr-${opt.id}`}>{opt.circleText}</textPath>
//                     </text>
//                   </svg>

//                   {/* Center icon — does NOT rotate */}
//                   <div style={{
//                     position: 'absolute',
//                     inset: 0,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}>
//                     <div style={{
//                       transition: 'transform 0.3s ease',
//                       transform: hovered === opt.id ? 'scale(1.12)' : 'scale(1)',
//                     }}>
//                       {opt.icon}
//                     </div>
//                   </div>
//                 </div>

//                 <span style={{
//                   fontSize: '11px',
//                   color: '#1a1a1a',
//                   letterSpacing: '0.3px',
//                   fontFamily: 'Helvetica Neue, Arial, sans-serif',
//                   fontWeight: '400',
//                   textAlign: 'center',
//                 }}>
//                   {opt.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
//           <div style={{
//             borderTop: '1px solid rgba(0,0,0,0.1)',
//             paddingTop: '16px',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//             <div style={{ display: 'flex', gap: '10px' }}>
//               {[
//                 { label: 'chinmaypatil2412@gmail.com', href: 'mailto:chinmaypatil2412@gmail.com' },
//                 { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chinmay-s-patil' },
//                 { label: 'GitHub', href: 'https://github.com/chinmay-s-patil' },
//               ].map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   target={link.href.startsWith('http') ? '_blank' : undefined}
//                   rel="noopener noreferrer"
//                   style={{
//                     fontSize: '11px',
//                     color: '#555',
//                     border: '1px solid rgba(0,0,0,0.2)',
//                     padding: '6px 14px',
//                     borderRadius: '100px',
//                     textDecoration: 'none',
//                     letterSpacing: '0.3px',
//                     fontFamily: 'Helvetica Neue, Arial, sans-serif',
//                     transition: 'background 0.2s',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
//                   onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//             <span style={{
//               fontSize: '11px',
//               color: '#999',
//               fontFamily: 'Helvetica Neue, Arial, sans-serif',
//             }}>
//               Munich, Germany · Available for collaboration
//             </span>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }