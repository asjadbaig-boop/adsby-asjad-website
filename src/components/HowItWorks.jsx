const STEPS = [
  {
    n: '01',
    title: 'Audit & Strategy',
    body: "I go through your account and find what's wasting money. No deck, no presentation, just a straight answer on what to fix.",
  },
  {
    n: '02',
    title: 'Build & Launch',
    body: 'Pixel and CAPI sorted. Creatives tested in batches. Full campaign structure built around what converts, not what looks active.',
  },
  {
    n: '03',
    title: 'Optimise & Report',
    body: 'A system that runs, gets monitored, and improves. Spend scales without the cost per lead climbing with it.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" style={{ background: '#0d0d0d', padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        <div className="how-it-works__grid how-it-works-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="how-it-works-left">
            <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>HOW IT WORKS</p>
            <h2 className="reveal" style={{ '--delay': '80ms', fontSize: 'clamp(32px,4vw,52px)', fontWeight: '700', color: '#ffffff', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: '24px' }}>
              A system,<br />not a service.
            </h2>
            <div className="reveal" style={{ '--delay': '160ms' }}>
              <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>Get Started -&gt;</a>
            </div>
          </div>
          <div className="how-it-works-cards" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {STEPS.map((step, index) => (
              <div
                key={step.n}
                className="reveal how-it-works-card"
                style={{ '--delay': `${index * 120}ms`, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '2px solid var(--primary)', padding: '24px 28px' }}
              >
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', letterSpacing: '1px', marginBottom: '8px' }}>{step.n}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '10px', lineHeight: 1.2 }}>{step.title}</div>
                <p style={{ fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
