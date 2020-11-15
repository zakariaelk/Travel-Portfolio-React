import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/img-9.jpg" text="Explore the hidden waterfalls behind the amazon" label="Adventure" path="/services" />
            <CardItem src="images/img-8.jpg" text="Dive into the serene beauty of the desert" label="Adventure" path="/services" />
          </ul>

          <ul className="cards__items">
            <CardItem src="images/img-5.jpg" text="Explore the hidden waterfalls behind the amazon" label="Adventure" path="/services" />
            <CardItem src="images/img-6.jpg" text="Dive into the serene beauty of the desert" label="Adventure" path="/services" />
            <CardItem src="images/img-7.jpg" text="Dive into the serene beauty of the desert" label="Adventure" path="/services" />{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
