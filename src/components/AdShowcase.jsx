const AD_CREATIVES = [
  { id: 1, type: 'image', label: 'Ad Creative 1', src: '/ads/Artboard 5.png' },
  { id: 2, type: 'image', label: 'Ad Creative 2', src: '/ads/Artboard 6.png' },
  { id: 3, type: 'image', label: 'Ad Creative 3', src: '/ads/Artboard 7.png' },
  { id: 4, type: 'image', label: 'Ad Creative 4', src: '/ads/Artboard 8.png' },
  { id: 5, type: 'image', label: 'Ad Creative 5', src: '/ads/Artboard 9.png' },
]

function AdCard({ item }) {
  if (item.src && item.type === 'video') {
    return (
      <div style={{ width: '180px', height: '320px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border-1)', position: 'relative' }}>
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '999px' }}>
          <span style={{ fontSize: '10px', color: 'white', fontFamily: 'var(--font-sans)' }}>{item.label}</span>
        </div>
      </div>
    )
  }
  if (item.src && item.type === 'image') {
    return (
      <div style={{ width: '180px', height: '320px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border-1)' }}>
        <img src={item.src} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
      </div>
    )
  }
  return (
    <div style={{ width: '180px', height: '320px', background: 'var(--bg-elevated)', border: '1px solid var(--border-1)', borderRadius: '12px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontSize: '11px', color: 'var(--text-4)', fontFamily: 'var(--font-sans)', textAlign: 'center', padding: '0 12px', lineHeight: '1.4' }}>{item.label}</span>
    </div>
  )
}

export default function AdShowcase() {
  return (
    <section style={{ background: 'var(--bg-void)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '12px', fontFamily: 'var(--font-sans)' }}>CREATIVE WORK</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--text-1)', marginBottom: '40px', letterSpacing: '-0.03em' }}>Ads built to convert.</h2>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px', scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x' }}>
          {AD_CREATIVES.map(item => <AdCard key={item.id} item={item} />)}
        </div>
        <div style={{ marginTop: '24px', background: 'var(--bg-surface)', border: '1px solid var(--border-1)', borderRadius: 'var(--r-md)', padding: '16px 20px' }}>
          <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-1)', margin: '0 0 6px', fontFamily: 'var(--font-sans)' }}>How to add your campaign videos</p>
          <p style={{ fontSize: '12px', color: 'var(--text-2)', margin: 0, lineHeight: '1.6', fontFamily: 'var(--font-sans)' }}>
            1. Add your video files to <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>/public/ads/</code> folder (e.g. <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>ad1.mp4</code>)<br/>
            2. In the <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>AD_CREATIVES</code> array, set <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>type: 'video'</code> and <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>src: '/ads/ad1.mp4'</code><br/>
            3. For images, set <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>type: 'image'</code> and <code style={{ background: 'var(--bg-elevated)', padding: '1px 5px', borderRadius: '4px' }}>src: '/ads/ad1.jpg'</code>
          </p>
        </div>
      </div>
    </section>
  )
}
