
import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import NavBar from '@/components/dark/home-freelancer/Navbar';
import Header from '@/components/dark/home-freelancer/Header';
import Services from '@/components/dark/home-freelancer/Services';
import About from '@/components/dark/home-freelancer/About';
import Portfolio from '@/components/dark/home-freelancer/Portfolio';
import Testimonials from '@/components/dark/home-freelancer/Testimonials';
import Skills from '@/components/dark/home-freelancer/Skills';
import Blog from '@/components/dark/home-freelancer/Blog';
import Contact from '@/components/dark/home-freelancer/Contact';
import Footer from '@/components/dark/home-freelancer/Footer';
import Script from 'next/script';



export const metadata = {
  title: 'Spriyad - Frontend Developer',
  icons: {
    icon: '/dark/assets/imgs/favicon.ico',
    shortcut: '/dark/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/dark/assets/css/plugins.css',
      '/dark/assets/css/satoshi.css',
      '/dark/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
    ]),
  },
};

export default function Home() {


  return (
    <body className="sub-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="sub-bg">
            <NavBar />
            <Header className="header" />
            <Services />
            <About />
            <Portfolio />
            <Skills />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <Script src="/dark/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/TweenMax.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/charming.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/countdown.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/splitting.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/dark/assets/js/scripts.js" />
    </body>
  );
}
