'use client';

import { useEffect } from 'react';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/Cusor'; // Ensure correct case
import LoadingScreen from '@/components/dark/common/Loader';
import About from '@/components/dark/home-freelancer/About';
import Blog from '@/components/dark/home-freelancer/Blog';
import Contact from '@/components/dark/home-freelancer/Contact';
import Footer from '@/components/dark/home-freelancer/Footer';
import Header from '@/components/dark/home-freelancer/Header';
import Navbar from '@/components/dark/home-freelancer/Navbar';
import Portfolio from '@/components/dark/home-freelancer/Portfolio';
import Services from '@/components/dark/home-freelancer/Services';
import Skills from '@/components/dark/home-freelancer/Skills';
import Testimonials from '@/components/dark/home-freelancer/Testimonials';
import Script from 'next/script';

export default function HomeClient() {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const target = document.querySelector(e.target.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <Services />
            <About />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/dark/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/dark/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/countdown.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      <Script src="/dark/assets/js/scripts.js"></Script>
    </div>
  );
}
