import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Model.css";
const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="blog-card">
        <div className="blog-banner-box">
          <img src={props.image} onClick={toggleModal} alt="blog banner" />
        </div>

        <div className="blog-content">
          <h3 className="blog-title" onClick={toggleModal}>
            <Link to={`blog/${props.id}`}>{props.title}</Link>
            {/* <a>{props.title}</a> */}
          </h3>

          <div className="wrapper">
            <div className="blog-publish-date">
              <img src={props.cal_img} alt="calendar icon" />

              <a href="#">{props.date}</a>
            </div>

            <div className="blog-comment">
              <img src={props.comment_img} alt="comment icon" />

              <a href="#">{props.comment}</a>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img src={props.image} alt="blog banner" />

            <h3 className="blog-title">{props.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
