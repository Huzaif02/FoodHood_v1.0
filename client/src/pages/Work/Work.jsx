import React from "react";
import PickMeals from "../../assets/home/PickMeals.png";
import ChooseMeals from "../../assets/home/ChooseMeals.png";
import DeliveryMeals from "../../assets/home/DeliveryMeals.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Search Meals",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            image: ChooseMeals,
            title: "Browse Results",
            text: "Lorem ipsum dolor sit amet, consectetur ",
        },
        {
            image: DeliveryMeals,
            title: "Place Order",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];




  return <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                accumsan lacus vel. Praesent elementum facilisis leo vel fringilla est. Ut porttitor leo a diam.
                 Nibh mauris cursus mattis molestie a. Ac tortor vitae
                </p>
            </div>
            <div className="work-section-bottom" >
                {
                    workInfoData.map((data) => (
                       <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="Card Images"/>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                       </div>
                    ) )
                }

            </div>
  </div>
}

export default Work;