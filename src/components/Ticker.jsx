const TICKER_ITEMS = [
  'Meta Ads',
  'Lead Generation',
  'Pixel + CAPI',
  'Creative Testing',
  'Budget Scaling',
  'GoHighLevel',
  'Performance Reporting',
  'Audience Strategy',
  'AI Workflows',
  'CPL Reduction',
  'Full Funnel',
  'Direct Communication',
]

export default function Ticker({ reverse = false }) {
  return (
    <div className="ticker-strip" aria-hidden="true">
      <div
        className="ticker-strip__track"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
        onMouseEnter={(event) => { event.currentTarget.style.animationPlayState = 'paused' }}
        onMouseLeave={(event) => { event.currentTarget.style.animationPlayState = 'running' }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <span className="ticker-strip__item" key={`${item}-${index}`}>
            {item}
            <span />
          </span>
        ))}
      </div>
    </div>
  )
}
