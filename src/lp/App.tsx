import { Curve } from './components/Curve'
import { Footer } from './components/Footer'
import { OperatorInfo } from './components/OperatorInfo'
import { StickyCta } from './components/StickyCta'
import { Faq } from './sections/Faq'
import { FitOrNot } from './sections/FitOrNot'
import { Hero } from './sections/Hero'
import { Offer } from './sections/Offer'
import { WhyFree } from './sections/WhyFree'

export default function App() {
  return (
    <div className="lp-page">
      <header className="lp-header">
        <div className="wrap lp-header-inner">
          <span className="lp-wordmark">CATENARIA</span>
        </div>
      </header>
      <main>
        <Hero />
        <Curve className="lp-divider" />
        <WhyFree />
        <Curve className="lp-divider" />
        <Offer />
        <Curve className="lp-divider" />
        <FitOrNot />
        <Curve className="lp-divider" />
        <Faq />
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
