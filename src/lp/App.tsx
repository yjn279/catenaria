import { Curve } from './components/Curve'
import { Footer } from './components/Footer'
import { StickyCta } from './components/StickyCta'
import { Contact } from './sections/Contact'
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
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}
