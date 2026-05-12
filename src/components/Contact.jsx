import { useRef, useEffect } from 'react'
import useMagnetic from '../hooks/useMagnetic'

export default function Contact() {
  const waRef = useRef(null)
  const emailRef = useRef(null)
  const accentRef = useRef(null)

  useMagnetic(waRef)
  useMagnetic(emailRef)

  useEffect(() => {
    const el = accentRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible')
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        obs.disconnect()
      }
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <footer id="contact" style={{ background: 'var(--surface)', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', textAlign: 'center', paddingBottom: '80px' }}>
        <h2 className="contact-headline" style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-1.5px', marginBottom: '16px', lineHeight: 1.05 }}>
          Let's cut your cost per <span className="headline-accent" ref={accentRef}>lead.</span>
        </h2>
        <div className="contact-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
          <a
            ref={waRef}
            href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ height: '52px', borderRadius: 0, padding: '0 32px', fontSize: '15px' }}
          >
            Claim My Free Audit →
          </a>
          <a
            ref={emailRef}
            href="mailto:Asjadbaigqaz@gmail.com"
            className="btn-ghost"
            style={{ height: '52px', borderRadius: 0, padding: '0 32px', fontSize: '15px' }}
          >
            Get in Touch
          </a>
        </div>

        <p style={{ fontSize: '12px', color: 'var(--ink-muted)', marginTop: '10px', textAlign: 'center', marginBottom: '0' }}>
          Free. No commitment. I reply within 2 hours.
        </p>
      </div>

      <div className="footer-inner" style={{ borderTop: '1px solid var(--hairline)', padding: '24px 40px', maxWidth: '1160px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontSize: '12px', fontWeight: '400', color: 'var(--ink-muted)' }}>(c) 2026 AdsByAsjad. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { label: 'Asjadbaigqaz@gmail.com', href: 'mailto:Asjadbaigqaz@gmail.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/asjad-baig/' },
            { label: 'Instagram', href: 'https://instagram.com/itsasjadbaig/' },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', fontWeight: '400', color: 'var(--ink-muted)', transition: 'color 0.15s ease' }}
              onMouseEnter={(event) => { event.currentTarget.style.color = 'var(--primary)' }}
              onMouseLeave={(event) => { event.currentTarget.style.color = 'var(--ink-muted)' }}
            >{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
