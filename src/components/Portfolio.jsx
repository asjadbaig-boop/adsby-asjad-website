import { useEffect, useRef } from 'react'

const CASES = [
  {
    tag: 'Lead Generation',
    headline: 'Real estate brand scales to 800 leads in 60 days',
    metrics: [
      { value: '800+', label: 'Leads Generated' },
      { value: '62%', label: 'CPL Reduction' },
    ],
    desc: 'Rebuilt the campaign structure and fixed a pixel misfiring on form submissions. Overhauled the creative stack. Lead volume tripled in four weeks.',
  },
  {
    tag: 'E-Commerce',
    headline: 'Fashion brand hits 3.8x ROAS on a modest budget',
    metrics: [
      { value: '3.8x', label: 'Return on Ad Spend' },
      { value: '41%', label: 'Lower CPA' },
    ],
    desc: 'Found audience overlap across 11 ad sets and consolidated the campaigns. Introduced UGC creative. Cost per purchase dropped by half.',
  },
  {
    tag: 'Live Events',
    headline: 'Coaching launch fills 400 webinar seats in 7 days',
    metrics: [
      { value: '400', label: 'Seats Filled' },
      { value: '7 days', label: 'Campaign Window' },
    ],
    desc: 'Full funnel from cold traffic to registration. Video hooks tested across three formats. Retargeting sequence turned 60% of registrants into live attendees.',
  },
  {
    tag: 'Local Services',
    headline: 'Home services brand cuts cost per lead below $4',
    metrics: [
      { value: '$3.80', label: 'Cost Per Lead' },
      { value: '5x', label: 'Lead Volume Increase' },
    ],
    desc: 'Geo-targeted campaigns with hyper-local creative. Replaced generic stock imagery with real project photos. Quality score improved, CPL dropped immediately.',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const accentRef = useRef(null)

  useEffect(() => {
    const el = accentRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible')
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        obs.disconnect()
      }
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = section.querySelectorAll('.portfolio-card')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach((card) => card.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      cards.forEach((card) => card.classList.add('visible'))
      obs.disconnect()
    }, { threshold: 0.15 })
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} style={{ background: 'var(--surface)', padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'relative' }}>
        <div className="dot-grid" aria-hidden="true" />
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>RESULTS</p>
          <h2 className="reveal" style={{ '--delay': '80ms', fontSize: 'clamp(32px,4.6vw,51px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Campaigns <span className="headline-accent" ref={accentRef}>we've run.</span>
          </h2>
          <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {CASES.map((item, index) => (
              <div
                key={item.headline}
                className="portfolio-card"
                style={{ transitionDelay: `${index * 100}ms`, background: 'var(--surface-raised)', border: '1px solid var(--surface-border)', padding: '32px' }}
                onMouseEnter={(event) => { event.currentTarget.style.transform = 'translateY(-4px)'; event.currentTarget.style.boxShadow = '0 12px 40px rgba(28,105,212,0.12)'; event.currentTarget.style.borderColor = 'rgba(28,105,212,0.3)' }}
                onMouseLeave={(event) => { event.currentTarget.style.transform = 'translateY(0)'; event.currentTarget.style.boxShadow = 'none'; event.currentTarget.style.borderColor = 'var(--surface-border)' }}
              >
                <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>{item.tag}</p>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '20px' }}>{item.headline}</h3>
                <div style={{ display: 'flex', gap: '32px', marginBottom: '20px' }}>
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary)', letterSpacing: '-0.5px', lineHeight: 1 }}>{metric.value}</div>
                      <div style={{ fontSize: '12px', fontWeight: '300', color: 'var(--ink-muted)', marginTop: '4px' }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '14px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
