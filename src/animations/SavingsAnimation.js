import React from "react";
import animationData from "./savings.json";
import Lottie from "react-lottie";

const SavingsAnimation = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid"
    }
  };

  if (props.show) {
    return (
      <div className="savings-animation">
        <Lottie options={defaultOptions} height={200} width={300} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default SavingsAnimation;
