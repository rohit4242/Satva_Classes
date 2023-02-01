import React from "react";

import course_category_icon_1 from "../../assets/images/course-category-icon-1.png";
import course_category_icon_1_w from "../../assets/images/course-category-icon-1-w.png";

import course_category_icon_2 from "../../assets/images/course-category-icon-2.png";
import course_category_icon_2_w from "../../assets/images/course-category-icon-2-w.png";

import course_category_icon_3 from "../../assets/images/course-category-icon-3.png";
import course_category_icon_3_w from "../../assets/images/course-category-icon-3-w.png";

import course_category_icon_4 from "../../assets/images/course-category-icon-4.png";
import course_category_icon_4_w from "../../assets/images/course-category-icon-4-w.png";

import course_category_icon_5 from "../../assets/images/course-category-icon-5.png";
import course_category_icon_5_w from "../../assets/images/course-category-icon-5-w.png";

import course_category_icon_6 from "../../assets/images/course-category-icon-6.png";
import course_category_icon_6_w from "../../assets/images/course-category-icon-6-w.png";

const index = () => {
  return (
    <section class="category">
      <p class="section-subtitle">
        your child deserves a chance at a better future.
      </p>

      <h2 class="section-title">Why Select Us?</h2>

      <ul class="course-item-group">
        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_1}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_1_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Focused and Well planned course curriculum</a>
            </h3>

            {/* <p class="category-subtitle">India’s best brain pool Subject wise unit expert faculty Combination of eminent professors.</p> */}
          </div>
        </li>

        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_2}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_2_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Best Infrastructure & Support</a>
            </h3>

            {/* <p class="category-subtitle">Improve your business</p> */}
          </div>
        </li>

        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_3}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_3_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Comprehensive Study Material</a>
            </h3>

            {/* <p class="category-subtitle">Fun & Challenging</p> */}
          </div>
        </li>

        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_4}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_4_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Best Pool of Faculty</a>
            </h3>

            {/* <p class="category-subtitle">New Skills, New You</p> */}
          </div>
        </li>

        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_5}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_5_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Comprehensive Coverage</a>
            </h3>

            {/* <p class="category-subtitle">Improve your business</p> */}
          </div>
        </li>

        <li class="course-category-item">
          <div class="wrapper">
            <img
              src={course_category_icon_6}
              alt="category icon"
              class="category-icon default"
            />

            <img
              src={course_category_icon_6_w}
              alt="category icon white"
              class="category-icon hover"
            />
          </div>

          <div class="course-category-content">
            <h3 class="category-title">
              <a href="#nothing">Dedication and Commitment</a>
            </h3>

            {/* <p class="category-subtitle">Fun & Challenging</p> */}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default index;
