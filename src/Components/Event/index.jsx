import React from "react";
import event_img from "../../assets/images/event-img.jpg";

const index = () => {
  return (
    <section class="event" id="event">
      <div class="event-left">
        <div class="event-banner">
          <img
            src={event_img}
            alt="event banner"
            class="banner-img"
          />
        </div>

        <button class="play smooth-zigzag-anim-1">
          <div class="play-icon pulse-anim">
            <ion-icon name="play-circle"></ion-icon>
          </div>

          <p>Watch Us !</p>
        </button>
      </div>

      <div class="event-right">
        <p class="section-subtitle">Our Events</p>

        <h2 class="section-title">Join Our Upcoming Events</h2>

        <div class="event-card-group">
          <div class="event-card">
            <div class="content-left">
              <p class="day">28</p>
              <p class="month">Feb, 2022</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">10:30am To 2:30pm</p>
                <p class="place">Poland</p>
              </div>

              <a href="#" class="event-name">
                Business creativity workshops
              </a>
            </div>
          </div>

          <div class="event-card">
            <div class="content-left">
              <p class="day">15</p>
              <p class="month">Mar, 2022</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">10:30am To 2:30pm</p>
                <p class="place">Poland</p>
              </div>

              <a href="#" class="event-name">
                Street Performance: Call for Art.
              </a>
            </div>
          </div>

          <div class="event-card">
            <div class="content-left">
              <p class="day">20</p>
              <p class="month">May, 2022</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">10:30am To 2:30pm</p>
                <p class="place">Poland</p>
              </div>

              <a href="#" class="event-name">
                Digital transformation conference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
