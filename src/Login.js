import React from "react";
import icon from "./assets/google-icon.svg";
import icon2 from "./assets/google-icon-2.svg";

const Login = props => {
  const style = {
    height: "25px",
    float: "left",
    marginRight: "4px"
  };
  return (
    <div className="login-container">
      <div className="login-button google" onClick={props.loginFn}>
        <img style={style} alt="" src={icon} />
        Sign in using Google
      </div>
      <div className="login-button signup" onClick={props.loginFn}>
        <img style={style} alt="" src={icon2} />
        Sign up with new username
      </div>
    </div>
  );
};

export default Login;
