import React from "react"
import Logo from "../../assets/images/Logo.png"
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const Footer = () => {
  return <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Website Logo"/>
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube/>
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>800-543-3982</span>
                    <span>hello@foodhood.com</span>
                    <span>press@foodhood.com</span>
                    <span>contact@foodhood.com</span>
                </div>
                <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
            </div>
  </div>;  
};

export default Footer