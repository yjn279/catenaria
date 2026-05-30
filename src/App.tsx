import { useRef } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { useReveal } from './hooks/useReveal'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Faq } from './sections/Faq'
import { Flow } from './sections/Flow'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  useReveal(rootRef)
  return (
    <div ref={rootRef}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Flow />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
