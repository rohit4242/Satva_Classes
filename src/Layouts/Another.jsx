import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/Satva-logo.png";
function Index() {
  let [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Educator Logo" width="140" />
        </div>

        <ul className={open ? "navbar-nav active" : "navbar-nav "}>
          <li className="nav-item">
            <Link to="/">Home</Link>
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

        <a href="#contact" alt="contact">
          {" "}
          <button className="btn btn-primary">
            <p className="btn-text">Contact Us</p>
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
  );
}

export default Index;
