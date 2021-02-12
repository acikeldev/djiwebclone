import React from "react";
import "./ExploreCards.css";
import { Link } from "react-router-dom";
function ExploreCards() {
  return (
    <div className="explore">
      <div className="explore-title">
        Explore DJI Products in Different Fields
      </div>
      <div className="explore-cards">
        <div
          className="explore-card"
          style={{
            backgroundImage: `url(
              "https://www1.djicdn.com/cms/uploads/1d8a7fa646e04a1fe8f363b28916e8e3.webp"
            )`,
          }}
        >
          <h1>Video Production</h1>
          <h3>Professional Aerial and Ground Filmmaking Tools</h3>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
        <div
          className="explore-card"
          style={{
            backgroundImage: `url(
              "https://www1.djicdn.com/cms/uploads/bccdb5d218eb2c32dccb5c88babc7679.webp"
            )`,
          }}
        >
          <h1>Enterprise</h1>
          <h3>Drone Solutions for a New Generation of Work</h3>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
        <div
          className="explore-card"
          style={{
            backgroundImage: `url(
              "https://www1.djicdn.com/cms/uploads/6014fa854ddc342d18b1f95831e12a2e.webp"
            )`,
          }}
        >
          <h1>Agriculture</h1>
          <h3>Efficient and Intelligent Agricultural Solution</h3>
          <h3>
            Learn More <i className="fa fa-angle-right"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ExploreCards;
