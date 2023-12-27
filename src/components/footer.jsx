import React from 'react';
import map_img from '../images/map-img.png';
import location_white from '../images/location-white.png';
import telephone_white from '../images/telephone-white.png';
import envelope_white from '../images/envelope-white.png';
import insta from '../images/insta.png';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section class="info_section ">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="info_contact">
                <h5 className='text-customBrown'>
                  About Gitavani
                </h5>
                <p>
                Gitavani is a one stop solution for all your business needs. We help you scale up your business and help you reach your maximum audience. We provide customised websites, applications, SEO and digital marketing services at very affordable rates. We are committed to provide the best service to our customers.

                </p>
              </div>
            </div>
            <div class="col-md-4 mx-auto">
              <div class="info_info">
                <h5 className='text-customBrown'>
                  Popular Links
                </h5>
                <div className='flex flex-col gap-4'>
                  <a className='text-white hover:no-underline hover:text-customBrown' href="/">Home</a>
                  <a className='text-white hover:no-underline hover:text-customBrown' href="/about">About</a>
                  <a className='text-white hover:no-underline hover:text-customBrown' href="/contact">Contact Us</a>
                  {/* <a className='text-white hover:no-underline hover:text-customBrown' href="/whatwedo">What We Do</a> */}
                  {/* <a className='text-white hover:no-underline hover:text-customBrown' href="/portfolio">Portfolio</a> */}
                </div>
              </div>
            </div>
            <div class="col-md-3">
            <div class="info_form ">
                <h5 className='text-customBrown'>
                    Get In Touch
                </h5>
                <div className="info_contact">
                <div>
                  <div class="img-box">
                    <img src={location_white} width="18px" alt="" />
                  </div>
                  <p>
                    Address
                  </p>
                </div>
                <div>
                  <div class="img-box">
                    <img src={telephone_white} width="12px" alt="" />
                  </div>
                  <p>
                    +91 9157105230
                  </p>
                </div>
                <div>
                  <div class="img-box">
                    <img src={envelope_white} width="18px" alt="" />
                  </div>
                  <p>
                    skd.bcs1996@gmail.com
                  </p>
                </div>
                </div>
                {/* <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>
                        Subscribe
                    </button>
                </form> */}
                <div class="social_box">
                    <a href="">
                        {/* <img src={fb} alt="" /> */}
                    </a>
                    <a href="https://www.instagram.com/gaurangabace/">
                        {/* <img src={twitter} alt="" /> */}
                        <Instagram color='white'/>
                    </a>
                    <a href="">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC0px0-L5aGti0BhY6XKtneA">
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </div>
        </div>
          </div>
        </div>
      </section>
      <section class="container-fluid footer_section">
        <p>
          &copy; 2023 All Rights Reserved
          {/* <a href="https://html.design/"> Gitavani Tech</a> */}
        </p>
      </section>
    </>
  );
}
