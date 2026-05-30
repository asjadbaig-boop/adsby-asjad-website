import { useRef, useEffect, useState } from 'react'

const CAMPAIGNS = [
  {
    id: 1,
    name: 'Furniture Lead Gen',
    tag: 'Lead Generation',
    metric: 'CPL reduced significantly',
    pdfLink: '#',
    chartData: [
      { day: 'W1', cpl: 45, leads: 12 },
      { day: 'W2', cpl: 38, leads: 18 },
      { day: 'W3', cpl: 29, leads: 27 },
      { day: 'W4', cpl: 22, leads: 35 },
    ],
    improvement: '-51%',
    improvementLabel: 'CPL drop',
  },
  {
    id: 2,
    name: 'Insurance Campaign',
    tag: 'Insurance',
    metric: 'Consistent lead flow',
    pdfLink: '#',
    chartData: [
      { day: 'W1', cpl: 60, leads: 8 },
      { day: 'W2', cpl: 52, leads: 14 },
      { day: 'W3', cpl: 41, leads: 22 },
      { day: 'W4', cpl: 33, leads: 31 },
    ],
    improvement: '-45%',
    improvementLabel: 'CPL drop',
  },
  {
    id: 3,
    name: 'Event Registration',
    tag: 'Events',
    metric: 'High registration volume',
    pdfLink: '#',
    chartData: [
      { day: 'W1', cpl: 18, leads: 40 },
      { day: 'W2', cpl: 14, leads: 68 },
      { day: 'W3', cpl: 11, leads: 95 },
      { day: 'W4', cpl: 9, leads: 124 },
    ],
    improvement: '-50%',
    improvementLabel: 'CPR drop',
  },
  {
    id: 4,
    name: 'Zero to 383 Leads',
    tag: 'Lead Generation',
    metric: 'Full funnel from scratch',
    pdfLink: '#',
    chartData: [
      { day: 'W1', cpl: 0, leads: 0 },
      { day: 'W2', cpl: 55, leads: 28 },
      { day: 'W3', cpl: 38, leads: 72 },
      { day: 'W4', cpl: 28, leads: 110 },
    ],
    improvement: '+383',
    improvementLabel: 'Total leads',
  },
]

function MiniChart({ data }) {
  const max = Math.max(...data.map(d => d.leads))
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '48px', padding: '4px 0' }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', flex: 1 }}>
          <div style={{
            width: '100%',
            height: `${(d.leads / (max || 1)) * 40}px`,
            background: `rgba(232,41,30,${0.3 + (i / data.length) * 0.7})`,
            borderRadius: '3px 3px 0 0',
            transition: 'height 600ms cubic-bezier(0.16,1,0.3,1)',
            minHeight: '4px',
          }} />
          <span style={{ fontSize: '9px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)' }}>{d.day}</span>
        </div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: 'var(--bg-void)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>CAMPAIGN RESULTS</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-1)', marginBottom: '8px', letterSpacing: '-0.03em' }}>
          Campaigns we've run.
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '40px', fontFamily: 'var(--font-sans)' }}>Click any card to see the numbers.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {CAMPAIGNS.map((c) => (
            <a
              key={c.id}
              href={c.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-lg)', padding: '20px', boxShadow: 'var(--shadow-1)', cursor: 'pointer', transition: 'transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-3)'; e.currentTarget.style.borderColor = 'rgba(232,41,30,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.borderColor = 'var(--border-1)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: '700', color: '#E8291E', background: 'rgba(232,41,30,0.08)', padding: '3px 10px', borderRadius: '999px', marginBottom: '8px', letterSpacing: '0.04px', fontFamily: 'var(--font-sans)' }}>{c.tag}</span>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-1)', margin: 0, lineHeight: '1.3', fontFamily: 'var(--font-sans)' }}>{c.name}</h3>
                </div>
                <span style={{ fontSize: '18px', color: 'rgba(232,41,30,0.4)' }}>↗</span>
              </div>
              <MiniChart data={c.chartData} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-1)' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-2)', fontFamily: 'var(--font-sans)' }}>{c.metric}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '20px', color: '#E8291E', letterSpacing: '-0.03em' }}>{c.improvement}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)' }}>{c.improvementLabel}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ fontSize: '11px', color: 'var(--text-3)', textAlign: 'center', marginTop: '20px', fontFamily: 'var(--font-sans)' }}>
          To link real PDFs: update the <code>pdfLink</code> field in the CAMPAIGNS array with your Google Drive share links.
        </p>
      </div>
    </section>
  )
}
