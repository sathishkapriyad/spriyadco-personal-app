import React from 'react';

function Services() {
  return (
    <section className="services section-padding pb-0" data-scroll-index="1" id="services">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Specialization</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2>
              What I <span className="fw-200">Offer</span>
            </h2>
            <div className="ml-auto">
             
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-paint-bucket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">UI Design</h5>
              <p>
              I create intuitive and visually appealing UI designs for web, mobile (iOS and Android), and web apps.
              </p>
             
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-layout-slider main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Web Development</h5>
              <p>
              I specialize in Magento 2 web app development, and utilize React and Next.js to build dynamic, responsive web applications.
              </p>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-box radius-15">
              <div className="ti-rocket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">ML App Development</h5>
              <p>
              I develop advanced machine learning applications using Python and Streamlit dashboards to deliver powerful insights and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
