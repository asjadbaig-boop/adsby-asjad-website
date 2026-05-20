import { useRef } from 'react'
import useMagnetic from '../hooks/useMagnetic'

const TOOLS = ['Meta', 'Pixel', 'GTM', 'GHL', 'WA', 'GA4', 'Ads']
const BENTO = [
  { label: 'CPL reduced', value: '-70%', tag: 'Live campaign' },
  { label: 'Lead volume', value: '+480%', tag: 'After optimisation' },
  { label: 'LP conversion', value: '+124%', tag: 'Same traffic' },
  { label: 'vs prev campaign', value: '-79%', tag: 'CPR improvement' },
]

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
            <span>Meta Ads Media Buyer - Lead Generation Focus</span>
            <span className="hero__status-dot" />
            <span className="hero__status">Available</span>
          </div>

          <h1 className="hero__headline">
            More leads.<br />
            <span style={{ color: 'var(--primary)' }}>Lower cost.</span><br />
            Guaranteed results.
          </h1>

          <p className="hero__subline">
            No lock-in. Results in 7 to 14 days. You deal with me directly, not an account manager.
          </p>

          <div className="hero__ctas">
            <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-primary" ref={btn1Ref}>Get My Free Ads Audit &rarr;</a>
            <a href="#results" className="btn-ghost hero__dark-btn" ref={btn2Ref}>See Proof &darr;</a>
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

        <div className="hero__visual hero-bento" aria-hidden="true">
          {BENTO.map((item) => (
            <div className="hero-bento__card" key={item.label}>
              <span className="hero-bento__tag">{item.tag}</span>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  )
}
