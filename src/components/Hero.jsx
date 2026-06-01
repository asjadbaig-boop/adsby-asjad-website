import { useRef } from 'react'
import useMagnetic from '../hooks/useMagnetic'

const TOOLS = ['Meta', 'Pixel', 'GTM', 'GHL', 'WA', 'GA4', 'Ads']

export default function Hero() {
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useMagnetic(btn1Ref)
  useMagnetic(btn2Ref)

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__tools" aria-hidden="true">
        {TOOLS.map((tool, index) => (
          <span key={tool} style={{ '--i': index }}>{tool}</span>
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__identity hero-identity-pill">
            <div className="hero__avatar">A</div>
            <span>Meta Ads Media Buyer · Lead Generation Focus</span>
            <span className="hero__status-dot" />
            <span className="hero__status">Available</span>
          </div>

          <h1 className="hero__headline">
            More leads.<br />
            <span style={{ color: 'var(--red)' }}>Lower cost.</span><br />
            Guaranteed results.
          </h1>

          <p className="hero__subline">
            No lock-in. Results in 7 to 14 days. You deal with me directly, not an account manager.
          </p>

          <div className="hero__ctas">
            <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-primary" ref={btn1Ref}>Get My Free Ads Audit →</a>
            <a href="#results" className="btn-ghost hero__dark-btn" ref={btn2Ref}>See Proof ↓</a>
          </div>

          <p className="hero__microcopy">
            Free. No commitment. Takes 2 minutes.
          </p>

          {/* Mobile founder photo — hidden on desktop */}
          <div
            className="hero-mobile-photo"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '28px',
              marginTop: '20px',
            }}
          >
            <div style={{
              position: 'relative',
              width: '170px',
              height: '220px',
            }}>
              {/* Glow behind image */}
              <div style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '24px',
                background: 'radial-gradient(ellipse at center, rgba(232,41,30,0.35) 0%, rgba(232,41,30,0.1) 50%, transparent 75%)',
                zIndex: 0,
                filter: 'blur(8px)',
              }} />
              {/* Photo container */}
              <div style={{
                position: 'relative',
                width: '170px',
                height: '220px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid rgba(232,41,30,0.3)',
                boxShadow: '0 0 0 1.5px rgba(232,41,30,0.35), 0 8px 32px rgba(232,41,30,0.25), 0 24px 64px rgba(0,0,0,0.45)',
                animation: 'heroFloat 4s ease-in-out infinite',
                zIndex: 1,
                background: 'rgba(255,255,255,0.04)',
              }}>
                <img
                  src="/asjadbaigimage.jpg"
                  alt="Asjad"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transform: 'scale(1.14)',
                    transformOrigin: 'top center',
                    display: 'block',
                  }}
                  onError={e => {
                    e.target.src = '/asjadbaigimage.png'
                    e.target.onerror = () => {
                      e.target.src = '/asjadbaigimage.webp'
                      e.target.onerror = () => { e.target.style.display = 'none' }
                    }
                  }}
                />
                {/* Red inner glow overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(232,41,30,0.08) 0%, transparent 50%, rgba(232,41,30,0.06) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }} />
                {/* Subtle gradient overlay at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(24,22,26,0.6), transparent)',
                  zIndex: 2,
                }} />
                {/* Available badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(24,22,26,0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: '10px', fontWeight: '600', color: '#ffffff', fontFamily: 'var(--font-sans)' }}>Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            {[
              { value: '$200k+', label: 'Ad spend managed' },
              { value: '7,000+', label: 'Leads generated' },
              { value: '3+', label: 'Years experience' },
            ].map((stat, i) => (
              <div key={i} className="stats-strip-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual hero-bento" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }} aria-hidden="true">
          <div style={{
            width: '100%',
            maxWidth: '340px',
            aspectRatio: '3/4',
            borderRadius: 'var(--r-xl)',
            overflow: 'hidden',
            background: 'rgba(0,0,0,0.04)',
            border: '1px solid var(--border-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <img
              src="/asjadbaigimage.jpg"
              alt="Asjad"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              onError={e => {
                e.target.src = '/asjadbaigimage.png'
                e.target.onerror = () => {
                  e.target.src = '/asjadbaigimage.webp'
                  e.target.onerror = () => { e.target.style.display = 'none' }
                }
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: '#E8291E', fontSize: '14px' }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)', margin: 0, textAlign: 'center' }}>
              Trusted by 10+ clients across India &amp; UK
            </p>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  )
}
