import { useState, useRef, useEffect } from 'react'

const PROBLEMS = [
  {
    n: '01',
    title: "Budget going out, nothing coming back",
    body: 'Duplicate events, browser extensions blocking fires, and mismatched domains silently inflate your conversions. You optimise for ghost leads and wonder why cost per qualified lead keeps rising.',
  },
  {
    n: '02',
    title: "Works for two weeks, then dies, no one knows why",
    body: 'Retargeting the same person four times from three campaigns. You bid against yourself, inflate CPMs, and burn spend on an audience that already converted or already said no.',
  },
  {
    n: '03',
    title: "Form fills that never pick up",
    body: 'Frequency climbs past 3, CTR quietly drops, CPM ticks up. No alert fires. You keep running the ad that worked in week one while it silently kills your month-two numbers.',
  },
  {
    n: '04',
    title: "Two hours a day just checking what's working",
    body: 'Auction costs shift daily. Competitors enter, audiences saturate, relevance scores fall. Without daily checks, you see the damage in the monthly report, not when you could still fix it.',
  },
  {
    n: '05',
    title: "Reports that tell you nothing useful",
    body: 'A 6-second load time. An eight-field form. A headline that says something different to the ad. The page gets the traffic and kills it. Ads take the blame.',
  },
]

function ProblemItem({ n, title, body }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const innerRef = useRef(null)
  useEffect(() => { if (innerRef.current) setHeight(innerRef.current.scrollHeight) }, [])
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderLeft: open ? '2px solid var(--primary)' : '2px solid transparent', transition: 'border-color 300ms ease' }}>
      <div
        onClick={() => setOpen((value) => !value)}
        style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', userSelect: 'none' }}
      >
        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', letterSpacing: '1px', minWidth: '28px', flexShrink: 0 }}>{n}</span>
        <span style={{ fontSize: '17px', fontWeight: '600', color: '#ffffff', flex: 1, fontFamily: 'inherit', lineHeight: 1.3 }}>{title}</span>
        <span style={{ fontSize: '16px', color: 'var(--primary)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 300ms ease', display: 'inline-block' }}>v</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingBottom: '22px', paddingLeft: '48px' }}>
          <p style={{ fontSize: '15px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: '1.65', margin: 0, borderLeft: '2px solid var(--primary)', paddingLeft: '16px' }}>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default function HiddenProblems() {
  return (
    <section style={{ background: '#0d0d0d', padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p className="reveal" style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>THE REAL PROBLEMS</p>
        <h2 className="reveal" style={{ '--delay': '80ms', fontSize: 'clamp(28px,4vw,44px)', fontWeight: '700', color: '#ffffff', marginBottom: '16px', letterSpacing: '-1px', lineHeight: 1.1 }}>
          Your ads are running. The leads just <span style={{ color: 'var(--primary)' }}>aren't showing up.</span>
        </h2>
        <div className="reveal" style={{ '--delay': '160ms' }}>
          {PROBLEMS.map((problem) => <ProblemItem key={problem.n} {...problem} />)}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
        </div>
      </div>
    </section>
  )
}
