import React from "react";
import feature_icon_1 from "../../assets/images/feature-icon-1.png";
import feature_icon_2 from "../../assets/images/feature-icon-2.png";
import feature_icon_3 from "../../assets/images/feature-icon-3.png";
import coure_features_img from "../../assets/images/coure-features-img.jpg";

const index = () => {
  return (
    <section class="features">
      <div class="features-left">
        <p class="section-subtitle">Our Mission</p>

        <h2 class="section-title">Enriching Minds, Changing Lives</h2>

        <ul>
          <li class="features-item">
            <div class="item-icon-box blue">
              <img
                src={feature_icon_1}
                alt="feature icon"
              />
            </div>

            <div class="wrapper">
              <h3 class="item-title">Empowering Lifelong Learning</h3>

              <p class="item-text">
              empower individuals to achieve their full potential through lifelong learning, offering innovative and accessible educational programs that foster personal and professional growth.
              </p>
            </div>
          </li>

          <li class="features-item">
            <div class="item-icon-box pink">
              <img
                src={feature_icon_2}
                alt="feature icon"
              />
            </div>

            <div class="wrapper">
              <h3 class="item-title">Advancing Knowledge and Innovation</h3>

              <p class="item-text">
              advance knowledge and innovation through cutting-edge research, teaching, and engagement, preparing the next generation of leaders to address the world's most pressing challenges.
              </p>
            </div>
          </li>

          <li class="features-item">
            <div class="item-icon-box purple">
              <img
                src={feature_icon_3}
                alt="feature icon"
              />
            </div>

            <div class="wrapper">
              <h3 class="item-title">Transforming Lives Through Education</h3>

              <p class="item-text">
              transform lives through education, promoting social mobility and economic growth by providing students with the tools and opportunities they need to succeed in an ever-changing world.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="features-right">
        <img
          src={coure_features_img}
          alt="core features "
        />
      </div>
    </section>
  );
};

export default index;
