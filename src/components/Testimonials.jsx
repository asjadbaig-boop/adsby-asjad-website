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

  return (
    <section className="testimonials-wall-section" style={{ background: 'var(--bg-base)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>WHAT CLIENTS SAY</p>
        <h2 style={{ fontSize: 'clamp(32px, 4.6vw, 46px)', fontWeight: '900', color: 'var(--text-1)', marginBottom: '48px', lineHeight: 1 }}>
          What clients have <span className="headline-accent" ref={accentRef}>said.</span>
        </h2>
        <div className="testimonials-grid testimonials-wall">
          {TESTIMONIALS.map((t, index) => (
            <div key={t.name} className={`testimonial-card testimonial-card--${index + 1}`}>
              <div className="testimonial-card__quote">"</div>
              <p>{t.quote}</p>
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__role">{t.role}</div>
                <div className="testimonial-card__verified">Verified client</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
