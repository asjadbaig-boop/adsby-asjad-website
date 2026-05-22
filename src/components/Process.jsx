import { useState, useRef, useEffect } from 'react'

const STEPS = [
  { n: '01', title: 'Audit', body: 'First thing I do is look at what is already running. What is spending, what is converting, what is wasting budget, and what the data is actually trying to say.' },
  { n: '02', title: 'Strategy', body: 'Campaign objective, audience structure, creative direction, and budget split all get mapped out before anything goes live.' },
  { n: '03', title: 'Build', body: 'Creatives, copy, landing page notes, tracking setup, and campaign structure all get built to the plan.' },
  { n: '04', title: 'Launch & Optimise', body: 'Daily monitoring, early signal reads, budget reallocation, and creative changes when the data asks for them.' },
  { n: '05', title: 'Report', body: 'Every week, a plain-English breakdown of what changed, why it changed, and what is next.' },
]

function Step({ n, title, body, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  const [height, setHeight] = useState(0)
  const innerRef = useRef(null)
  useEffect(() => { if (innerRef.current) setHeight(innerRef.current.scrollHeight) }, [])
  return (
    <div style={{ borderTop: '1px solid var(--border-1)' }}>
      <div onClick={() => setOpen((value) => !value)} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', userSelect: 'none' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: '700', color: 'var(--red)', letterSpacing: '1px', minWidth: '28px', flexShrink: 0 }}>{n}</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: '700', color: 'var(--text-1)', flex: 1 }}>{title}</span>
        <span style={{ fontSize: '16px', color: 'var(--red)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease', display: 'inline-block' }}>v</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingBottom: '22px', paddingLeft: '48px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: '300', color: 'var(--text-2)', lineHeight: '1.65', margin: 0, borderLeft: '2px solid var(--red)', paddingLeft: '16px' }}>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--bg-void)', padding: '80px 0' }}>
      <div className="process-inner" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>HOW IT WORKS</p>
        <h2 style={{ fontSize: 'clamp(37px, 5.75vw, 60px)', color: 'var(--text-1)', marginBottom: '48px', lineHeight: 1 }}>A system, <span style={{ color: 'var(--red)' }}>not a service.</span></h2>
        {STEPS.map((step) => <Step key={step.n} {...step} defaultOpen={step.n === '01'} />)}
        <div style={{ borderTop: '1px solid var(--border-1)' }} />
      </div>
    </section>
  )
}
