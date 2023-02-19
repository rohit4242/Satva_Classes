import React from "react";
import cta_bg_img from "../../assets/images/Screenshot__3_-removebg-preview.png";
const index = () => {
  return (
    <section class="contact">
      <div class="contact-card" id="contact">
        <img
          src={cta_bg_img}
          alt="shape"
          class="contact-card-bg"
        />

        <h2>Start Your Best Online Classes With Us</h2>

        <button class="btn btn-primary">
          <p class="btn-text">Contact Us</p>
          <span class="square"></span>
        </button>
      </div>
    </section>
  );
};

export default index;
