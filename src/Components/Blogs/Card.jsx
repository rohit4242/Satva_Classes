import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
              <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                  <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {props.title}
                  </h1>
                </header>
                <p class="lead">
                  Flowbite is an open-source library of UI components built with
                  the utility-first classes from Tailwind CSS. It also includes
                  interactive elements such as dropdowns, modals, datepickers.
                </p>
                <p>
                  Before going digital, you might benefit from scribbling down
                  some ideas in a sketchbook. This way, you can think things
                  through before committing to an actual design project.
                </p>
                <p>
                  But then I found a{" "}
                  <a href="https://flowbite.com">
                    component library based on Tailwind CSS called Flowbite
                  </a>
                  . It comes with the most commonly used UI components, such as
                  buttons, navigation bars, cards, form elements, and more which
                  are conveniently built with the utility classes from Tailwind
                  CSS.
                </p>
                  <img
                    src={props.image}
                    alt=""
                    className="modal-img "
                  />
                <h2>Getting started with Flowbite</h2>
                <p>
                  First of all you need to understand how Flowbite works. This
                  library is not another framework. Rather, it is a set of
                  components based on Tailwind CSS that you can just copy-paste
                  from the documentation.
                </p>
                <p>
                  It also includes a JavaScript file that enables interactive
                  components, such as modals, dropdowns, and datepickers which
                  you can optionally include into your project via CDN or NPM.
                </p>
                <p>
                  You can check out the{" "}
                  <a href="https://flowbite.com/docs/getting-started/quickstart/">
                    quickstart guide
                  </a>{" "}
                  to explore the elements by including the CDN files into your
                  project. But if you want to build a project with Flowbite I
                  recommend you to follow the build tools steps so that you can
                  purge and minify the generated CSS.
                </p>
                <p>
                  You'll also receive a lot of useful application UI, marketing
                  UI, and e-commerce pages that can help you get started with
                  your projects even faster. You can check out this{" "}
                  <a href="https://flowbite.com/docs/components/tables/">
                    comparison table
                  </a>{" "}
                  to better understand the differences between the open-source
                  and pro version of Flowbite.
                </p>
                <h2>When does design come in handy?</h2>
                <p>
                  While it might seem like extra work at a first glance, here
                  are some key moments in which prototyping will come in handy:
                </p>
                <ol>
                  <li>
                    <strong>Usability testing</strong>. Does your user know how
                    to exit out of screens? Can they follow your intended user
                    journey and buy something from the site you’ve designed? By
                    running a usability test, you’ll be able to see how users
                    will interact with your design once it’s live;
                  </li>
                  <li>
                    <strong>Involving stakeholders</strong>. Need to check if
                    your GDPR consent boxes are displaying properly? Pass your
                    prototype to your data protection team and they can test it
                    for real;
                  </li>
                  <li>
                    <strong>Impressing a client</strong>. Prototypes can help
                    explain or even sell your idea by providing your client with
                    a hands-on experience;
                  </li>
                  <li>
                    <strong>Communicating your vision</strong>. By using an
                    interactive medium to preview and test design elements,
                    designers and developers can understand each other — and the
                    project — better.
                  </li>
                </ol>
                <h3>Laying the groundwork for best design</h3>
                <p>
                  Before going digital, you might benefit from scribbling down
                  some ideas in a sketchbook. This way, you can think things
                  through before committing to an actual design project.
                </p>
                <p>
                  Let's start by including the CSS file inside the{" "}
                  <code>head</code> tag of your HTML.
                </p>
                <h3>Understanding typography</h3>
                <h4>Type properties</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h4>Baseline</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h4>Measurement from the baseline</h4>
                <p>
                  A typeface is a collection of letters. While each letter is
                  unique, certain shapes are shared across letters. A typeface
                  represents shared patterns across a collection of letters.
                </p>
                <h3>Type classification</h3>
                <h4>Serif</h4>
                <p>
                  A serif is a small shape or projection that appears at the
                  beginning or end of a stroke on a letter. Typefaces with
                  serifs are called serif typefaces. Serif fonts are classified
                  as one of the following:
                </p>
              </article>
            </div>
            {/* <div className="blog-image">
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
            </p> */}
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
