import React from "react";
import "./Gifts.css";
import { Database2 } from "./Database.js";
import Image2 from "./Image2";
const Gifts = () => {
  return (
    <div className="Gifts">
      <div className="Heading">
        <h4>Mothers Day Gifts</h4>
        <p>View All</p>
      </div>
      <div className="Content">
        {Database2.map((list) => {
          return (
            <Image2
              GiftName={list.GiftName}
              GiftLink={list.GiftLink}
              GiftPrice={list.GiftPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gifts;
