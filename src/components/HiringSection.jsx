import { useState, useEffect, useRef } from 'react'

const REQUIREMENTS = [
  { req: 'Meta Ads Manager, campaigns, ad sets, audiences', proof: '$200k+ managed across client and team accounts' },
  { req: 'Pixel and Conversion API setup', proof: 'Installed and verified across multiple active accounts' },
  { req: 'Lead generation focus, not ecommerce', proof: 'Every campaign built around CPL and qualified leads' },
  { req: 'Multi-account management', proof: 'Running 3 to 5 accounts simultaneously at any given time' },
  { req: 'Creative testing frameworks', proof: 'Structured hooks, angles, and format testing each cycle' },
  { req: 'Budget management and scaling', proof: 'Daily budget moves based on performance data, not schedules' },
  { req: 'Performance reporting clients actually understand', proof: 'Plain-English weekly reports, no jargon' },
  { req: 'GoHighLevel, CRM and automation flows', proof: 'Lead follow-up, reminders, and re-engagement inside GHL' },
  { req: 'Full funnel understanding beyond the ad', proof: 'Landing page audits, form optimisation, post-click flow' },
  { req: 'AI tools for creative and workflow', proof: 'Using AI for hook writing, creative variation, and analysis' },
  { req: 'Direct client communication', proof: 'Sole point of contact for every account I manage' },
  { req: 'Proof of results, not just experience', proof: 'Case studies with real numbers available on request' },
]

const TOOLS = ['Meta Ads Manager', 'Conversion API', 'GoHighLevel', 'Facebook Pixel', 'Instagram Ads', 'Lead Gen Funnels', 'Creative Testing', 'CAPI', 'Audience Strategy', 'Performance Reporting', 'Budget Scaling', 'AI Creatives', 'Meta Ads Manager', 'Conversion API', 'GoHighLevel', 'Facebook Pixel', 'Instagram Ads', 'Lead Gen Funnels']

export default function HiringSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(scrolled / (sectionHeight * 0.7), 1))
      const index = Math.min(
        Math.floor(progress * REQUIREMENTS.length),
        REQUIREMENTS.length - 1
      )
      setActiveIndex(index)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} style={{ background: '#f7f7f7', padding: '80px 0', borderTop: '1px solid #e8e8e8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(28,105,212,0.08)', border: '1px solid rgba(28,105,212,0.2)', borderRadius: '999px', padding: '6px 14px', marginBottom: '16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Open to work</span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '700', color: '#0d0d0d', marginBottom: '8px', lineHeight: '1.1' }}>Hiring a media buyer?</h2>
          </div>
          <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary)', color: '#ffffff', fontWeight: '700', fontSize: '13px', padding: '0 24px', height: '44px', borderRadius: '999px', textDecoration: 'none', flexShrink: 0, alignSelf: 'flex-end' }}>
            Let's talk ↗
          </a>
        </div>

        {/* Requirement rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {REQUIREMENTS.map((item, i) => (
            <div
              key={i}
              className={`hiring-grid-row${activeIndex === i ? ' hiring-row-active' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                padding: '16px',
                borderRadius: '12px',
                background: activeIndex === i ? '#ffffff' : 'transparent',
                boxShadow: activeIndex === i ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
                border: activeIndex === i ? '1px solid rgba(28,105,212,0.15)' : '1px solid transparent',
                transition: 'background 350ms ease, box-shadow 350ms ease, border-color 350ms ease',
              }}
            >
              {/* Left — requirement */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: activeIndex === i ? 'var(--primary)' : 'rgba(28,105,212,0.1)',
                  border: '1px solid rgba(28,105,212,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 350ms ease',
                }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1"
                      stroke={activeIndex === i ? '#ffffff' : 'rgba(28,105,212,0.5)'}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: activeIndex === i ? '600' : '400',
                  color: activeIndex === i ? '#0d0d0d' : '#888888',
                  lineHeight: '1.4',
                  transition: 'color 350ms ease, font-weight 200ms ease',
                }}>{item.req}</span>
              </div>
              {/* Right — proof */}
              <div className="hiring-proof-col" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  flexShrink: 0,
                  opacity: activeIndex === i ? 1 : 0.3,
                  transition: 'opacity 350ms ease',
                }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: activeIndex === i ? '500' : '300',
                  color: activeIndex === i ? '#444444' : '#aaaaaa',
                  lineHeight: '1.5',
                  transition: 'color 350ms ease',
                }}>{item.proof}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools ticker */}
        <div style={{ overflow: 'hidden', margin: '32px 0 24px', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div style={{ display: 'flex', gap: '32px', animation: 'ticker 25s linear infinite', width: 'max-content' }}>
            {TOOLS.map((tool, i) => (
              <span key={i} style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' }}>{tool}</span>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #e8e8e8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Message on WhatsApp →</a>
        </div>

      </div>
    </section>
  )
}
