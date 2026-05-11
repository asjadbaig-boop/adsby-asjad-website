import { useEffect, useRef } from 'react'

const TESTIMONIALS = [
  { quote: 'In a short span of time, he showed great enthusiasm, dedication, and ownership. His results-oriented approach made a real impact on the brands we worked with. Strong potential as a performance marketer.', name: 'Urvashi Rangwani', role: 'CEO, ABM' },
  { quote: 'He handled campaigns end to end, not just budgets, but the complete analytical side including audience strategy, optimisation, reporting, and problem-solving.', name: 'Zain Siddiqui', role: 'Founder, Startup Nebulla' },
  { quote: 'Asjad went above and beyond. Very impressed with his campaign management and the results. He exceeded my expectations to the point that I came back for another project.', name: 'Monuaf', role: 'Client' },
]

export default function Testimonials() {
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

  const handleTilt = (e) => {
    if (window.matchMedia('(hover: none)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    const y = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    e.currentTarget.style.transform = `perspective(600px) rotateX(${-x * 4}deg) rotateY(${y * 4}deg) translateY(-4px)`
  }

  const resetTilt = (e) => {
    e.currentTarget.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)'
    e.currentTarget.style.borderColor = 'var(--surface-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <section style={{ background: 'var(--canvas)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>WHAT CLIENTS SAY</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '48px' }}>What clients have <span className="headline-accent" ref={accentRef}>said.</span></h2>
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i}
              className="testimonial-card"
              style={{ background: 'var(--surface-raised)', border: '1px solid var(--surface-border)', padding: '28px', borderRadius: '0', transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 250ms ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(28,105,212,0.3)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(28,105,212,0.10)' }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--primary)', lineHeight: 1, marginBottom: '12px' }}>"</div>
              <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: '1.65', margin: '0 0 24px 0' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-border)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', fontWeight: '300', color: 'var(--ink-secondary)' }}>{t.role}</div>
                  <div style={{ fontSize: '11px', fontWeight: '400', color: 'var(--primary)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>✓</span>
                    <span>Verified client</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
