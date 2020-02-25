import React from "react";
import { useState, useEffect } from "react";
import BackToHome from "../ToolbarComponents/BackToHome";
import "./StocksComponent.scss";

const StocksComponent = props => {
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
      })
      .catch(e => {
        // no internet or using mock data
        const mock = [
          {
            id: 107,
            ticker: "CMA.WS",
            name: "Comerica Incorporated",
            price: "$135.78",
            change: -0.16
          },
          {
            id: 108,
            ticker: "HPF",
            name: "John Hancock Pfd Income Fund II",
            price: "$248.14",
            change: 9.3
          },
          {
            id: 109,
            ticker: "FYC",
            name: "First Trust Small Cap Growth AlphaDEX Fund",
            price: "$117.98",
            change: -7.38
          },
          {
            id: 110,
            ticker: "XYL",
            name: "Xylem Inc.",
            price: "$217.87",
            change: -2.57
          },
          {
            id: 111,
            ticker: "MPW",
            name: "Medical Properties Trust, Inc.",
            price: "$196.45",
            change: 4.17
          },
          {
            id: 112,
            ticker: "EYESW",
            name: "Second Sight Medical Products, Inc.",
            price: "$159.66",
            change: -5.79
          },
          {
            id: 113,
            ticker: "FNF",
            name: "Fidelity National Financial, Inc.",
            price: "$34.47",
            change: -5.79
          },
          {
            id: 114,
            ticker: "ETM",
            name: "Entercom Communications Corporation",
            price: "$2.54",
            change: 1.44
          }
        ];
        setData(mock);
      });
  }, []);
  return (
    <div className="stocks-component">
      <BackToHome returnToHomePage={props.returnToHomePage} />
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
