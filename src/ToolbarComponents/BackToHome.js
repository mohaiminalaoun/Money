import React from "react";
import "./BackToHome.scss";
import leftArrow from "../assets/left-arrow.svg";

const BackToHome = props => {
  return (
    <div className="back-ctr" onClick={props.returnToHomePage}>
      <img className="left-arrow" src={leftArrow} />
      <div className="returnBtn" onClick={props.returnToHomePage}>
        Return
      </div>
    </div>
  );
};

export default BackToHome;
