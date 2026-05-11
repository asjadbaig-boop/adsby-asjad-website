import { useEffect, useRef, useState } from 'react'

const TICKER_ITEMS = [
  'Audience Fatigue Detection',
  'Creative Testing',
  'Budget Reallocation',
  'Landing Page Audits',
  'CPR Optimisation',
  'Conversion Tracking',
  'Campaign Architecture',
]

const stats = [
  { raw: -70, display: '-70%', label: 'Cost per registration dropped overnight after one landing page fix', category: 'COST PER LEAD' },
  { raw: 480, display: '+480%', label: 'More registrations day over day after a creative and structure overhaul', category: 'REGISTRATION VOLUME' },
  { raw: 124, display: '+124%', label: 'Higher landing page conversion rate, same traffic, better funnel', category: 'LANDING PAGE CONVERSION' },
  { raw: -79, display: '-79%', label: 'Lower cost per result compared to the previous campaign on the same audience', category: 'CPR VS PREVIOUS CAMPAIGN' },
]

const animateCount = (el, target, isNegative, suffix) => {
  const start = performance.now()
  const duration = 1200
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(ease * target)
    el.textContent = `${isNegative ? '-' : '+'}${current}${suffix}`
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

function StatItem({ stat }) {
  const numRef = useRef(null)
  return (
    <div className="stat reveal-item results-stat-item">
      <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>{stat.category}</div>
      <div
        className="stat__number results-stat-number"
        ref={numRef}
        data-value={Math.abs(stat.raw)}
        data-negative={stat.raw < 0}
        data-suffix="%"
      >
        {stat.display}
      </div>
      <div className="stat__rule results-stat-rule" />
      <p className="stat__label results-stat-label">{stat.label}</p>
    </div>
  )
}

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-band reveal-item" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, index) => <span className="ticker-item" key={`${item}-${index}`}>{item}</span>)}
      </div>
    </div>
  )
}

export default function Results() {
  const sectionRef = useRef(null)
  const h2Ref = useRef(null)
  const statsRef = useRef(null)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const el = h2Ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const container = sectionRef.current
    if (!container) return
    const els = container.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const container = sectionRef.current
    if (!container) return
    const items = container.querySelectorAll('.reveal-item')
    items.forEach((item, index) => { item.style.transitionDelay = `${index * 80}ms` })
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' })
    items.forEach((item) => obs.observe(item))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const numbers = Array.from(section.querySelectorAll('.results-stat-number'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      numbers.forEach((el) => {
        const target = Number(el.dataset.value)
        const isNegative = el.dataset.negative === 'true'
        const suffix = el.dataset.suffix || ''
        el.textContent = `${isNegative ? '-' : '+'}${target}${suffix}`
      })
      return
    }
    let started = false
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      numbers.forEach((el) => {
        animateCount(
          el,
          Number(el.dataset.value),
          el.dataset.negative === 'true',
          el.dataset.suffix || ''
        )
      })
      obs.disconnect()
    }, { threshold: 0.25 })
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  const handleStatsScroll = () => {
    const el = statsRef.current
    if (!el) return
    const itemWidth = el.scrollWidth / stats.length
    const newActive = Math.min(Math.round(el.scrollLeft / itemWidth), stats.length - 1)
    setActiveDot(newActive)
  }

  return (
    <section className="results results-section" id="results" ref={sectionRef}>
      <div className="container">
        <div className="results__header">
          <span className="section-label reveal" style={{ '--delay': '0ms' }}>Results</span>
          <h2 className="results__headline h2-reveal" ref={h2Ref}>What actually moved.</h2>
        </div>
        <div className="results__stats results-stats" ref={statsRef} onScroll={handleStatsScroll}>
          {stats.map((stat) => <StatItem key={stat.display} stat={stat} />)}
        </div>
        <div className="results-dots" aria-hidden="true">
          {stats.map((_, index) => (
            <span key={index} className={`results-dot${index === activeDot ? ' active' : ''}`} />
          ))}
        </div>
        <div className="results__quote results-quote reveal" style={{ '--delay': '0ms' }}>
          <blockquote className="results__blockquote">
            "One landing page change cut the cost per registration by 70% overnight. The ad did not change. The budget did not change. The form did."
          </blockquote>
          <p className="results__attribution">Ken &amp; Anna Live Session Campaign</p>
        </div>
      </div>
      <Ticker />
    </section>
  )
}
