import React from "react";
import blog_1 from "../../assets/images/blog-1.jpg";
import blog_2 from "../../assets/images/blog-2.jpg";
import blog_3 from "../../assets/images/blog-3.jpg";
import blog_4 from "../../assets/images/blog-3.jpg";

import calendar from "../../assets/images/calendar.png";
import comment from "../../assets/images/comment.png";

const index = () => {
  return (
    <section class="blog" id="blog">
      <p class="section-subtitle">Our Blog</p>

      <h2 class="section-title">Latest Blog & News</h2>

      <div class="blog-grid">
        <div class="blog-card">
          <div class="blog-banner-box">
            <img src={blog_1} alt="blog banner" />
          </div>

          <div class="blog-content">
            <h3 class="blog-title">
              <a href="#">Proin feugiat tortor non neque eleifend.</a>
            </h3>

            <div class="wrapper">
              <div class="blog-publish-date">
                <img src={calendar} alt="calendar icon" />

                <a href="#">07 Jan, 2022</a>
              </div>

              <div class="blog-comment">
                <img src={comment} alt="comment icon" />

                <a href="#">3 Comments</a>
              </div>
            </div>
          </div>
        </div>

        <div class="blog-card">
          <div class="blog-banner-box">
            <img src={blog_2} alt="blog banner" />
          </div>

          <div class="blog-content">
            <h3 class="blog-title">
              <a href="#">Proin feugiat tortor non neque eleifend.</a>
            </h3>

            <div class="wrapper">
              <div class="blog-publish-date">
                <img src={calendar} alt="calendar icon" />

                <a href="#">04 Jan, 2022</a>
              </div>

              <div class="blog-comment">
                <img src={comment} alt="comment icon" />

                <a href="#">10 Comments</a>
              </div>
            </div>
          </div>
        </div>

        <div class="blog-card">
          <div class="blog-banner-box">
            <img src={blog_3} alt="blog banner" />
          </div>

          <div class="blog-content">
            <h3 class="blog-title">
              <a href="#">Proin feugiat tortor non neque eleifend.</a>
            </h3>

            <div class="wrapper">
              <div class="blog-publish-date">
                <img src={calendar} alt="calendar icon" />

                <a href="#">01 Jan, 2022</a>
              </div>

              <div class="blog-comment">
                <img src={comment} alt="comment icon" />

                <a href="#">5 Comments</a>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-card">
          <div class="blog-banner-box">
            <img src={blog_4} alt="blog banner" />
          </div>

          <div class="blog-content">
            <h3 class="blog-title">
              <a href="#">Proin feugiat tortor non neque eleifend.</a>
            </h3>

            <div class="wrapper">
              <div class="blog-publish-date">
                <img src={calendar} alt="calendar icon" />

                <a href="#">01 Jan, 2022</a>
              </div>

              <div class="blog-comment">
                <img src={comment} alt="comment icon" />

                <a href="#">5 Comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
