'use client';
import React, { useEffect, useRef, useState } from 'react';

function Contact() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [domRef]);

  return (
    <section
      className="contact-crev section-padding bord-thin-bottom bord-thin-top"
      data-scroll-index="6" id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15 wow fadeInUp">
                Get In Touch
              </h6>
              <h2
                className={`text-u ls1 d-rotate ${isVisible ? 'animated' : ''}`}
                ref={domRef}
              >
                <span className="rotate-text">
                  Let&#39;s make your brand&nbsp;
                  <span className="fw-200">brilliant!</span>
                </span>
              </h2>
              <p className="mt-10">
                If you would like to work with me or just want to get in touch,
                I’d love to hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-20 underline main-color">
                <a href="tel:+18408412569">(+44) 739 294 64 87</a>
              </div>
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="mailto:+18408412569">spriyad.info@gmail.com</a>
              </div>
              <ul className="rest social-text d-flex mt-40">
              
                <li className="mr-30">
                  <a href="https://www.linkedin.com/in/sathishka-priyad/" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>

                <li className="mr-30">
                  <a href="https://github.com/sathishkapriyad/" className="hover-this">
                    <span className="hover-anim">GitHub</span>
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Contact;
