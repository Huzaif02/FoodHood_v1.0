import React from "react"
import Navbar from "../../components/Navbar/Navbar";
import BannerBackground from "../../assets/home/BannerBackground.png";
import BannerImage from "../../assets/home/BannerImage.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner" />
          </div>
          <div className="home-text-section">
              <h1 className="primary-heading">
                  Your Favorite Food Delivered Hot & Fresh
              </h1>
              <p className="primary-text">
                We are always here to serve you the best.
              </p>
              <a href="/Search" style={{ textDecoration: 'none' }}>
                <button className="secondary-button" >
                   Find Now 😋 
                </button>
              </a>
              
          </div>
          <div className="home-image-container"></div>
            <img src={BannerImage} alt="Food Bowl" />
        </div>
    </div>
  );
}

export default Home;