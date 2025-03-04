import React from 'react';

function Blog() {
  return (
    <section className="blog-crev section-padding" data-scroll-index="5" id="blog">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read Latest <span className="fw-200">Articles</span>
            </h2>
            <div className="ml-auto">
              <a href="https://medium.com/@sathishka_priyad" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c4.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Docker</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="">24 June 2023</a>
                </div>
                <h5>
                  <a href="https://medium.com/@sathishka_priyad/taking-magento-2-to-the-next-level-with-orbstack-and-docker-65a759445902">
                  Taking Magento 2 to the Next Level with Orbstack and Docker
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c5.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Virtual Machine</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="">22 March 2024</a>
                </div>
                <h5>
                  <a href="https://medium.com/@sathishka_priyad/unleashing-utm-the-ultimate-guide-to-virtual-machines-on-mac-m1-m2-silicon-chips-1e98669048e9">
                  Unleashing UTM: The Ultimate Guide to Virtual Machines on Mac M1/M2 Silicon Chips.
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c6.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Software Testing</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="https://medium.com/@sathishka_priyad/performance-testing-with-locust-66114890e3f8">1 June 2022</a>
                </div>
                <h5>
                  <a href="">
                  Performance Testing with Locust
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
