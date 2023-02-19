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
      <p class="section-subtitle">What We Offer</p>

      <h2 class="section-title">
        Discover high-quality modules designed for success.
      </h2>

      <div class="course-grid">
        <div class="course-card">
          <div class="course-banner">
            <img src={course_1} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Basic
              </a>
              <a href="#" class="badge-tag blue">
                Fun Learning
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Pre-Foundation</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Our modules offer a comprehensive understanding of the material,
                with experienced instructors who make learning fun and engaging.
                We foster critical thinking and problem-solving skills,
                preparing young learners for a successful academic career and a
                lifelong love of learning.
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">
                For Grade: 1<sup>st</sup> to 5<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_2} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Learn with Passion
              </a>
              <a href="#" class="badge-tag blue">
                Academic Boost
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Foundation</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Our modules are designed to enhance learning, boost confidence,
                and inspire academic excellence. Our engaging curriculum and
                expert instructors encourage creativity, collaboration, and
                independent thinking, giving students the skills they need to
                succeed in their future academic and professional endeavors.
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">
                For Grade: 6<sup>th</sup> to 10<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_3} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
                Financial Literacy
              </a>
              <a href="#" class="badge-tag blue">
                Global Trade{" "}
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Commerce</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Our modules offer a comprehensive education in the fields of
                finance, accounting, and management, preparing students for
                success in the business world. an engaging curriculum that
                emphasizes practical skills, provide students with the knowledge
                and confidence they need to achieve their academic and
                professional goals.
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup>
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_4} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
              STEM Education
              </a>
              <a href="#" class="badge-tag blue">
              Science Lab
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">PCM</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Our modules provide hands-on learning that prepares students for
                success in a fast-paced world. Expert instructors and practical
                curriculum develop critical thinking and problem-solving skills.
                Our engaging approach inspires a passion for STEM, helping
                students achieve their full potential.{" "}
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup> A-Group
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_5} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
              Health Sciences
              </a>
              <a href="#" class="badge-tag blue">
              Medical Basics
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">PCB</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Our modules provide an exceptional education that equips
                students with practical skills needed to thrive in the dynamic
                and challenging field of healthcare. With a focus on medical
                theory and hands-on learning, inspires a passion for medicine
                and helps students to become compassionate medical
                professionals.
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">
                For Grade: 11<sup>th</sup> And 12<sup>th</sup> B-Group
              </div>
            </div>
          </div>
        </div>

        <div class="course-card">
          <div class="course-banner">
            <img src={course_6} alt="course banner" />

            <div class="course-tag-box">
              <a href="#" class="badge-tag orange">
              Intensive Training
              </a>
              <a href="#" class="badge-tag blue">
              Quick Learning
              </a>
            </div>
          </div>

          <div class="course-content">
            <h3 class="card-title">
              <a href="#">Crash Course</a>
            </h3>

            <div class="wrapper border-bottom">
              <p class="author-name">
                Maximize your learning potential with our crash courses. Led by
                experts and customized to your goals, our intensive courses
                provide the knowledge and skills you need to succeed. With our
                focused approach, you'll achieve your learning goals in record
                time. Take the fast track to success with our crash courses.
              </p>
            </div>

            <div class="wrapper">
              <div class="course-price">For Every One</div>
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
