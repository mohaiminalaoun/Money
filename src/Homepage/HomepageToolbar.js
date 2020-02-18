import React from "react";
import price from "../assets/price.svg";
import more from "../assets/more.svg";
import "./HomepageToolbar.scss";

const HomepageToolbar = props => {
  return (
    <div className="toolbar-container">
      <div onClick={props.goToAddExpensePg} className="toolbar-menu yellow">
        <img className="price" alt="" src={price} />
        Add
      </div>
      <div onClick={props.goToStocks} className="toolbar-menu red">
        <img className="price" alt="" src={price} />
        Invest
      </div>
      <div className="toolbar-menu green">
        <img className="price" alt="" src={more} />
        More
      </div>
    </div>
  );
};

export default HomepageToolbar;
