import React from "react";
import backspace from "../assets/backspace.svg";
import { useState } from "react";
import "./NumericInput.scss";
import OrderForm from "./OrderForm";

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

      <div className="keypad">
        {Number(amount) > 0 ? (
          <div className="nextBtn" onClick={submit}>
            {">"}
          </div>
        ) : null}
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

  let isMobile = window.screen.width < 800;
  return isMobile ? NumPad : <OrderForm goNext={props.goNext} />;
};

export default NumericInput;
