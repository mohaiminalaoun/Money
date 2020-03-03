import React from "react";
import { useState, useEffect } from "react";
import BackToHome from "../ToolbarComponents/BackToHome";
import "./ExpensesGrid.scss";

const ExpensesGrid = ({ isMobile, showExpenses, returnToHomePage }) => {
  const headerStyle = { marginTop: "14px" };
  const [expenses, setExpenses] = useState({});
  const [seeAll, setSeeAll] = useState(false);
  const gridViewStyle = seeAll ? { height: "70vh" } : null;
  const mobileStyle = isMobile && seeAll ? { marginTop: "0px" } : null;
  useEffect(() => {
    function fetchData() {
      fetch("../mockData/expenses.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          setExpenses(data);
        })
        .catch(er => {
          // no internet, use mock data
          let mockData = [
            {
              id: 1,
              transaction: "Books",
              amount: "$13.04",
              date: "08/01/2019",
              time: "20:19"
            },
            {
              id: 2,
              transaction: "Computers",
              amount: "$29.58",
              date: "01/13/2020",
              time: "20:27"
            },
            {
              id: 3,
              transaction: "Clothing",
              amount: "$63.15",
              date: "11/07/2019",
              time: "8:18"
            },
            {
              id: 4,
              transaction: "Sports",
              amount: "$41.86",
              date: "02/03/2020",
              time: "12:56"
            },
            {
              id: 5,
              transaction: "Industrial",
              amount: "$19.08",
              date: "12/29/2019",
              time: "19:43"
            },
            {
              id: 6,
              transaction: "Books",
              amount: "$181.75",
              date: "03/29/2019",
              time: "8:10"
            },
            {
              id: 7,
              transaction: "Kids",
              amount: "$50.96",
              date: "07/16/2019",
              time: "23:25"
            },
            {
              id: 8,
              transaction: "Music",
              amount: "$177.79",
              date: "01/24/2020",
              time: "9:59"
            },
            {
              id: 9,
              transaction: "Outdoors",
              amount: "$81.30",
              date: "11/30/2019",
              time: "11:22"
            },
            {
              id: 10,
              transaction: "Garden",
              amount: "$143.96",
              date: "04/23/2019",
              time: "13:21"
            },
            {
              id: 11,
              transaction: "Automotive",
              amount: "$64.11",
              date: "01/18/2020",
              time: "14:46"
            }
          ];
          setExpenses(mockData);
          console.log("error");
        });
    }

    fetchData();
  }, []); // second argument as [] calls useEffect only on componentDidMount
  const firstThirty = expenses && expenses.slice && expenses.slice(0, 30);
  console.log(returnToHomePage);
  return (
    <div className="expenses-container" style={mobileStyle}>
      {isMobile && seeAll ? (
        <BackToHome
          returnToHomePage={() => {
            setSeeAll(false);
            returnToHomePage();
          }}
        />
      ) : null}
      <div className="header-ctr" style={headerStyle}>
        <span className="expenses-header">Expenses</span>
        <span
          className="see-all"
          onClick={() => {
            if (!isMobile) {
              setSeeAll(!seeAll);
            } else {
              setSeeAll(!seeAll);
              showExpenses();
            }
          }}
        >
          {isMobile && seeAll ? "" : !seeAll ? "See All" : "Minimize"}
        </span>
      </div>
      <div className="expenses-grid-ctr" style={gridViewStyle}>
        {firstThirty &&
          firstThirty.map(it => {
            return (
              <div className="row" key={it.id}>
                <span className="attribute">{it.transaction}</span>
                <span className="metric"> - {it.amount}</span>
                <div>
                  <div className="time">{it.time}</div>
                  <div className="date">{it.date}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExpensesGrid;
