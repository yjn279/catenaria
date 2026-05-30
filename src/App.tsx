import { useRef } from 'react';
import { useReveal } from './hooks/useReveal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Flow } from './sections/Flow';
import { About } from './sections/About';
import { Faq } from './sections/Faq';
import { Contact } from './sections/Contact';

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);
  return (
    <div ref={rootRef}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero /><Services /><Flow /><About /><Faq /><Contact />
      </main>
      <Footer />
    </div>
  );
}
