import React from "react";
import { useState } from "react";
import "./ConfirmationPage.scss";
const ConfirmationPage = props => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const widthStyle =
    window.screen.width < 600
      ? { width: window.screen.width - 40 + "px" }
      : null;
  const btnWidthStyle = window.screen.width < 600 ? { width: "30%" } : null;
  return (
    <div className="confirmation-page" style={widthStyle}>
      <h3 className="confirm-title">Confirm expense</h3>
      <div className="confirmation-header">{`You've set an expense of $${props.amount} for the following dates`}</div>
      <div className="confirmation-container">
        {props.selDates.map(d => (
          <div className="confirmed-date" key={d}>
            {d}
          </div>
        ))}
      </div>
      <div className="row">
        Expense title
        <input
          className="input"
          placeholder="Chopotle Lunch"
          value={title}
          onChange={e => {
            let val = e.target.value;
            setTitle(e.target.value);
            if (val.trim().length > 0) {
              setIsDisabled(false);
            } else {
              setIsDisabled(true);
            }
          }}
        ></input>
      </div>

      <div className="btn-container">
        <div
          className="btn cancel"
          style={btnWidthStyle}
          onClick={props.returnToHomePage}
        >
          Cancel
        </div>
        <div
          className={"btn confirm" + (isDisabled ? " disabled" : "")}
          style={btnWidthStyle}
          onClick={isDisabled ? null : props.returnToHomePage}
        >
          Confirm
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
