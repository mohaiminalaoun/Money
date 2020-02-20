import React from "react";
import { useState } from "react";
import "./OrderForm.scss";

const OrderForm = props => {
  const [selTab, setSelTab] = useState(0); // 0 is expense and 1 is income
  const [units, setUnits] = useState(1);
  const [price, setPrice] = useState(0);
  return (
    <div className="numInputCtr">
      <div className="order-form">
        <div className="tab">
          <div className="tab-option">
            <h3
              className={"tab-span" + (!selTab ? " selected" : "")}
              onClick={() => {
                setSelTab(0);
              }}
            >
              Expense
            </h3>
          </div>
          <div className="tab-option">
            <h3
              className={"tab-span" + (selTab ? " selected" : "")}
              onClick={() => {
                setSelTab(1);
                setUnits(1);
              }}
            >
              Income
            </h3>
          </div>
        </div>
        <div className="first-section">
          <div className="row">
            {!selTab ? "Unit Price" : "Income"}
            <input
              className="input"
              placeholder="0"
              value={price}
              onChange={e => {
                if (!isNaN(e.target.value)) {
                  setPrice(e.target.value);
                }
              }}
            ></input>
          </div>
          {!selTab ? (
            <div className="row market-price">
              Units
              <input
                className="input"
                placeholder="1"
                onChange={e => {
                  setUnits(e.target.value);
                }}
              ></input>
            </div>
          ) : null}
          <div className="row">
            Estimated Total
            <div className="value">{"$" + Number(units) * Number(price)}</div>
          </div>
        </div>
        <div className="btn-container">
          <div
            className="review-order-btn"
            onClick={() => {
              props.goNext(Number(units) * Number(price));
            }}
          >
            Review Order
          </div>
        </div>
        <div className="buying-power">Buying Credit Not Available Yet</div>
        <div className="additional-info">
          You’re on the Fractional Shares waitlist with 1472930 other people.
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
