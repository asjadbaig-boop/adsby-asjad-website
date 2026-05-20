import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import HiddenProblems from './components/HiddenProblems'
import HiringSection from './components/HiringSection'
import MidCTA from './components/MidCTA'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Portfolio from './components/Portfolio'
import AdShowcase from './components/AdShowcase'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Ticker from './components/Ticker'

function BgMesh() {
  const meshRef = useRef(null)
  return (
    <div className="bg-mesh" ref={meshRef} aria-hidden="true">
      <div className="bg-blob-1" />
      <div className="bg-blob-2" />
    </div>
  )
}

function ScrollProgress() {
  const barRef = useRef(null)
  useEffect(() => {
    const bar = barRef.current
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (scrolled / total) * 100 : 0
      bar.style.width = `${progress}%`
      bar.style.background = progress >= 90 ? '#22c55e' : progress >= 50 ? '#60a5fa' : 'var(--primary)'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />
}

function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />
}

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <BgMesh />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HiddenProblems />
        <HiringSection />
        <MidCTA />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <HowItWorks />
        <div style={{ background: 'var(--primary)', padding: '48px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>READY TO FIX YOUR ADS?</p>
          <h3 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '700', color: '#ffffff', marginBottom: '24px' }}>Most accounts see CPL drop within 14 days.</h3>
          <a href="https://wa.me/9778115675?text=Hi%20Asjad%2C%20I%20want%20to%20get%20a%20free%20ads%20audit%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', color: 'var(--primary)', fontWeight: '700', fontSize: '15px', padding: '0 32px', height: '52px', borderRadius: '999px', textDecoration: 'none' }}>
            Get My Free Ads Audit →
          </a>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '12px' }}>Free. No commitment. Takes 2 minutes.</p>
        </div>
        <SectionDivider />
        <Results />
        <Ticker reverse />
        <Testimonials />
        <Portfolio />
        <AdShowcase />
        <SectionDivider />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
