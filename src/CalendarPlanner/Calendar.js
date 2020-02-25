import React from "react";
import { getMonth, getMonthName } from "./CalendarPlanner.js";
import BackToHome from "../ToolbarComponents/BackToHome";
import "./Calendar.scss";

// function to get dates from the current month that exist in the expenses list
const getDatesFromCurrentMonth = expenses => {
  let today = new Date();
  let month = today.getMonth(); // 0 based index month
  let arr = expenses.filter(e => {
    return Number(e.date.split("/")[0]) - 1 === month;
  });

  return arr;
};
// function that will calculate the sum of the expeneses for each day and return an object with key being date
// and value being the total expense that day;
const populateDictionary = arr => {
  arr = arr.map(expense => {
    let amt = expense.amount.split("");
    amt.shift();
    return [Number(expense.date.split("/")[1]), Number(amt.join(""))];
  });
  let dict = {};
  arr.forEach(d => {
    if (!dict[d[0]]) {
      dict[d[0]] = d[1];
    } else {
      dict[d[0]] += d[1];
    }
  });
  console.log(dict);
  return dict;
};

const Calendar = props => {
  let expenses = props.expenses || [
    { date: "02/14/2020", amount: "$146.4" },
    { date: "02/17/2020", amount: "$16.84" },
    { date: "02/17/2020", amount: "$14.84" },
    { date: "02/19/2020", amount: "$-19.64" }
  ];
  let arr = getDatesFromCurrentMonth(expenses);
  let dict = populateDictionary(arr);
  const Month = getMonth();
  const style = {};
  const width = props.width ? props.width : 400; //TODO: remove
  if (width) {
    style.width = window.screen.width > 800 ? width / 7 + "px" : width + "px";
    style.height = window.screen.width > 800 ? width / 7 + "px" : width + "px";
  }
  console.log(`Width is ${window.screen.width}`);
  console.log(style);
  const dayStyle = { ...style, lineHeight: style.width };
  console.log(dayStyle);
  let rows = Month.map(r => (
    <div className="row">
      {r.map(d => (
        <div
          className={"cal-span date" + (d > 0 ? "" : " empty")}
          style={style}
        >
          <div>{d > 0 ? d : " "}</div>
          <div className={"cost" + (dict[d] > 0 ? " positive" : " negative")}>
            {dict[d] ? "$" + dict[d] : ""}
          </div>
        </div>
      ))}
    </div>
  ));
  return (
    <div className="expenses-calendar">
      {props.returnToHomePage ? (
        <BackToHome returnToHomePage={props.returnToHomePage} />
      ) : null}
      <div className="month-header">{getMonthName()}</div>
      <div className="row">
        {["S", "M", "T", "W", "T", "F", "S"].map(d => (
          <div className="cal-span day" style={dayStyle}>
            {d}
          </div>
        ))}
      </div>
      {rows}
    </div>
  );
};

export default Calendar;
