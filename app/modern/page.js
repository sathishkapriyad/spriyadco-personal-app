'use client';
import {
  Hero,
  Services,
  About,
  Portfolio,
  Skills,
  Blog,
  Contact,
  Footer
} from '../../components/modern';

export default function ModernHomePage() {
  return (
    <main className="bg-dark text-light">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
} 