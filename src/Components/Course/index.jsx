import React from "react";
import course_1 from "../../assets/images/course-1.jpg";
import course_2 from "../../assets/images/course-2.jpg";
import course_3 from "../../assets/images/course-3.jpg";
import course_4 from "../../assets/images/course-4.jpg";
import course_5 from "../../assets/images/course-5.jpg";
import course_6 from "../../assets/images/course-6.jpg";

import course_instructor_img from "../../assets/images/course-instructor-img.jpg";
import student_icon from "../../assets/images/student-icon.png";

const index = () => {
  return (
    <section class="course" id="course">
      <p class="section-subtitle">Our Online Courses</p>

      <h2 class="section-title">Find The Right Online Course For You</h2>

      <div class="course-grid">
        <div class="course-card">
          <div class="course-banner">
            <img src={course_1} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Become product manager learn skills.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>5.0 (2k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$50.00</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>600k</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_2} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Fashion and luxury fashion in a changing.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>4.7 (5k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$80.00</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>545k</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_3} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Learning to write as a professional.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>4.1 (3k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$29.90</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>317k</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_4} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Improving accessibility of Your markdown.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>4.8 (3.9k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$49.90</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>891k</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_5} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Master query in a short period of time.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>3.8 (1k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$89.00</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>204k</p>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_6} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Business
              </a>
              <a href="#" class="badge-tag blue">
                Marketing
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Business Intelligence analyst Course 2022.</a>
            </h3>

            <div class="wrapper border-bottom">
              <div class="author">
                <img
                  src={course_instructor_img}
                  alt="course instructor image"
                  class="author-img"
                />

                <a href="#" class="author-name">
                  Lillian Wals
                </a>
              </div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <p>4.9 (23k)</p>
              </div>
            </div>

            <div class="wrapper">
              <div class="course-price">$199.00</div>

              <div class="enrolled">
                <div class="icon-user">
                  <img src={student_icon} alt="user icon" />
                </div>

                <p>1.3M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-primary">
        <p class="btn-text">View All Course</p>
        <span class="square"></span>
      </button>
    </section>
  );
};

export default index;
