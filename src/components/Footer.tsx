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
          <div className="foot-brand brand-lockup">
            <CatenaryMark width={34} />
            <div className="brand-word-block">
              <span className="brand-word">CATENARIA</span>
              <span className="brand-tag">Innovative IT Solutions</span>
            </div>
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
          <span>本サイトはアクセス解析のため Google アナリティクスを利用しています。</span>
        </div>
      </div>
    </footer>
  )
}
