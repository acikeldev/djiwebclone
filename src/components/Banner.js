import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./Banner.css";

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  setTimeout(nextSlide, 10000);

  return (
    <div className="banner">
      <div className="banner-container">
        <button className="arrow-left" onClick={prevSlide}>
          <i class="fas fa-angle-left fa-2x"></i>
        </button>
        <button className="arrow-right" onClick={nextSlide}>
          <i class="fas fa-angle-right fa-2x"></i>
        </button>
        <img src={SliderData[current].image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
