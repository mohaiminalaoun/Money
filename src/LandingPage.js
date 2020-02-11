import React from "react";
import Login from "./Login";
import "./App.scss";
import SavingsAnimation from "./animations/SavingsAnimation.js";

const LandingPage = props => {
  return (
    <div className="App">
      <SavingsAnimation show="true" />
      <div className="title-container">
        <div className="app-title">
          <div>Wecome</div>
          <div>to Money!</div>
        </div>
        <div className="sub-title">Pocket money for future you</div>
      </div>
      <Login loginFn={props.loginFn} />
    </div>
  );
};

export default LandingPage;
