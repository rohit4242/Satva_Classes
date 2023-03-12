import React from "react";
import event_img from "../../assets/images/event-img.jpg";

const index = () => {
  return (
    <section class="event" id="event">
      <div class="event-left">
        <div class="event-banner">
          <img src={event_img} alt="event banner" class="banner-img" />
        </div>

        <a href="https://www.youtube.com/watch?v=XSrPFlBjToI" target='_blank'>
          <button class="play smooth-zigzag-anim-1">
            <div class="play-icon pulse-anim">
              <ion-icon name="play-circle"></ion-icon>
            </div>

            <p>Watch Us !</p>
          </button>
        </a>
      </div>

      <div class="event-right">
        <p class="section-subtitle">Our Events</p>

        <h2 class="section-title">Join Our Upcoming Events</h2>

        <div class="event-card-group">
          <div class="event-card">
            <div class="content-left">
              <p class="day">28</p>
              <p class="month">March, 2023</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">10:30am To 2:30pm</p>
                <p class="place">Gandhinagar</p>
              </div>

              <a href="#" class="event-name">
                walk-in Interview
              </a>
            </div>
          </div>

          <div class="event-card">
            <div class="content-left">
              <p class="day">15</p>
              <p class="month">Mar, 2023</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">10:30am To 6:30pm</p>
                <p class="place">Ahemdabad</p>
              </div>

              <a href="#" class="event-name">
                Addmissions Open Till 15 April 
              </a>
            </div>
          </div>

          <div class="event-card">
            <div class="content-left">
              <p class="day">20</p>
              <p class="month">May, 2023</p>
            </div>

            <div class="content-right">
              <div class="schedule">
                <p class="time">12:00am To 4:30pm</p>
                <p class="place">Gandhinagar</p>
              </div>

              <a href="#" class="event-name">
                Satva Fest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
