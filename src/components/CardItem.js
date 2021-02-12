import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <div
        className="card-item"
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div className="banner-text">
          <div className="banner-text-eyebrow">{props.title}</div>
          {props.name_svg == 0 ? (
            <div className="card-name">{props.text}</div>
          ) : (
            <img src={props.name_svg} alt="mavicAir2" />
          )}

          <h5>{props.slogan}</h5>
          <Link to="/mavic-air-2" className="link">
            <div className="learn-more">
              <span>{props.link}</span>
              <i class="fa fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardItem;
