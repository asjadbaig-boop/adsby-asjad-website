import { useState } from 'react'

const STEPS = [
  { n: '01', tab: 'Audit', title: "First look at what's wrong", body: "I go through your account and find what's wasting money. No deck, no presentation, just a straight answer on what to fix." },
  { n: '02', tab: 'Strategy', title: 'Plan before spending', body: 'Campaign objective, audience structure, creative direction, budget split, all mapped out before anything goes live.' },
  { n: '03', tab: 'Build', title: 'Structure everything properly', body: 'Creatives, copy, landing page notes, tracking setup, campaign structure, all built to the plan.' },
  { n: '04', tab: 'Launch', title: 'Monitor and move fast', body: 'Daily checks, budget moves, creative swaps when the numbers start slipping.' },
  { n: '05', tab: 'Report', title: 'Plain English every week', body: 'What changed, why it changed, and what comes next. Nothing inflated, nothing hidden.' },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section id="process" className="process-tabs-section" style={{ background: '#18161A', padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '16px' }}>HOW IT WORKS</p>
        <h2 className="reveal process-tabs__headline" style={{ '--delay': '80ms', fontSize: 'clamp(37px,4.6vw,60px)', color: '#ffffff', marginBottom: '38px' }}>
          A system, <span style={{ color: 'var(--red)' }}>not a service.</span>
        </h2>
        <div className="process-tabs">
          <div className="process-tabs__bar" role="tablist" aria-label="How it works">
            {STEPS.map((item, index) => (
              <button
                key={item.n}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={`process-tabs__tab${active === index ? ' is-active' : ''}`}
                onClick={() => setActive(index)}
              >
                <span>{item.n}</span>
                {item.tab}
              </button>
            ))}
          </div>
          <div className="process-tabs__panel" role="tabpanel">
            <span className="process-tabs__watermark">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
