import React from "react";
import Card from "./Card";
import data from './data';

const index = () => {
  return (
    <section class="blog" id="blog">
      <p class="section-subtitle">Our Blog</p>

      <h2 class="section-title">Latest Blog & News</h2>

      <div class="blog-grid">
        {data.map((value) => {
          return <Card key={value.id} id={value.id} image={value.image} title={value.blog_title} cal_img={value.cal_img}  date={value.date} comment_img={value.comment_img} comment={value.comment} />
        })}
      </div>
    </section>
  );
};

export default index;
