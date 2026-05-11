import { useEffect, useRef } from 'react'
import useMagnetic from '../hooks/useMagnetic'

const TOOLS = ['Meta', 'Pixel', 'GTM', 'GHL', 'WA', 'GA4', 'Ads']

export default function Hero() {
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)
  const headlineRef = useRef(null)

  useMagnetic(btn1Ref)
  useMagnetic(btn2Ref)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = headlineRef.current
    if (!el) return
    let rafId
    const tick = () => {
      el.style.transform = `translateY(${window.scrollY * -0.05}px)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

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
            <span>Meta Ads Media Buyer - Lead Generation Focus</span>
            <span className="hero__status-dot" />
            <span className="hero__status">Available</span>
          </div>

          <h1 ref={headlineRef} style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: '700', color: '#ffffff', lineHeight: '1.05', marginBottom: '16px', textAlign: 'center' }}>
            More leads.<br />
            Lower cost.<br />
            <span style={{ color: 'var(--primary)' }}>Guaranteed results.</span>
          </h1>

          <p style={{ fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '32px' }}>
            No lock-in. Results in 7 to 14 days. You deal with me directly, not an account manager.
          </p>

          <div className="hero__ctas">
            <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-primary" ref={btn1Ref}>Get My Free Ads Audit →</a>
            <a href="#results" className="btn-ghost hero__dark-btn" ref={btn2Ref}>See Proof ↓</a>
          </div>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '12px', textAlign: 'center' }}>
            Free. No commitment. Takes 2 minutes.
          </p>

          <div className="stats-strip" style={{
            display: 'inline-flex',
            alignItems: 'stretch',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            overflow: 'hidden',
            marginTop: '28px',
          }}>
            {[
              { value: '$200k+', label: 'Ad spend managed' },
              { value: '7,000+', label: 'Leads generated' },
              { value: '1.5+ yrs', label: 'Hands-on media buying' },
            ].map((stat, i) => (
              <div key={i} className="stats-strip-item" style={{
                padding: '14px 24px',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div className="stat-value" style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '3px',
                }}>{stat.value}</div>
                <div className="stat-label" style={{
                  fontSize: '11px',
                  fontWeight: '400',
                  color: 'rgba(255,255,255,0.4)',
                  whiteSpace: 'nowrap',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual snapshot-section" aria-hidden="true">
          <div className="hero-dashboard campaign-snapshot-card">
            <div className="hero-dashboard__top">
              <div>
                <span className="hero-dashboard__eyebrow">Live campaign snapshot</span>
                <strong>Lead gen system</strong>
              </div>
              <span className="hero-dashboard__pill">Optimising</span>
            </div>

            <div className="hero-dashboard__graph campaign-snapshot-chart">
              <span className="campaign-snapshot-bar" style={{ height: '42%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '58%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '51%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '72%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '64%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '86%' }} />
              <span className="campaign-snapshot-bar" style={{ height: '76%' }} />
            </div>

            <div className="hero-dashboard__metrics campaign-snapshot-metrics">
              <div>
                <span>Cost / lead</span>
                <strong>-38%</strong>
              </div>
              <div>
                <span>Lead volume</span>
                <strong>+124%</strong>
              </div>
            </div>

            <div className="hero-dashboard__list">
              {['Pixel checked', 'Creative fatigue monitored', 'Budget moved to winners'].map((item) => (
                <div key={item}>
                  <span />
                  {item}
                </div>
              ))}
            </div>
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
