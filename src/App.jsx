import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Layouts/index';
import Home from './Components/Home/index';
import CourseCategory from './Components/CourseCategory/index';
import AboutUs from './Components/AboutUs/index';
import Course from './Components/Course/index';
import Event from './Components/Event/index';
import Features from './Components/Features/index';
import Instructor from './Components/Instructor/index';
import Testimonials from './Components/Testimonials/index';
import Blogs from './Components/Blogs/index';
import ContactUs from './Components/ContactUs/index';
import Footer from './Components/Footer/index';

function App() {

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
    <Blogs />
    <ContactUs />
    <Footer />
  </div>
  )
}

export default App
