import { useState, useEffect } from 'react';
import { CatenaryMark } from './Mark';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#flow', label: 'Flow' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a href="#top" className="brand-lockup" aria-label="CATENARIA home">
          <CatenaryMark width={26} stroke="var(--text)" apex={false} />
          <span className="brand-word">CATENARIA</span>
        </a>
        <nav className="nav-links" aria-label="主要ナビゲーション">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-accent">無料で相談する</a>
      </div>
    </header>
  );
}
