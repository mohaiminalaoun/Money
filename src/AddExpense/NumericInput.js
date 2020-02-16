import React from "react";
import backspace from "../assets/backspace.svg";
import { useState } from "react";
import "./NumericInput.scss";

const NumericInput = props => {
  let [amount, setAmount] = useState("0");
  let [decimalUsed, setDecimalUsed] = useState(false);
  const click = ev => {
    let val = ev.currentTarget.getAttribute("value");
    if (val === ".") {
      if (decimalUsed) return;
      setDecimalUsed(true);
    }
    if (val === "<=") {
      if (amount[amount.length - 1] === ".") setDecimalUsed(false);
      let newAmt = amount.substring(0, amount.length - 1);
      newAmt = newAmt.length > 0 ? newAmt : "0";
      setAmount(newAmt);
    } else {
      if (amount === "0") setAmount(val);
      else setAmount(amount + "" + val);
    }
  };
  const submit = () => {
    props.setAmount(amount);
    props.goNext();
  };

  const NumPad = (
    <div className="numInputCtr">
      <div className="header">Amount</div>

      <div>
        <div className="dollar-symbol">$</div>
        <div className="value">{amount}</div>
      </div>
      <div className="divider"></div>
      <div className="nextBtn" onClick={submit}>
        {">"}
      </div>
      <div className="keypad">
        <div className="row">
          {[1, 2, 3].map(num => {
            return (
              <div value={num} key={num} onClick={click} className="num">
                {num}
              </div>
            );
          })}
        </div>
        <div className="row">
          {[4, 5, 6].map(num => {
            return (
              <div value={num} key={num} onClick={click} className="num">
                {num}
              </div>
            );
          })}
        </div>
        <div className="row">
          {[7, 8, 9].map(num => {
            return (
              <div value={num} key={num} onClick={click} className="num">
                {num}
              </div>
            );
          })}
        </div>
        <div className="row">
          {[".", 0, "<="].map(num => {
            if (num !== "<=") {
              return (
                <div value={num} key={num} onClick={click} className="num">
                  {num}
                </div>
              );
            } else {
              return (
                <img
                  className="num"
                  onClick={click}
                  alt="back"
                  key={num}
                  value={num}
                  src={backspace}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );

  const OrderForm = (
    <div className="numInputCtr">
      <div className="order-form">
        <div className="tab">
          <div className="tab-option">
            <h3 className="tab-span">Buy FB</h3>
          </div>
          <div className="tab-option">
            <h3 className="tab-span">Sell FB</h3>
          </div>
        </div>
        <div className="first-section">
          <div className="row">
            Shares
            <input className="input" placeholder="0"></input>
          </div>
          <div className="row market-price">
            Market Price
            <div className="value">$214.18</div>
          </div>
          <div className="row">
            Estimated Cost
            <div className="value">$214.18</div>
          </div>
        </div>
        <div className="btn-container">
          <div className="review-order-btn" onClick={props.goNext}>
            Review Order
          </div>
        </div>
        <div className="buying-power">$32.18 Buying Power Available</div>
        <div className="additional-info">
          You’re on the Fractional Shares waitlist with 1472930 other people.
        </div>
      </div>
    </div>
  );
  let isMobile = window.screen.width < 800;
  return isMobile ? NumPad : OrderForm;
};

export default NumericInput;
