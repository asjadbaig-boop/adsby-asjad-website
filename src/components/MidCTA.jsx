export default function MidCTA() {
  return (
    <section style={{ background: 'var(--primary)', padding: '64px 24px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>FREE AUDIT</p>
        <h2 className="reveal" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: '700', color: '#ffffff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '16px' }}>
          Find out exactly where your <span style={{ color: 'var(--primary)' }}>budget is leaking.</span>
        </h2>
        <p style={{ fontSize: '16px', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '32px' }}>
          A 20-minute audit call. No pitch, no pressure. Just a clear answer on what is costing you leads.
        </p>
        <a
          href="#contact"
          className="mid-cta-btn"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '52px', padding: '0 36px', background: '#ffffff', color: 'var(--primary)', fontFamily: 'inherit', fontWeight: '700', fontSize: '15px', textDecoration: 'none', letterSpacing: '0.2px', transition: 'background 0.2s ease, transform 0.2s ease' }}
          onMouseEnter={(event) => { event.currentTarget.style.background = 'rgba(255,255,255,0.9)'; event.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(event) => { event.currentTarget.style.background = '#ffffff'; event.currentTarget.style.transform = 'translateY(0)' }}
        >
          Book Free Audit -&gt;
        </a>
      </div>
    </section>
  )
}
