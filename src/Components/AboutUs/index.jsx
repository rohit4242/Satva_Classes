import React from "react";
import about_img_bg from "../../assets/svg/bg-image.png";
import about_img from "../../assets/images/about-img.png";
import banner_aliment_icon_1 from "../../assets/svg/banner-aliment-icon-1.svg";
import banner_aliment_icon_3 from "../../assets/svg/banner-aliment-icon-2.svg";

const index = () => {
  return (
    <section class="about" id="about">
      <div class="about-left">
        <div class="img-box">
          <img src={about_img_bg} alt="about bg" class="about-bg" />

          <img src={about_img} alt="about person" class="about-img" />

          <img
            src={banner_aliment_icon_1}
            alt=""
            class="icon-1 smooth-zigzag-anim-1"
            width="250"
          />
          <img
            src={banner_aliment_icon_3}
            alt=""
            class="icon-2 smooth-zigzag-anim-3"
            width="240"
          />
        </div>
      </div>

      <div class="about-right">
        <p class="section-subtitle">About Us</p>

        <h2 class="section-title">Unlock your academic potential with us.</h2>

        <p class="section-text">
          Satva Institute is a structured academy complete in all aspects which
          provides quality guidance for 6th-7th-8th-9th-10th-11th-12thstandards
          in CBSE/GSEB/ICSE Board (English Medium+ગુજરાતી માધ્યમ)
        </p>

        <ul class="about-ul">
          <li>
            <ion-icon name="checkmark-circle"></ion-icon>
            <p>
              Unlock your academic potential with personalized coaching and
              guidance from experienced faculty.
            </p>
          </li>

          <li>
            <ion-icon name="checkmark-circle"></ion-icon>
            <p>
              We believe every student has the potential to succeed, and we're
              here to help you unlock it. one.
            </p>
          </li>

          <li>
            <ion-icon name="checkmark-circle"></ion-icon>
            <p>
              Join our community of learners, mentors, and leaders and discover
              your full potential.
            </p>
          </li>
        </ul>

        <button class="btn btn-primary">
          <p class="btn-text">Explore More</p>
          <span class="square"></span>
        </button>
      </div>
    </section>
  );
};

export default index;
