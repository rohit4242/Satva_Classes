import React, { useState } from "react";

import logo from "../assets/svg/Satva-logo.png";

function Index({ openSide, setOpenSide }) {
  let [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={logo} alt="Educator Logo" width="100" />
          </div>

          <ul className={open ? "navbar-nav active" : "navbar-nav "}>
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#course">Courses</a>
            </li>
            <li className="nav-item">
              <a href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <a href="#" alt="contact">
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => setOpenSide(!openSide)}
            >
              <p className="btn-text">Message Us</p>
              <span className="square"></span>
            </button>
          </a>

          <button
            className={open ? "nav-toggle-btn active" : "nav-toggle-btn "}
            onClick={() => setOpen(!open)}
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </nav>
      </header>

      {/* drawer  */}
      <div
        id="drawer-right-example"
        className={`${
          openSide ? "drawer-80" : "drawer-0"
        } transition-all duration-500`}
      >
        <h5 id="titleOfSidebar">Contact Us</h5>

        <button
          type="button"
          id="closeBtn"
          onClick={() => setOpenSide(!openSide)}
        >
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
          {/* <span className="sr-only">Close menu</span> */}
        </button>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <section class="bg-white">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="section-title-for-contact-page py-4">Contact Us</h2>
              <p class="section-text">Hey Contact With Us Right Now </p>
              <form action="#" class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block section-text mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@satvainstitute.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block section-text mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block section-text mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary my-4"
                  onClick={() => setOpenSide(!openSide)}
                >
                  <p className="btn-text">Submit</p>
                  <span className="square"></span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Index;
