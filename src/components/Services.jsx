import { useState, useRef, useEffect } from 'react'

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

function Card({ title, body }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const innerRef = useRef(null)
  useEffect(() => { if (innerRef.current) setHeight(innerRef.current.scrollHeight) }, [])
  return (
    <div
      style={{ background: 'var(--surface-raised)', border: '1px solid var(--surface-border)', borderTop: '2px solid var(--primary)', padding: '24px', cursor: 'pointer', transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 0 1px rgba(28,105,212,0.4), 0 8px 32px rgba(28,105,212,0.08)'; e.currentTarget.style.borderColor = 'rgba(28,105,212,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--surface-border)' }}
    >
      <div onClick={() => setOpen(o => !o)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}>
        <span style={{ fontSize: '17px', fontWeight: '700', color: 'var(--ink)', fontFamily: 'inherit' }}>{title}</span>
        <span style={{ fontSize: '22px', fontWeight: '300', color: 'var(--primary)', lineHeight: 1, marginLeft: '16px', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 300ms ease', display: 'inline-block' }}>+</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingTop: '16px' }}>
          <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: '1.65', margin: 0 }}>{body}</p>
        </div>
      </div>
    </div>
  )
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
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '8px' }}>What I actually do for your <span className="headline-accent" ref={accentRef}>account.</span></h2>
        <div className="services__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {CARDS.map((card, i) => <Card key={i} {...card} />)}
        </div>
      </div>
    </section>
  )
}
