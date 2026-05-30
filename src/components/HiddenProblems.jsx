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
    <div style={{ background: open ? 'var(--red-dim)' : 'rgba(255,255,255,0.03)', border: open ? '1px solid rgba(232,41,30,0.2)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--r-md)', marginBottom: '8px', transition: 'background 300ms ease, border-color 300ms ease', padding: '0 16px' }}>
      <div
        onClick={() => setOpen((value) => !value)}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '22px 0', cursor: 'pointer', userSelect: 'none' }}
      >
        <span style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(232,41,30,0.15)',
          border: '1px solid rgba(232,41,30,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: '10px',
          color: '#E8291E',
          fontWeight: '700',
        }}>✕</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: '600', color: '#ffffff', flex: 1 }}>{title}</span>
        <span style={{ color: '#E8291E', fontSize: '18px', transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 300ms ease', display: 'inline-block', flexShrink: 0 }}>+</span>
      </div>
      <div style={{ overflow: 'hidden', maxHeight: open ? `${height}px` : '0px', transition: 'max-height 350ms ease' }}>
        <div ref={innerRef} style={{ paddingBottom: '22px', paddingLeft: '48px' }}>
          <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--text-3)', lineHeight: '1.65', margin: 0 }}>{body}</p>
        </div>
      </div>
    </div>
  )
}

export default function HiddenProblems() {
  return (
    <section style={{ background: '#18161A', padding: '80px 0', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p className="reveal" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px' }}>THE REAL PROBLEMS</p>
        <h2 className="reveal" style={{ '--delay': '80ms', fontSize: 'clamp(28px,4vw,44px)', color: '#ffffff', marginBottom: '24px' }}>
          Your ads are running. The leads just <span style={{ color: 'var(--red)' }}>aren't showing up.</span>
        </h2>
        <div className="reveal" style={{ '--delay': '160ms' }}>
          {PROBLEMS.map((problem) => <ProblemItem key={problem.n} {...problem} />)}
          <div style={{
            marginTop: '40px',
            padding: '24px 28px',
            background: 'rgba(232,41,30,0.08)',
            border: '1px solid rgba(232,41,30,0.2)',
            borderRadius: 'var(--r-md)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 3vw, 22px)',
              color: '#ffffff',
              margin: 0,
              lineHeight: '1.4',
              letterSpacing: '-0.01em',
            }}>
              You don't have an ads problem.{' '}
              <span style={{ color: '#E8291E' }}>You have a strategy problem.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
