const MILESTONES = [
  {
    age: '2022',
    text: 'Started managing Meta Ads for my first client. Learned by doing, not by theory.',
  },
  {
    age: '2023',
    text: 'Scaled to 3 to 5 accounts at a time. Built the first GHL automation flows for lead follow-up.',
  },
  {
    age: '2024',
    text: 'Crossed $200k in total ad spend managed. Ran webinar campaigns, live event funnels, and lead gen across multiple niches.',
  },
  {
    age: '2025',
    text: 'Built AdsByAsjad full-time. Now running paid campaigns for clients across India and internationally.',
  },
]

export default function FounderStory() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '80px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>THE FOUNDER</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 5vw, 44px)', color: 'var(--text-1)', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: '1.1' }}>
          Built by someone who actually <span style={{ color: '#E8291E' }}>runs the ads.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontWeight: '300', fontSize: '15px', color: 'var(--text-2)', marginBottom: '48px', lineHeight: '1.65' }}>
          I didn't learn this from a course. Real budgets, real campaigns, real failures. Every system I use with clients is something I built and tested myself.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {MILESTONES.map((m, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', paddingBottom: '28px', paddingTop: '28px', borderTop: '1px solid var(--border-1)', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '18px', color: '#E8291E', letterSpacing: '-0.02em', paddingTop: '2px' }}>{m.age}</div>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: '400', fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.6', margin: 0 }}>{m.text}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-1)' }} />
        </div>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E8291E', color: '#ffffff', fontWeight: '700', fontSize: '14px', padding: '0 28px', height: '48px', borderRadius: 'var(--r-sm)', textDecoration: 'none', fontFamily: 'var(--font-sans)' }}
          >
            Work With Me ↗
          </a>
        </div>
      </div>
    </section>
  )
}
