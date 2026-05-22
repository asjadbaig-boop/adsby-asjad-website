const STATS = [
  { number: '$200k+', label: 'Ad spend managed' },
  { number: '7,000+', label: 'Leads generated' },
  { number: '3-5 accounts', label: 'Managed at once' },
  { number: '1.5+ yrs', label: 'Hands-on media buying' },
]

const SKILLS = ['Meta Ads', 'Pixel + CAPI', 'GoHighLevel', 'Lead Gen', 'Creative Testing', 'Budget Scaling', 'AI Tools', 'Direct Communication']

export default function HiringSection() {
  return (
    <section className="hiring-card-section" style={{ background: '#18161A', padding: '80px 0' }}>
      <div className="hiring-card">
        <div className="hiring-card__badge">
          <span />
          <strong>Open to work</strong>
        </div>
        <h2>Hiring a <span style={{ color: 'var(--red)' }}>media buyer?</span></h2>
        <div className="hiring-card__stats">
          {STATS.map((stat) => (
            <div className="hiring-card__stat" key={stat.number}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="hiring-card__skills">
          {SKILLS.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-primary hiring-card__button">
          Let's talk &nearr;
        </a>
      </div>
    </section>
  )
}
