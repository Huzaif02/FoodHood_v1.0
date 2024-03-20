// import { BsFillBagFill } from "react-icons/bs";
import swiggy from '../../assets/images/swiggy.png'
import zomato from '../../assets/images/zomato.png'

import './Card.css'

import React from 'react'

const Card = ({list}) => {
  return (
    <>
      <section className="card-container">
  <div className="card">
    {list.platform === "swiggy" ? (
      <img src={swiggy} alt={list.platform} className="food-image" />
    ) : (
      <img src={zomato} alt={list.platform} className="food-image" />
    )}

    <div className="card-details">
      <div className="card-header">
        <h4 className="food-title">{list.food_item}</h4>
        <div className="food-rating">{list.aggregate_rating}</div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-name">{list.name}</div>
      </div>
      <div className="card-header">
        <div className="restaurant-city">{list.city}</div>
        <div className="food-cost">
          <div>Rs.{list.cost}</div>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="see-more-btn"
          onClick={() =>
            list.platform === "swiggy"
              ? window.open("https://www.swiggy.com", "_blank")
              : window.open("https://www.zomato.com", "_blank")
          }
        >
          See More
        </button>
      </div>
    </div>
  </div>
</section>

    </>
    
    
  )
}

export default Card;
