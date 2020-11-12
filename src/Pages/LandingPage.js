import React, { Component } from "react";

export default class Landingpage extends Component {
  render() {
    return (
      <>
        <div>
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
              <h1 className="logo mr-auto">
                <a href="index.html">SUSL</a>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* .nav-menu */}
              <a href="#about" className="get-started-btn scrollto">
                Login
              </a>
            </div>
          </header>
          {/* End Header */}

          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h1>Better Solutions To Submit your Medicals</h1>
                  <h2>
                    We are team of talanted designers making websites with
                    Bootstrap
                  </h2>
                  <div className="d-lg-flex">
                    <a href="#about" className="btn-get-started scrollto">
                      Get Registered
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <img
                    src="assets/img/hero-img.png"
                    className="img-fluid animated"
                    alt
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Hero */}

          {/* ======= Cliens Section ======= */}
          <section id="cliens" className="cliens section-bg">
            <div className="container">
              <div className="row" data-aos="zoom-in">
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Cliens Section */}

          {/* ======= About Us Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <div className="row content">
                <div className="col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a href="#" className="btn-learn-more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End About Us Section */}

          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                  <div className="content">
                    <h3>
                      Eum ipsam laborum deleniti{" "}
                      <strong>velit pariatur architecto aut nihil</strong>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                  </div>
                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a
                          data-toggle="collapse"
                          className="collapse"
                          href="#accordion-list-1"
                        >
                          <span>01</span> Non consectetur a erat nam at lectus
                          urna duis?{" "}
                          <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-1"
                          className="collapse show"
                          data-parent=".accordion-list"
                        >
                          <p>
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis
                            urna id volutpat lacus laoreet non curabitur
                            gravida. Venenatis lectus magna fringilla urna
                            porttitor rhoncus dolor purus non.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-toggle="collapse"
                          href="#accordion-list-2"
                          className="collapsed"
                        >
                          <span>02</span> Feugiat scelerisque varius morbi enim
                          nunc? <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-2"
                          className="collapse"
                          data-parent=".accordion-list"
                        >
                          <p>
                            Dolor sit amet consectetur adipiscing elit
                            pellentesque habitant morbi. Id interdum velit
                            laoreet id donec ultrices. Fringilla phasellus
                            faucibus scelerisque eleifend donec pretium. Est
                            pellentesque elit ullamcorper dignissim. Mauris
                            ultrices eros in cursus turpis massa tincidunt dui.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-toggle="collapse"
                          href="#accordion-list-3"
                          className="collapsed"
                        >
                          <span>03</span> Dolor sit amet consectetur adipiscing
                          elit? <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-3"
                          className="collapse"
                          data-parent=".accordion-list"
                        >
                          <p>
                            Eleifend mi in nulla posuere sollicitudin aliquam
                            ultrices sagittis orci. Faucibus pulvinar elementum
                            integer enim. Sem nulla pharetra diam sit amet nisl
                            suscipit. Rutrum tellus pellentesque eu tincidunt.
                            Lectus urna duis convallis convallis tellus. Urna
                            molestie at elementum eu facilisis sed odio morbi
                            quis
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                  style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
                  data-aos="zoom-in"
                  data-aos-delay={150}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </section>
          {/* End Why Us Section */}

          {/* ======= Skills Section ======= */}
          <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-delay={100}
                >
                  <img src="assets/img/skills.png" className="img-fluid" alt />
                </div>
                <div
                  className="col-lg-6 pt-4 pt-lg-0 content"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <h3>
                    Voluptatem dignissimos provident quasi corporis voluptates
                  </h3>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="skills-content">
                    <div className="progress">
                      <span className="skill">
                        HTML <i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        CSS <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        JavaScript <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="progress">
                      <span className="skill">
                        Photoshop <i className="val">55%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Skills Section */}

          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bxl-dribbble" />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bx-file" />
                    </div>
                    <h4>
                      <a href>Sed ut perspici</a>
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bx-tachometer" />
                    </div>
                    <h4>
                      <a href>Magni Dolores</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bx bx-layer" />
                    </div>
                    <h4>
                      <a href>Nemo Enim</a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}

          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                  <h3>Call To Action</h3>
                  <p>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Cta Section */}

          {/* ======= Team Section ======= */}
          <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Team</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="member d-flex align-items-start"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}
                          <i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div
                    className="member d-flex align-items-start"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>
                        Aut maiores voluptates amet et quis praesentium qui
                        senda para
                      </p>
                      <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}
                          <i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <div
                    className="member d-flex align-items-start"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>
                        Quisquam facilis cum velit laborum corrupti fuga rerum
                        quia
                      </p>
                      <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}
                          <i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <div
                    className="member d-flex align-items-start"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <div className="pic">
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>
                        Dolorum tempora officiis odit laborum officiis et et
                        accusamus
                      </p>
                      <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}
                          <i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Team Section */}

          <div>
            <footer id="footer">
              <div className="footer-newsletter">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <h4>Join Our Newsletter</h4>
                      <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam
                        noster magna
                      </p>
                      <form action method="post">
                        <input type="email" name="email" />
                        <input type="submit" defaultValue="Subscribe" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                      <h3>Arsha</h3>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022
                        <br />
                        United States <br />
                        <br />
                        <strong>Phone:</strong> +1 5589 55488 55
                        <br />
                        <strong>Email:</strong> info@example.com
                        <br />
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Product Management</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <i className="bx bx-chevron-right" />{" "}
                          <a href="#">Graphic Design</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Social Networks</h4>
                      <p>
                        Cras fermentum odio eu feugiat lide par naso tierra
                        videa magna derita valies
                      </p>
                      <div className="social-links mt-3">
                        <a href="#" className="twitter">
                          <i className="bx bxl-twitter" />
                        </a>
                        <a href="#" className="facebook">
                          <i className="bx bxl-facebook" />
                        </a>
                        <a href="#" className="instagram">
                          <i className="bx bxl-instagram" />
                        </a>
                        <a href="#" className="google-plus">
                          <i className="bx bxl-skype" />
                        </a>
                        <a href="#" className="linkedin">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container footer-bottom clearfix">
                <div className="copyright">
                  © Copyright{" "}
                  <strong>
                    <span>Arsha</span>
                  </strong>
                  . All Rights Reserved
                </div>
              </div>
            </footer>
            {/* End Footer */}
            <p />
          </div>
        </div>
      </>
    );
  }
}
