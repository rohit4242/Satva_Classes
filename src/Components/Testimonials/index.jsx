import React from "react";
import quote  from '../../assets/images/quote.png';
import Client  from '../../assets/images/client.jpg';

const index = () => {
  return (
    <section class="testimonials">
      <div class="testimonials-left">
        <p class="section-subtitle">Testimonial</p>

        <h2 class="section-title">What Our Client Says About Us</h2>

        <p class="section-text">
          Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat
          vehicula sem, et imperdiet enim tempor id. Phasellus lobortis
          efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor
          ligula ullamcorper venenatis.
        </p>
      </div>

      <div class="testimonials-right">
        <div class="testimonials-card">
          <img
            src={quote}
            alt="quote icon"
            class="quote-img"
          />

          <p class="testimonials-text">
            "Proin feugiat tortor non neque eleifend, at fermentum est
            elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit
            amet ligula ut eleifend. Mauris consequat mauris sit amet turpis
            commodo fermentum. Quisque consequat tortor ut nisl finibus".
          </p>

          <div class="testimonials-client">
            <div class="client-img-box">
              <img
                src={Client}
                alt="client christine rose"
              />
            </div>

            <div class="client-detail">
              <h4 class="client-name">Christine Rose</h4>

              <p class="client-title">Customer</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default index;
