import React from 'react';
import who_img from '../images/who-img.jpg';

export default function Mission({visible}) {
  return (
    <section class="who_section ">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="img-box">
                <img src={who_img} alt="" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="detail-box">
                <div class="heading_container">
                  <div className='uppercase text-[2em] sm:text-[4em] font-bold mt-4'>
                    Our Mission
                  </div>
                </div>
                <p>
                  At Gitavni Tech, our mission is to empower businesses and individuals by harnessing the full potential of the digital landscape. We believe in creating websites that not only meet but exceed your expectations, providing a platform for success in the online world.
                </p>
                <div className={`${visible ? 'block' : 'hidden'}`}>
                  <a href="/about">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
