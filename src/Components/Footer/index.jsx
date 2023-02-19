import React from "react";
import logo_footer from "../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div class="footer-grid">
        <div class="grid-item">
          <div class="footer-logo">
            <img src={logo_footer} alt="educator logo white" />
          </div>

          <p class="footer-text">
            Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu
            eget, blandit ultricies risus. Vivamus fringilla urna vel risus
            congue accumsan.
          </p>

          <div class="social-link">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
        </div>

        <ul class="grid-item">
          <h4 class="item-heading">Our Link</h4>

          <li class="list-item">
            <a href="#home">Home</a>
          </li>

          <li class="list-item">
            <a href="#about">About Us</a>
          </li>

          <li class="list-item">
            <a href="#course">Courses</a>
          </li>

          <li class="list-item">
            <a href="#blog">Blog</a>
          </li>

          <li class="list-item">
            <Link to="contactPage">Contact Us</Link>
          </li>
        </ul>

        <ul class="grid-item">
          <h4 class="item-heading">Other Link</h4>

          <li class="list-item">
            <a href="#instructor">Instructor</a>
          </li>

          <li class="list-item">
            <Link to="faq">FAQ</Link>
          </li>

          <li class="list-item">
            <a href="#event">Event</a>
          </li>

          <li class="list-item">
            <a href="#">Privacy Policy</a>
          </li>

          <li class="list-item">
            <a href="#">Term & Condition</a>
          </li>
        </ul>

        <div class="grid-item">
          <h4 class="item-heading">Subscribe Now</h4>

          <div class="wrapper">
            <input type="text" name="subscribe" placeholder="Email Address" />

            <button class="send-btn">
              <ion-icon name="paper-plane"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <p class="copyright">
        Copyright © 2022{" "}
        <a href="https://webbuilders.tech/">WebBuilders.tech</a>. All rights
        reserved.
      </p>
    </footer>
  );
};

export default index;
