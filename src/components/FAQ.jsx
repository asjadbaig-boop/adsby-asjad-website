import { useState, useRef, useEffect } from 'react'

const FAQS = [
  {
    q: 'How quickly will I see results?',
    a: 'Usually 7 to 14 days before the numbers start moving. Full system settled in 3 to 4 weeks. You get a real report in week one, not a holding update.',
  },
  {
    q: 'What if my ads are already running?',
    a: "Daily I check the numbers, pause what's losing, scale what's winning. Weekly I test new creatives and send a report. Every two weeks I send a strategy update.",
  },
  {
    q: 'How do you access my account?',
    a: 'You add my Business Manager ID as a partner — 5 minutes in Business Settings. I get Manage Ads permission only. No passwords, no personal account access. Full control stays with you.',
  },
  {
    q: 'Am I locked into a contract?',
    a: "Monthly. Cancel with a week's notice. Everything gets handed back, campaigns, pixels, audiences, all of it. Nothing kept.",
  },
  {
    q: 'What makes this different from hiring an agency?',
    a: "No agency markup. No account manager in the middle. You talk to the person running your ads, and that person is focused on one thing, lowering your cost per lead.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const innerRef = useRef(null)
  useEffect(() => { if (innerRef.current) setHeight(innerRef.current.scrollHeight) }, [])
  return (
    <div style={{ borderTop: '1px solid var(--hairline)' }}>
      <div onClick={() => setOpen((value) => !value)} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', userSelect: 'none' }}>
        <span style={{ fontSize: '17px', fontWeight: '600', color: 'var(--ink)', flex: 1, fontFamily: 'inherit' }}>{q}</span>
        <span style={{ fontSize: '16px', color: 'var(--primary)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease', display: 'inline-block' }}>v</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingBottom: '22px' }}>
          <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: '1.65', margin: 0 }}>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
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
    <section style={{ background: 'var(--surface)', padding: '80px 0' }}>
      <div className="faq-inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>FAQ</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '48px' }}>Questions I get <span className="headline-accent" ref={accentRef}>asked.</span></h2>
        {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
        <div style={{ borderTop: '1px solid var(--hairline)' }} />
      </div>
    </section>
  )
}
