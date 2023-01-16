import React from "react";
import feature_icon_1 from "../../assets/images/feature-icon-1.png";
import feature_icon_2 from "../../assets/images/feature-icon-2.png";
import feature_icon_3 from "../../assets/images/feature-icon-3.png";
import coure_features_img from "../../assets/images/coure-features-img.jpg";

const index = () => {
  return (
    <section class="features">
      <div class="features-left">
        <p class="section-subtitle">Core Features</p>

        <h2 class="section-title">See What Our Mission Are</h2>

        <ul>
          <li class="features-item">
            <div class="item-icon-box blue">
              <img
                src={feature_icon_1}
                alt="feature icon"
              />
            </div>

            <div class="wrapper">
              <h3 class="item-title">Student Life</h3>

              <p class="item-text">
                Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
                consectetur dignissim dictum.
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
              <h3 class="item-title">Best Online Class</h3>

              <p class="item-text">
                Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
                consectetur dignissim dictum.
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
              <h3 class="item-title">24x7 Program</h3>

              <p class="item-text">
                Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula
                consectetur dignissim dictum.
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
