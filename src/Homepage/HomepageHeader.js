import React from "react";
import "./HomepageHeader.scss";
import ParentBalence from "./ParentBalence";
import icon from "../assets/google-icon.svg";

const HomepageHeader = () => {
  return (
    <>
      <div className="homepage-header">
        <div className="hello">Hello,</div>
        <div className="username">Mohaimin</div>
        <img alt="" className="profile-img" src={icon}></img>
      </div>
      <ParentBalence />
    </>
  );
};

export default HomepageHeader;
