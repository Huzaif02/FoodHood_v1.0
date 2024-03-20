import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import '../CSS/landing.css'

function Landing() {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
