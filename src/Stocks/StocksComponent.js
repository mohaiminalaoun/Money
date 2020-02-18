import React from "react";
import { useState, useEffect } from "react";
import "./StocksComponent.scss";

const StocksComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("stocks component opened");
    fetch("../mockData/stocks.json")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("second then");
        setData(res);
      });
  }, []);
  return (
    <div className="stocks-component">
      <div className="stocks-container">
        <div className="header">Stocks</div>
        <div className="stocks-list">
          <div className="stock-item">
            <div className="ticker">SQ</div>
            <div className="values">
              <div className="price">$82.00</div>
              <div className="change">+1.25%</div>
            </div>
          </div>
        </div>
        <div className="header mid">Watchlist</div>
        <div className="stocks-list">
          {!data ? (
            <div className="stock-item">
              <div className="ticker">SQ</div>
              <div className="values">
                <div className="price">$82.00</div>
                <div className="change">+1.25%</div>
              </div>
            </div>
          ) : (
            data.map(item => {
              return (
                <div key={item.id} className="stock-item">
                  <div className="ticker">{item.ticker}</div>
                  <div className="values">
                    <div className="price">{item.price}</div>
                    <div
                      className={
                        "change" +
                        (Number(item.change) < 0 ? " negative" : " positive")
                      }
                    >
                      {item.change}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default StocksComponent;
