import { useState, useEffect, useRef } from 'react'

const AD_CREATIVES = [
  { id: 10, type: 'youtube', label: 'Ad Short 1', videoId: 'ruD1CRPrNkU' },
  { id: 11, type: 'youtube', label: 'Ad Short 2', videoId: 'AMfprBkfXWc' },
  { id: 12, type: 'youtube', label: 'Ad Short 3', videoId: '7O-uL9yAp60' },
  { id: 1,  type: 'image',   label: 'Ad Creative 1', src: '/ads/Artboard 5.png' },
  { id: 2,  type: 'image',   label: 'Ad Creative 2', src: '/ads/Artboard 6.png' },
  { id: 3,  type: 'image',   label: 'Ad Creative 3', src: '/ads/Artboard 7.png' },
  { id: 7,  type: 'image',   label: 'Ad Creative 4', src: '/ads/1.png' },
  { id: 8,  type: 'image',   label: 'Ad Creative 5', src: '/ads/2.png' },
]

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

function YoutubeCard({ item }) {
  const src = `https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&controls=0&rel=0&modestbranding=1&playsinline=1`

  return (
    <div
      className="ad-card ad-card--shorts"
      style={{
        flexShrink: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid var(--border-1)',
      }}
    >
      <iframe
        src={src}
        title={item.label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        loading="lazy"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  )
}

function AdCard({ item, onOpen }) {
  const touchStart = useRef({ x: 0, y: 0 })

  const baseStyle = {
    height: '320px',
    borderRadius: '12px',
    overflow: 'hidden',
    flexShrink: 0,
    border: '1px solid var(--border-1)',
  }

  if (item.type === 'youtube') {
    return <YoutubeCard item={item} />
  }

  if (item.src && item.type === 'image') {
    return (
      <div
        className="ad-card"
        onClick={() => onOpen(item)}
        onTouchStart={e => {
          const t = e.touches[0]
          touchStart.current = { x: t.clientX, y: t.clientY }
        }}
        onTouchEnd={e => {
          const t = e.changedTouches[0]
          const dx = Math.abs(t.clientX - touchStart.current.x)
          const dy = Math.abs(t.clientY - touchStart.current.y)
          if (dx < 8 && dy < 8) {
            e.preventDefault()
            onOpen(item)
          }
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
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = item => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <section style={{ background: 'var(--bg-void)', padding: '80px 0' }}>
      <style>{`
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Image cards */
        .ad-card {
          width: 280px;
          scroll-snap-align: start;
        }

        /* YouTube Shorts cards — 9:16 aspect ratio */
        .ad-card--shorts {
          width: 280px;
          height: 498px;
        }

        @media (max-width: 768px) {
          .ad-card         { width: 220px; }
          .ad-card--shorts { width: 220px; height: 390px; }
        }

        .ad-scroll-hint-desktop { display: inline; }
        .ad-scroll-hint-mobile  { display: none; }
        @media (max-width: 768px) {
          .ad-scroll-hint-desktop { display: none; }
          .ad-scroll-hint-mobile  { display: inline; }
        }

        .ad-strip::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', marginBottom: '28px' }}>
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
          CREATIVE WORK
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-1)', letterSpacing: '-0.03em', marginBottom: '12px' }}>
          Ads built to convert.
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>
          <span className="ad-scroll-hint-desktop">Scroll to preview the ads we've created →</span>
          <span className="ad-scroll-hint-mobile">Swipe to preview the ads we've created →</span>
        </p>
      </div>

      {/* Horizontally scrollable strip — user-controlled */}
      <div
        className="ad-strip"
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            gap: '16px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '16px',
          }}
        >
          {AD_CREATIVES.map(item => (
            <AdCard key={item.id} item={item} onOpen={openLightbox} />
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
