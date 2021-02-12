import React from "react";
import "./VideoSlider.css";
function VideoSlider() {
  return (
    <div className="video-slider">
      <div className="video-container">
        <video muted loop autoPlay="true">
          <source
            src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Homepage%20Banner%20Video/air2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="video-container">
        <video muted loop autoPlay="true">
          <source
            src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Homepage%20Banner%20Video/OP.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="video-container">
        <video muted loop autoPlay="true">
          <source
            src="https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Homepage%20Banner%20Video/Ronin-sc.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default VideoSlider;
