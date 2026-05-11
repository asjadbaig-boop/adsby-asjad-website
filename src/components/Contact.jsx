import { useState, useRef, useEffect } from 'react'
import useMagnetic from '../hooks/useMagnetic'

// Get a free access key at https://web3forms.com, enter your email, and paste the key below.
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY'

const inputStyle = {
  width: '100%',
  height: '48px',
  border: '1px solid var(--surface-border)',
  borderRadius: 0,
  background: 'var(--surface-raised)',
  padding: '0 16px',
  fontSize: '15px',
  fontWeight: '300',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
}

export default function Contact() {
  const waRef = useRef(null)
  const emailRef = useRef(null)
  const accentRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.target)
    fd.append('access_key', WEB3FORMS_KEY)
    fd.append('subject', 'New Audit Request - AdsByAsjad')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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

        <p style={{ fontSize: '12px', color: 'var(--ink-muted)', marginTop: '10px', textAlign: 'center', marginBottom: '32px' }}>
          Free. No commitment. I reply within 2 hours.
        </p>

        <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '32px' }}>
          OR BOOK A FREE AUDIT
        </p>

        {status === 'success' ? (
          <div style={{ padding: '40px 24px', background: 'var(--surface-raised)', border: '1px solid var(--surface-border)', borderTop: '2px solid var(--primary)' }}>
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)', marginBottom: '8px' }}>Audit request sent.</p>
            <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-secondary)', lineHeight: 1.65, margin: 0 }}>
              I will reply within 24 hours. Or message me on{' '}
              <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>WhatsApp</a> for a faster reply.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
            <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
            <input type="email" name="email" placeholder="Email Address" style={inputStyle} required />
            <input type="url" name="website" placeholder="Business Website (optional)" style={inputStyle} />
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                height: '52px',
                background: status === 'sending' ? 'var(--ink-muted)' : 'var(--primary)',
                color: '#fff',
                border: 'none',
                borderRadius: 0,
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: 'inherit',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'background 200ms ease',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Audit Request'}
            </button>
            {status === 'error' && (
              <p style={{ fontSize: '14px', fontWeight: '400', color: '#c0392b', textAlign: 'center', margin: 0 }}>
                Something went wrong. Try messaging me on{' '}
                <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ color: '#c0392b' }}>WhatsApp</a> instead.
              </p>
            )}
          </form>
        )}
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
