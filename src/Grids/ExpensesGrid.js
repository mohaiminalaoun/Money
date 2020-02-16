import React from "react";
import { useState, useEffect } from "react";
import "./ExpensesGrid.scss";

const ExpensesGrid = () => {
  const headerStyle = { marginTop: "14px" };
  const [expenses, setExpenses] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("../mockData/expenses.json");
      res.json().then(res => setExpenses(res));
    }

    fetchData();
  }, []); // second argument as [] calls useEffect only on componentDidMount
  const firstThirty = expenses && expenses.slice && expenses.slice(0, 30);
  return (
    <div className="expenses-container">
      <div style={headerStyle}>
        <span className="expenses-header">Expenses</span>
        <span className="see-all">See All</span>
      </div>
      <div className="expenses-grid-ctr">
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
