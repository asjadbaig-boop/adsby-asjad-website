import { useState } from 'react'

const PROBLEMS = [
  {
    n: '01',
    title: "Budget going out, nothing coming back",
    body: 'You check the account every morning and the spend keeps climbing. But the leads are either not coming or not converting. Something is wrong but nobody can tell you exactly what.',
  },
  {
    n: '02',
    title: "Works for two weeks, then dies, no one knows why",
    body: 'The first week looks great. Then costs start creeping up, leads slow down, and by week three the whole thing feels like it is on life support. Nobody changes anything and nobody knows why it stopped working.',
  },
  {
    n: '03',
    title: "Form fills that never pick up",
    body: 'People are submitting the form. The numbers look okay on paper. But when the sales team calls, half the numbers are wrong and the other half never answer. The leads exist but they are not real.',
  },
  {
    n: '04',
    title: "Two hours a day just checking what is working",
    body: 'Someone on your team is opening the ads manager every morning, staring at numbers, trying to figure out what to pause and what to keep running. That is two hours of your day going into a task that should take ten minutes.',
  },
  {
    n: '05',
    title: "Reports that tell you nothing useful",
    body: 'You get a PDF or a spreadsheet at the end of the month. It has a lot of numbers in it. But when you try to understand what actually happened and what should change next month, there is no clear answer.',
  },
]

function ProblemItem({ n, title, body }) {
  const [open, setOpen] = useState(false)
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
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '400px' : '0px',
        transition: 'max-height 400ms ease',
      }}>
        <div style={{ padding: '16px 0 24px 0' }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: '1.65',
            margin: 0,
          }}>{body}</p>
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
