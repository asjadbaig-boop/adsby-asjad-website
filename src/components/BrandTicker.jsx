const TOOLS = [
  'Meta Ads Manager', 'GoHighLevel', 'Google Ads', 'Facebook Pixel',
  'Conversion API', 'Instagram Ads', 'Microsoft Clarity', 'Google Tag Manager',
  'WhatsApp Business', 'Zapier', 'Google Analytics', 'Zoom',
]

export default function BrandTicker() {
  return (
    <div style={{
      background: 'var(--bg-void)',
      padding: '20px 0',
      borderTop: '1px solid var(--border-1)',
      borderBottom: '1px solid var(--border-1)',
      overflow: 'hidden',
    }}>
      <p style={{
        textAlign: 'center',
        fontSize: '10px',
        fontWeight: '700',
        color: 'var(--text-4)',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        marginBottom: '14px',
        fontFamily: 'var(--font-sans)',
      }}>
        Tools I work with daily
      </p>
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}>
        <div style={{ display: 'flex', gap: '40px', animation: 'ticker-scroll 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span key={i} style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-3)', whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
