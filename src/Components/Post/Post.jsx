import React from "react";
import { useParams } from "react-router-dom";
import data from "../Blogs/data";
const Post = () => {
  const { postId } = useParams();
  console.log(postId);
  return (
    <div>
      {data
        .filter((x) => x.id == postId)
        .map((value) => (
          <div><img src={value.image} alt={value.blog_title} /></div>
        ))}
    </div>
  );
};

export default Post;
