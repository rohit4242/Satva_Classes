import React from "react";
import logo_footer from "../../assets/images/logo-footer.png";

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
            <a href="https://www.facebook.com/Satvaclasses">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://www.instagram.com/satvainstitute/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://twitter.com/SatvaInstitute">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.youtube.com/@satvainstitute4296">
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

          <li class="list-item"></li>
        </ul>

        <ul class="grid-item">
          <h4 class="item-heading">Main Branch</h4>

          <li class="list-item">
            <p>
              <a
                href="https://www.google.com/maps/dir/22.4090495,71.2042617/satva+institute/@22.337168,70.5783758,8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395c2bc3d56b1057:0x3c28a00bd16c28c9!2m2!1d72.6322216!2d23.1849969"
                rel="noopener"
                target="_blank"
              >
                345, 346, 347 Pramukh Mastana
                <br />
                Kudasan, Gandhinagar, 382431{" "}
              </a>
            </p>
          </li>

          <li class="list-item">
            {" "}
            <p>
              <a href="tel:+919909089244">+91 99090 89244</a>
            </p>
          </li>
          <li class="list-item">
            {" "}
            <p>
              <a href="mailto:inquiry@satvaclasses.com">inquiry@satvaclasses.com</a>
            </p>
          </li>
        </ul>

        <div class="grid-item">
          <h4 class="item-heading">Second Branch</h4>

          <li class="list-item">
            <p>
              <a
                href="https://goo.gl/maps/ZUuzTuSwcpd4RpUo6"
                rel="noopener"
                target="_blank"
              >
                Talent Plus Academy, Behind Nirma University
                <br />
                Tragad, New Chandkheda, Ahemdabad - 382470{" "}
              </a>
            </p>
          </li>

          <li class="list-item">
            {" "}
            <p>
              <a href="tel:+917990696242">+91 79906 96242</a>
            </p>
          </li>
          <li class="list-item">
            {" "}
            <p>
              <a href="mailto:inquiry@satvaclasses.com">inquiry@satvaclasses.com</a>
            </p>
          </li>
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
