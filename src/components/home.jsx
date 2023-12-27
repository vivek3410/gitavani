import React from 'react';
import d1 from '../images/d-1.png';
import d2 from '../images/d-2.png';
import d3 from '../images/d-3.png';
import d4 from '../images/d-4.png';
import d5 from '../images/d-5.png';
import w1 from '../images/w-1.png';
import w2 from '../images/w-2.png';
import w3 from '../images/w-3.png';
import w4 from '../images/w-4.png';
import c1 from '../images/c-1.png';
import c2 from '../images/c-2.png';
import c3 from '../images/c-3.png';
import quote from '../images/quote.png';
import DetailBox from './detail-box';

import Callback from './Callback';
import Footer from './footer';
import Services from './services';
import Mission from './Mission';



export default function Home() {
  return (
    <>
      <div className='hero_area1'>
        <section class="slider_section">
          <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box relative">
                        <div>
                          <h2>
                            welcome to
                          </h2>
                          <h1>
                            web agency
                          </h1>
                          <p>
                            At Gitavni Tech, we are more than just a tech company – we are your digital partners, committed to turning your ideas into exceptional online experiences. Our team is fueled by passion, innovation, and a relentless pursuit of excellence.
                          </p>
                          <div class="">
                            <a href="">
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box">
                        <div>
                          <h2>
                            welcome to

                          </h2>
                          <h1>
                            web agency
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                          </p>
                          <div class="">
                            <a href="">
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box">
                        <div>
                          <h2>
                            welcome to

                          </h2>
                          <h1>
                            web agency
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                          </p>
                          <div class="">
                            <a href="">
                              Contact us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Whatwedo />
      <Mission visible={true} />
      <section class="work_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              CREATIVE WORKS
            </h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div class="work_container layout_padding2">
            <div class="box b-1">
              <img src={w1} alt="" />
            </div>
            <div class="box b-2">
              <img src={w2} alt="" />

            </div>
            <div class="box b-3">
              <img src={w3} alt="" />

            </div>
            <div class="box b-4">
              <img src={w4} alt="" />

            </div>
          </div>
        </div>
      </section>
      {/* <Clientsection /> */}
      <Services />
      {/* <DetailBox /> */}
      <Callback />

    </>

  );
}

function Whatwedo() {
  return (
    <section class="do_section layout_padding mt-4">
      <div class="container">
        <div class="heading_container">
          <h2>
            What we do
          </h2>
          <p>
            At Gitavni Tech, we are dedicated to delivering cutting-edge mobile and web solutions tailored to meet the diverse needs of businesses. With a strong commitment to innovation, our team harnesses the power of multiple programming languages to create robust and scalable applications.
          </p>
        </div>
        <div class="do_container">
          <div class="box arrow-start arrow_bg">
            <div class="img-box">
              <img src={d1} alt="" />
            </div>
            <div class="detail-box">
              <h6>
                Marketing
              </h6>
            </div>
          </div>
          <div class="box arrow-middle arrow_bg">
            <div class="img-box">
              <img src={d2} alt="" />
            </div>
            <div class="detail-box">
              <h6>
                Development
              </h6>
            </div>
          </div>
          <div class="box arrow-middle arrow_bg">
            <div class="img-box">
              <img src={d3} alt="" />
            </div>
            <div class="detail-box">
              <h6>
                Html5
              </h6>
            </div>
          </div>
          <div class="box arrow-end arrow_bg">
            <div class="img-box">
              <img src={d4} alt="" />
            </div>
            <div class="detail-box">
              <h6>
                Css
              </h6>
            </div>
          </div>
          <div class="box ">
            <div class="img-box">
              <img src={d5} alt="" />
            </div>
            <div class="detail-box">
              <h6>
                Wordpress
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Clientsection(){
  return (
    <section class="client_section">
        <div class="container">
          <div class="heading_container">
            <h2>
              WHAT CUSTOMERS SAY
            </h2>
          </div>
          <div class="carousel-wrap ">
            <div class="owl-carousel">
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/c-1.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span>
                        Dipiscing elit
                      </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/c-2.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span>
                        Dipiscing elit
                      </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/c-3.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span>
                        Dipiscing elit
                      </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
