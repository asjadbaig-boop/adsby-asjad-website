import { useState, useEffect } from 'react'

const STAT_CARDS = [
  { label: 'Total Leads', value: '311', sub: 'All time' },
  { label: 'Avg CPL', value: '$3.28', sub: 'Per lead' },
  { label: 'Total Spend', value: '$1,019', sub: 'Campaign' },
]

const CHART_BARS = [
  { week: 'W1', pct: 28 },
  { week: 'W2', pct: 46 },
  { week: 'W3', pct: 65 },
  { week: 'W4', pct: 84 },
  { week: 'W5', pct: 100 },
]

const TABLE_ROWS = [
  { date: 'May 28', leads: '74', cpl: '$3.41', spend: '$252' },
  { date: 'May 29', leads: '89', cpl: '$3.18', spend: '$283' },
  { date: 'May 30', leads: '91', cpl: '$3.24', spend: '$295' },
]

const DASHBOARD_URL = 'https://adsbyadsjad-dashboard.vercel.app/'

export default function DashboardPreview() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = e => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section style={{ background: 'var(--bg-base)', padding: isMobile ? '56px 0' : '80px 0' }}>
      {/* Keyframe for live dot pulse */}
      <style>{`
        @keyframes liveDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 24px' }}>

        {/* Section header */}
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>
          CLIENT TOOLS
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-1)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
          Your ads data. <span style={{ color: '#E8291E' }}>Always visible.</span>
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-2)', marginBottom: isMobile ? '32px' : '48px', fontFamily: 'var(--font-sans)', fontWeight: '300', maxWidth: '520px', lineHeight: '1.65' }}>
          Every client gets private access to a live performance dashboard, no Ads Manager login needed. Just clean data, daily.
        </p>

        {/*
          Outer positioning context for the floating badge.
          paddingTop creates room so the badge can sit above the card edge
          without being clipped by the card's overflow:hidden.
        */}
        <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto 32px', paddingTop: '20px' }}>

          {/* LIVE PREVIEW badge — floats above the top-right corner of the card */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            background: '#E8291E',
            borderRadius: 'var(--r-full)',
            padding: '5px 14px',
            boxShadow: '0 2px 12px rgba(232,41,30,0.35)',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              flexShrink: 0,
              animation: 'liveDotPulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>
              Live Preview
            </span>
          </div>

          {/* Browser mockup shell */}
          <div style={{
            width: '100%',
            borderRadius: 'var(--r-xl)',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-2)',
            boxShadow: 'var(--shadow-4)',
          }}>

            {/* Browser chrome bar */}
            <div style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-1)', padding: '11px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840', display: 'block' }} />
              </div>
              {/* URL bar */}
              <div style={{ flex: 1, background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-sm)', padding: '5px 12px', display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0, overflow: 'hidden' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  adsbyadsjad-dashboard.vercel.app
                </span>
              </div>
              {/* Avatar + email — hidden on mobile to avoid crowding */}
              {!isMobile && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0 }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#E8291E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '9px', fontWeight: '700', color: '#fff', fontFamily: 'var(--font-sans)' }}>C</span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)' }}>client@email.com</span>
                </div>
              )}
            </div>

            {/* Dashboard body */}
            <div style={{ padding: isMobile ? '14px' : '20px', background: 'var(--bg-void)' }}>

              {/* Internal top bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <p style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-sans)', margin: 0 }}>Campaign Overview</p>
                  <p style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: '700', color: 'var(--text-1)', fontFamily: 'var(--font-sans)', margin: '3px 0 0' }}>Ads Dashboard</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-full)', padding: '5px 12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: 'var(--text-2)', fontFamily: 'var(--font-sans)', fontWeight: '500', whiteSpace: 'nowrap' }}>Live · May 31</span>
                </div>
              </div>

              {/* 3 stat cards — 1 col on mobile, 3 cols on desktop */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '8px', marginBottom: '8px' }}>
                {STAT_CARDS.map((stat, i) => (
                  <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-md)', padding: isMobile ? '12px 14px' : '14px 16px', boxShadow: 'var(--shadow-1)', display: isMobile ? 'flex' : 'block', alignItems: isMobile ? 'center' : undefined, justifyContent: isMobile ? 'space-between' : undefined }}>
                    <p style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: isMobile ? 0 : '0 0 6px', fontFamily: 'var(--font-sans)' }}>{stat.label}</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: isMobile ? '18px' : '22px', color: 'var(--text-1)', margin: 0, letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Chart + table — stacked on mobile, side by side on desktop */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: '8px' }}>

                {/* Bar chart */}
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-md)', padding: isMobile ? '12px 14px' : '14px 16px', boxShadow: 'var(--shadow-1)' }}>
                  <p style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px', fontFamily: 'var(--font-sans)' }}>Weekly Registrations</p>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: isMobile ? '56px' : '68px' }}>
                    {CHART_BARS.map((bar, i) => (
                      <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <div style={{
                          width: '100%',
                          height: `${(bar.pct / 100) * (isMobile ? 44 : 56)}px`,
                          background: `rgba(232,41,30,${0.28 + (i / 4) * 0.72})`,
                          borderRadius: '3px 3px 0 0',
                          minHeight: '3px',
                        }} />
                        <span style={{ fontSize: '9px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)' }}>{bar.week}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data table */}
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-1)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.7fr 0.7fr 0.8fr', padding: isMobile ? '8px 12px' : '9px 14px', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-elevated)' }}>
                    {['Date', 'Leads', 'CPL', 'Spend'].map((h, i) => (
                      <span key={i} style={{ fontSize: '9px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-sans)' }}>{h}</span>
                    ))}
                  </div>
                  {TABLE_ROWS.map((row, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.7fr 0.7fr 0.8fr', padding: isMobile ? '8px 12px' : '9px 14px', borderBottom: i < TABLE_ROWS.length - 1 ? '1px solid var(--border-1)' : 'none', background: i % 2 === 1 ? 'var(--bg-elevated)' : 'transparent' }}>
                      <span style={{ fontSize: isMobile ? '11px' : '11px', color: 'var(--text-2)', fontFamily: 'var(--font-sans)' }}>{row.date}</span>
                      <span style={{ fontSize: isMobile ? '11px' : '11px', fontWeight: '600', color: 'var(--text-1)', fontFamily: 'var(--font-sans)' }}>{row.leads}</span>
                      <span style={{ fontSize: isMobile ? '11px' : '11px', color: 'var(--text-2)', fontFamily: 'var(--font-sans)' }}>{row.cpl}</span>
                      <span style={{ fontSize: isMobile ? '11px' : '11px', color: 'var(--text-2)', fontFamily: 'var(--font-sans)' }}>{row.spend}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CTA block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', width: isMobile ? '100%' : 'auto', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}
          >
            View Dashboard →
          </a>
          <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-3)', fontFamily: 'var(--font-sans)', fontWeight: '400' }}>
            Clients receive access via email invite after onboarding.
          </p>
        </div>

      </div>
    </section>
  )
}
