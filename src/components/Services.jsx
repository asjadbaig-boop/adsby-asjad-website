import { useRef, useEffect } from 'react'

const CARDS = [
  {
    title: 'Strategy & Account Setup',
    body: 'I build the account structure before anything goes live. Objectives, audiences, pixel, and tracking all sorted before a single dollar is spent.',
  },
  {
    title: 'Creative & Ad Production',
    body: 'Creatives built around what the data says converts, not what looks good in a deck. Hook first, format second.',
  },
  {
    title: 'Ongoing Management',
    body: 'Daily checks, budget moves, and creative swaps when the numbers start slipping. The work that keeps a campaign alive week after week.',
  },
  {
    title: 'Email, SMS & WhatsApp Automation',
    body: 'Follow-up sequences and re-engagement flows connected to your campaigns, all built inside GoHighLevel.',
  },
  {
    title: 'Live Event Campaigns',
    body: 'Full paid campaign for your live session. Strategy, landing page, daily management. You deliver, I fill the room.',
  },
  {
    title: 'Transparent Reporting',
    body: 'Weekly report. What the money did, what changed, what I am doing about it. Nothing inflated, nothing hidden.',
  },
]

function ServiceIcon({ type }) {
  const common = {
    width: 80,
    height: 80,
    viewBox: '0 0 80 80',
    fill: 'none',
    stroke: 'rgba(28,105,212,0.6)',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  const icons = {
    strategy: <><circle cx="40" cy="40" r="27" /><circle cx="40" cy="40" r="15" /><circle cx="40" cy="40" r="4" /></>,
    creative: <><rect x="17" y="22" width="46" height="36" rx="5" /><path d="M36 32l15 8-15 8V32z" /></>,
    management: <><path d="M18 58h44" /><path d="M24 52V39" /><path d="M38 52V31" /><path d="M52 52V24" /><path d="M22 32l12-8 12 5 14-13" /></>,
    automation: <path d="M44 12 23 44h16l-3 24 21-36H41l3-20z" />,
    events: <><rect x="18" y="20" width="44" height="42" rx="5" /><path d="M28 14v12M52 14v12M18 32h44" /><path d="m40 41 2.5 5 5.5.8-4 3.8.9 5.4-4.9-2.6-4.9 2.6.9-5.4-4-3.8 5.5-.8L40 41z" /></>,
    reporting: <><path d="M26 14h21l9 9v43H26z" /><path d="M47 14v10h9" /><path d="M34 36h14M34 46h14M34 56h9" /></>,
  }
  return <svg {...common}>{icons[type]}</svg>
}

export default function Services() {
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
    <section id="services" style={{ background: 'var(--surface)', padding: '80px 0', position: 'relative' }}>
      <div className="dot-grid" aria-hidden="true" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>WHAT I DO</p>
        <h2 className="services-feature__headline" style={{ fontSize: 'clamp(37px, 5.75vw, 60px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '28px', lineHeight: 1 }}>
          What I actually do <span className="headline-accent" ref={accentRef}>for your account.</span>
        </h2>
        <div className="services-feature__list">
          {CARDS.map((card, index) => (
            <div className={`services-feature__row${index % 2 ? ' services-feature__row--flip' : ''}`} key={card.title}>
              <div className="services-feature__text">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className="services-feature__icon">
                <ServiceIcon type={['strategy', 'creative', 'management', 'automation', 'events', 'reporting'][index]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
