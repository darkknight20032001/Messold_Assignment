import React from "react";
import "./Navbar.css";
import pooja_box from "./pooja_box.jpg";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        Hi There!!!
        <br />
        Login or Register
      </div>

      <img src={pooja_box} alt="" />

      <div>Search Cart</div>
    </div>
  );
};

export default Navbar;
