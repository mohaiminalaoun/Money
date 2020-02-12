import React from "react";
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
    console.log("submitting");
    console.log(props.goNext());
  };
  return (
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
            return (
              <div value={num} key={num} onClick={click} className="num">
                {num}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NumericInput;
