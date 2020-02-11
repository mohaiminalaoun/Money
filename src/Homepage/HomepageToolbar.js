import React from "react";
import price from "../assets/price.svg";
import more from "../assets/more.svg";
import "./HomepageToolbar.scss";

const HomepageToolbar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-menu yellow">
        <img className="price" alt="" src={price} />
        Top Up
      </div>
      <div className="toolbar-menu red">
        <img className="price" alt="" src={price} />
        Send
      </div>
      <div className="toolbar-menu green">
        <img className="price" alt="" src={more} />
        More
      </div>
    </div>
  );
};

export default HomepageToolbar;
