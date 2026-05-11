export default function PainPoints() {
  const points = [
    'High cost per lead draining the budget with nothing to show for it.',
    'Ad fatigue kicking in after 2 weeks, CTR drops and nobody knows what to do.',
    'Lead quality is terrible. Form fills that never pick up the phone.',
    'Manual campaign monitoring eating 2 hours a day checking what\'s winning and what\'s wasting.',
    'Reporting that takes hours and still doesn\'t tell you what actually happened.',
  ]
  return (
    <section style={{ background: 'var(--surface)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '8px' }}>Sound familiar?</h2>
        <p style={{ fontSize: '16px', fontWeight: '300', color: 'var(--ink-secondary)', marginBottom: '40px' }}>These are the problems most Meta Ads accounts run into.</p>
        <div className="pain-points-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {points.map((p, i) => (
            <div key={i} style={{ background: 'var(--surface-raised)', borderLeft: '2px solid var(--primary)', padding: '20px', borderRadius: '0' }}>
              <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: '1.65', margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
