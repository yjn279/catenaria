import { CtaBand } from './components/CtaBand'
import { Curve } from './components/Curve'
import { Footer } from './components/Footer'
import { StickyCta } from './components/StickyCta'
import { OPERATOR } from './content'
import { Concerns } from './sections/Concerns'
import { Contact } from './sections/Contact'
import { Faq } from './sections/Faq'
import { FitOrNot } from './sections/FitOrNot'
import { Hero } from './sections/Hero'
import { Offer } from './sections/Offer'
import { Process } from './sections/Process'
import { WhyFree } from './sections/WhyFree'

export default function App() {
  return (
    <div>
      <header className="lp-header">
        <div className="wrap lp-header-inner">
          <span className="lp-wordmark">{OPERATOR.brand}</span>
        </div>
      </header>
      <main>
        <Hero />
        <Curve />
        <WhyFree />
        <CtaBand location="why-free" />
        <Curve />
        <Concerns />
        <Curve />
        <Offer />
        <Curve />
        <Process />
        <Curve />
        <FitOrNot />
        <CtaBand location="fit-or-not" />
        <Curve />
        <Faq />
        <CtaBand location="faq" />
        <Curve />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}
