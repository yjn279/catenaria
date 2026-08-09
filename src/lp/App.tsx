import { Curve } from './components/Curve'
import { Footer } from './components/Footer'
import { OperatorInfo } from './components/OperatorInfo'
import { StickyCta } from './components/StickyCta'

export default function App() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="wrap lp-header-inner">
          <span className="lp-wordmark">CATENARIA</span>
        </div>
      </header>
      <main>
        {/* 工程3で「最初の一画面」〜「よくあるご質問」の節をここに追加する */}
        <Curve className="lp-divider" />
        <section id="contact" className="lp-contact" aria-labelledby="contact-heading">
          <div className="wrap">
            <h2 id="contact-heading" className="lp-eyebrow">
              お問い合わせ
            </h2>
            <h3 className="lp-contact-title">まずはメールでご相談ください</h3>
            {/* 工程4でフォームをここに追加する */}
            <OperatorInfo />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}
