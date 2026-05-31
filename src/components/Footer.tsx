import { CatenaryMark } from './Mark'

const COLS = [
  { href: '#top', label: 'TOP' },
  { href: '#services', label: 'Services' },
  { href: '#flow', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <CatenaryMark width={34} />
            <div className="foot-word">CATENARIA</div>
            <div className="foot-tag">Innovative IT Solutions</div>
          </div>
          <nav className="foot-nav" aria-label="フッターナビゲーション">
            {COLS.map((c) => (
              <a key={c.href} href={c.href}>
                {c.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© 2026 CATENARIA</span>
        </div>
      </div>
    </footer>
  )
}
