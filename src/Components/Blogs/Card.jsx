import React, { useState } from "react";
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
            <a>{props.title}</a>
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
            <div className="blog-image">
            <img src={props.image} className="w-50" alt="blog banner" />

            </div>

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
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
