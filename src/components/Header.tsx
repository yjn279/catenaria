import { useEffect, useState } from 'react'
import { CatenaryMark } from './Mark'

const NAV = [
  { href: '#top', label: 'TOP' },
  { href: '#services', label: 'Services' },
  { href: '#flow', label: 'Engagement' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a href="#top" className="brand-lockup" aria-label="CATENARIA home">
          <CatenaryMark width={30} />
          <div className="brand-word-block">
            <span className="brand-word">CATENARIA</span>
            <span className="brand-tag">Innovative IT Solutions</span>
          </div>
        </a>
        <nav className="nav-links" aria-label="主要ナビゲーション">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-accent">
          無料で相談する
        </a>
      </div>
    </header>
  )
}
