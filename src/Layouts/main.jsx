import React from "react";
import Header from "./index";
import Home from "../Components/Home/index";
import CourseCategory from "../Components/CourseCategory/index";
import AboutUs from "../Components/AboutUs/index";
import Course from "../Components/Course/index";
import Event from "../Components/Event/index";
import Features from "../Components/Features/index";
import Instructor from "../Components/Instructor/index";
import Testimonials from "../Components/Testimonials/index";
import FAQSection from "../Components/FAQSection/FAQSection";

import Blogs from "../Components/Blogs/Blogs";
import ContactUs from "../Components/ContactUs/index";
import Footer from "../Components/Footer/index";

const mainPage = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <CourseCategory />
      <AboutUs />
      <Course />
      <Event />
      <Features />
      <Instructor />
      <Testimonials />
      <FAQSection/>
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default mainPage;
