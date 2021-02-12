import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { CardData as cd } from "./CardData";
function Cards() {
  return (
    <div className="cards">
      <CardItem
        bg={cd[0].bg}
        title={cd[0].title}
        name_svg={cd[0].name_svg}
        slogan={cd[0].slogan}
        link={cd[0].link}
        text={cd[0].text}
      />
      <CardItem
        bg={cd[1].bg}
        title={cd[1].title}
        name_svg={cd[1].name_svg}
        slogan={cd[1].slogan}
        link={cd[1].link}
        text={cd[1].text}
      />
      <CardItem
        bg={cd[2].bg}
        title={cd[2].title}
        name_svg={cd[2].name_svg}
        slogan={cd[2].slogan}
        link={cd[2].link}
        text={cd[2].text}
      />
      <CardItem
        bg={cd[3].bg}
        title={cd[3].title}
        name_svg={cd[3].name_svg}
        slogan={cd[3].slogan}
        link={cd[3].link}
        text={cd[3].text}
      />
    </div>
  );
}

export default Cards;
