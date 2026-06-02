import { useState, useEffect, useRef } from 'react'

const AD_CREATIVES = [
  { id: 1, type: 'image', label: 'Ad Creative 1', src: '/ads/Artboard 5.png' },
  { id: 2, type: 'image', label: 'Ad Creative 2', src: '/ads/Artboard 6.png' },
  { id: 3, type: 'image', label: 'Ad Creative 3', src: '/ads/Artboard 7.png' },
  { id: 4, type: 'image', label: 'Ad Creative 4', src: '/ads/Artboard 8.png' },
  { id: 5, type: 'image', label: 'Ad Creative 5', src: '/ads/Artboard 9.png' },
]

// Duplicated array — second copy drives the seamless loop
const LOOP_ITEMS = [...AD_CREATIVES, ...AD_CREATIVES]

function Lightbox({ src, label, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'lbFadeIn 150ms ease forwards',
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: '28px',
          lineHeight: 1,
          cursor: 'pointer',
          padding: '8px',
          zIndex: 1,
          opacity: 0.8,
          transition: 'opacity 150ms ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '0.8' }}
      >
        ✕
      </button>
      <img
        src={src}
        alt={label}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          display: 'block',
        }}
      />
    </div>
  )
}

function AdCard({ item, onOpen }) {
  // Used only for mobile tap detection — not for pausing scroll
  const touchStart = useRef({ x: 0, y: 0 })

  const baseStyle = {
    height: '320px',
    borderRadius: '12px',
    overflow: 'hidden',
    flexShrink: 0,
    border: '1px solid var(--border-1)',
  }

  if (item.src && item.type === 'video') {
    return (
      <div className="ad-card" style={{ ...baseStyle, position: 'relative' }}>
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '999px' }}>
          <span style={{ fontSize: '10px', color: 'white', fontFamily: 'var(--font-sans)' }}>{item.label}</span>
        </div>
      </div>
    )
  }

  if (item.src && item.type === 'image') {
    return (
      <div
        className="ad-card"
        // Desktop: plain click opens lightbox
        onClick={() => onOpen(item)}
        // Mobile: record finger-down position
        onTouchStart={e => {
          const t = e.touches[0]
          touchStart.current = { x: t.clientX, y: t.clientY }
        }}
        // Mobile: only open lightbox if finger barely moved (tap, not swipe)
        onTouchEnd={e => {
          const t = e.changedTouches[0]
          const dx = Math.abs(t.clientX - touchStart.current.x)
          const dy = Math.abs(t.clientY - touchStart.current.y)
          if (dx < 8 && dy < 8) {
            // Suppress the synthetic click that would fire ~300ms later
            e.preventDefault()
            onOpen(item)
          }
          // dx/dy >= 8 → swipe; do nothing, scroll continues uninterrupted
        }}
        style={{
          ...baseStyle,
          cursor: 'zoom-in',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.03)'
          e.currentTarget.style.boxShadow = 'var(--shadow-3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <img
          src={item.src}
          alt={item.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
          loading="lazy"
          draggable="false"
        />
      </div>
    )
  }

  return (
    <div
      className="ad-card"
      style={{ ...baseStyle, background: 'var(--bg-elevated)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontSize: '11px', color: 'var(--text-4)', fontFamily: 'var(--font-sans)', textAlign: 'center', padding: '0 12px', lineHeight: '1.4' }}>{item.label}</span>
    </div>
  )
}

export default function AdShowcase() {
  // isPaused is ONLY controlled by lightbox open/close — nothing else
  const [lightbox, setLightbox] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const openLightbox = item => {
    setIsPaused(true)
    setLightbox(item)
  }

  const closeLightbox = () => {
    setLightbox(null)
    setIsPaused(false)
  }

  return (
    <section style={{ background: 'var(--bg-void)', padding: '80px 0' }}>
      <style>{`
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ad-card { width: 280px; }
        @media (max-width: 768px) { .ad-card { width: 220px; } }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', marginBottom: '40px' }}>
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
          CREATIVE WORK
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-1)', letterSpacing: '-0.03em' }}>
          Ads built to convert.
        </h2>
      </div>

      {/* Outer wrapper — no touch or hover handlers, overflow:hidden clips the track */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        }}
      >
        {/*
          Inner track: 10 cards (5 + 5 duplicate).
          marquee shifts -50% = exactly one set width, then loops seamlessly.
          animationPlayState toggled only by lightbox state.
        */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '16px',
            width: 'max-content',
            paddingBottom: '16px',
            paddingLeft: '24px',
            animation: 'marquee 35s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {LOOP_ITEMS.map((item, index) => (
            <AdCard key={`${item.id}-${index}`} item={item} onOpen={openLightbox} />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          label={lightbox.label}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
