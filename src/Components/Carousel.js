import React from "react";
import Database from "./Database";
import Image from "./Image";
import './Carousel.css';
const Carousel = () => {
  return (
    <div className="Carousel">
      {Database.map((list) => {
        return <Image ImageName={list.ImageName} ImageLink={list.ImageLink} />;
      })}
    </div>
  );
};

export default Carousel;
