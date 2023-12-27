import React from 'react';

export default function Callback() {
  function Submit(e) {
    const Formele = document.querySelector('form');
    e.preventDefault();
    const formData = new FormData(Formele);
    try {
      fetch("https://script.google.com/macros/s/AKfycbydm462wBbyctPHThZ-bKY0vnBIOev7Z7GLm__gehpf31C_gdWmjOHDz_YskJTMd9kh4A/exec",
        {
          method: "POST",
          body: formData
        }).then((res)=>res.json()).then((data)=>{
          console.log(data);
        }).catch((error)=>console.log("error"));
      console.log("sucess");
    } catch (e) {
      console.log("error");
    }
    console.log("submitted");

  }
  return (
    <section class="contact_section layout_padding">
      <div class="container">

        <div class="heading_container">
          <h2>
            Request A Call Back
          </h2>
        </div>
        <div class="">
          <div class="">
            <div class="row">
              <div class="col-md-9 mx-auto">
                <div class="contact-form">
                  <form action="" onSubmit={(e) => Submit(e)}>
                    <div>
                      <input type="text" name='Name' placeholder="Name " />
                    </div>
                    <div>
                      <input type="text" name='Phone' placeholder="Number" />
                    </div>
                    <div>
                      <input type="email" name='Email' placeholder="Email Address" />
                    </div>
                    <div>
                      <input type="text" name='Message' placeholder="Message" class="input_message" />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn_on-hover">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="map_img-box">
        <img src={map_img} alt="" />
      </div> */}
      </div>
    </section>
  );
}
