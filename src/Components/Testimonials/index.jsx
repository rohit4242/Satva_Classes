import React from "react";
import quote  from '../../assets/images/quote.png';
import Client  from '../../assets/images/client.jpg';

const index = () => {
  return (
    <section class="testimonials">
      <div class="testimonials-left">
        <p class="section-subtitle">Testimonial</p>

        <h2 class="section-title">What Our Students Says About Us</h2>

        <p class="section-text">
        We're proud of the success our students have achieved. Our commitment to providing quality education and individualized support has helped our students to excel in their academic pursuits. We believe that every student has the potential to succeed, and it's our privilege to be part of their journey towards a bright future.
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
            "I had a fantastic experience with Satva Institute. The instructors were extremely knowledgeable and supportive, and the curriculum was challenging yet engaging. Thanks to Satva Institute, I was able to achieve my academic goals and prepare for my future career. I highly recommend this institute to any student looking to succeed in their studies!".
          </p>

          <div class="testimonials-client">
            <div class="client-img-box">
              <img
                src={Client}
                alt="client christine rose"
              />
            </div>

            <div class="client-detail">
              <h4 class="client-name">Priyal Shah</h4>

              <p class="client-title">Student</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default index;
