import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const sentinel = document.querySelector('.nav-sentinel')
    if (!sentinel) return
    const observer = new IntersectionObserver(([entry]) => {
      setAtTop(entry.isIntersecting)
    }, { threshold: 1 })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <span className="nav-sentinel" aria-hidden="true" />
      <nav className={`nav-outer${atTop ? ' nav-outer--top' : ''}`} aria-label="Main navigation">
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '3px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '20px', color: '#18161A', letterSpacing: '-0.04em' }}>Ads</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '20px', color: '#6B6560' }}>by</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '20px', color: '#E8291E', letterSpacing: '-0.04em' }}>Asjad</span>
        </a>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="nav-whatsapp-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--red)',
            color: '#ffffff',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            fontSize: '12px',
            padding: '0 16px',
            height: '34px',
            borderRadius: 'var(--r-sm)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px var(--red-glow)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.304A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.5a8.5 8.5 0 01-4.341-1.19l-.31-.186-3.23.847.862-3.145-.202-.323A8.5 8.5 0 1120.5 12a8.51 8.51 0 01-8.501 8.5z"/>
          </svg>
          WhatsApp
        </a>

        <button
          className="nav__hamburger"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <span className="nav__close nav-close-btn">✕</span>
          ) : (
            <span className="nav__hamburger-lines">
              <span />
              <span />
              <span />
            </span>
          )}
        </button>
      </nav>

      <div
        className={`nav__overlay${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={close}
      >
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__overlay-link"
            style={{ transitionDelay: open ? `${index * 70}ms` : '0ms' }}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
