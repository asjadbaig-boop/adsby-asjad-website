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
    <div style={{ borderTop: '1px solid var(--border-1)' }}>
      <div onClick={() => setOpen((value) => !value)} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', userSelect: 'none' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: '600', color: 'var(--text-1)', flex: 1 }}>{q}</span>
        <span style={{ fontSize: '16px', color: 'var(--red)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease', display: 'inline-block' }}>v</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingBottom: '22px', borderLeft: open ? '2px solid var(--red)' : 'none', paddingLeft: open ? '16px' : '0' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: '300', color: 'var(--text-2)', lineHeight: '1.65', margin: 0 }}>{a}</p>
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
    <section style={{ background: 'var(--bg-elevated)', padding: '80px 0' }}>
      <div className="faq-inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>FAQ</p>
        <h2 style={{ fontSize: 'clamp(32px, 4.6vw, 46px)', color: 'var(--text-1)', marginBottom: '48px', lineHeight: 1 }}>Questions I get <span className="headline-accent" ref={accentRef}>asked.</span></h2>
        {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
        <div style={{ borderTop: '1px solid var(--border-1)' }} />
      </div>
    </section>
  )
}
