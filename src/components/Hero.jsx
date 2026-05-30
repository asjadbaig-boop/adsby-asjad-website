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

          <div className="stats-strip">
            {[
              { value: '$200k+', label: 'Ad spend managed' },
              { value: '7,000+', label: 'Leads generated' },
              { value: '1.5+ yrs', label: 'Hands-on media buying' },
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
              src="/profile.jpg"
              alt="Asjad"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div style={{ textAlign: 'center', padding: '24px', position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '48px', color: 'var(--text-4)' }}>A</div>
              <p style={{ fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)', margin: 0 }}>Add profile.jpg to /public</p>
            </div>
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
