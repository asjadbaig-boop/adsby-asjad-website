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
    <footer id="contact" style={{ background: '#18161A', padding: '80px 0 0' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px', textAlign: 'center', paddingBottom: '80px' }}>
        <h2 className="contact-headline" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '16px', lineHeight: 1.05 }}>
          Let's cut your cost per <span className="headline-accent" ref={accentRef}>lead.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: '300', color: 'var(--text-3)', marginBottom: '28px', lineHeight: 1.65 }}>
          Free audit. No lock-in. You deal with me directly.
        </p>
        <div className="contact-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
          <a
            ref={waRef}
            href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ height: '52px', padding: '0 32px', fontSize: '15px' }}
          >
            Claim My Free Audit →
          </a>
          <a
            ref={emailRef}
            href="mailto:Asjadbaigqaz@gmail.com"
            className="btn-ghost"
            style={{ height: '52px', padding: '0 32px', fontSize: '15px', color: '#ffffff', borderColor: 'var(--border-3)' }}
          >
            Get in Touch
          </a>
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-3)', marginTop: '10px', textAlign: 'center', marginBottom: '0' }}>
          Free. No commitment. I reply within 2 hours.
        </p>
      </div>

      <div className="footer-inner" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px 40px', maxWidth: '1160px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '3px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '16px', color: '#ffffff', letterSpacing: '-0.04em' }}>Ads</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-3)' }}>by</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '16px', color: '#E8291E', letterSpacing: '-0.04em' }}>Asjad</span>
        </a>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: '400', color: 'var(--text-3)' }}>(c) 2026 AdsByAsjad. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { label: 'Asjadbaigqaz@gmail.com', href: 'mailto:Asjadbaigqaz@gmail.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/asjad-baig/' },
            { label: 'Instagram', href: 'https://instagram.com/itsasjadbaig/' },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: '400', color: 'var(--text-3)', transition: 'color 0.15s ease' }}
              onMouseEnter={(event) => { event.currentTarget.style.color = 'var(--red)' }}
              onMouseLeave={(event) => { event.currentTarget.style.color = 'var(--text-3)' }}
            >{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
