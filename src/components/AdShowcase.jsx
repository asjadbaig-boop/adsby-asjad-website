const ADS = [
  { format: 'Story', bg: 'linear-gradient(160deg, #0d1b3e 0%, #1c69d4 100%)',    w: 180, h: 320 },
  { format: 'Feed',  bg: 'linear-gradient(135deg, #0a0a1a 0%, #1c3a6e 100%)',    w: 280, h: 280 },
  { format: 'Story', bg: 'linear-gradient(160deg, #023e8a 0%, #0096c7 100%)',    w: 180, h: 320 },
  { format: 'Reel',  bg: 'linear-gradient(135deg, #1c69d4 0%, #023e8a 100%)',    w: 180, h: 320 },
  { format: 'Feed',  bg: 'linear-gradient(160deg, #0d1b3e 0%, #1c69d4 100%)',    w: 240, h: 300 },
]

function AdCard({ format, bg, w, h }) {
  return (
    <div style={{ flexShrink: 0, width: w, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: w,
        height: h,
        background: bg,
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(28,105,212,0.2)',
      }}>
        {/* Sponsored badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(6px)',
          borderRadius: '4px',
          padding: '3px 8px',
          fontSize: '10px',
          fontWeight: '700',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>Sponsored</div>

        {/* Decorative grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Bottom content area */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
        }}>
          <div style={{ height: '10px', width: '70%', background: 'rgba(255,255,255,0.55)', borderRadius: '3px', marginBottom: '8px' }} />
          <div style={{ height: '8px', width: '50%', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', marginBottom: '12px' }} />
          <div style={{
            height: '30px',
            background: 'rgba(28,105,212,0.9)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ height: '8px', width: '60px', background: 'rgba(255,255,255,0.8)', borderRadius: '2px' }} />
          </div>
        </div>
      </div>
      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{format}</span>
    </div>
  )
}

export default function AdShowcase() {
  return (
    <section style={{ background: 'var(--canvas)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>CREATIVE WORK</p>
        <h2 style={{ fontSize: 'clamp(32px, 4.6vw, 46px)', fontWeight: '700', color: 'var(--ink)', marginBottom: '8px', lineHeight: 1 }}>Ads that <span style={{ color: 'var(--primary)' }}>convert.</span></h2>
        <p style={{ fontSize: '16px', fontWeight: '300', color: 'var(--ink-secondary)', marginBottom: '40px' }}>All ad formats tested across campaigns.</p>
        <div
          className="ad-strip"
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            paddingBottom: '20px',
            alignItems: 'flex-end',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            touchAction: 'pan-x',
          }}
        >
          {ADS.map((ad, i) => <AdCard key={i} {...ad} />)}
        </div>
      </div>
    </section>
  )
}
