import React from "react";
import "./AddExpenseHeader.scss";
import calendar from "../assets/calendar.svg";
import price from "../assets/price.svg";
import confirm from "../assets/confirm.svg";
import back from "../assets/back.svg";
const AddExpenseHeader = props => {
  return (
    <div className="add-expense-header">
      <img
        alt="back"
        src={back}
        onClick={props.goBack}
        className="btn back"
      ></img>

      <img
        alt=""
        src={confirm}
        className={props.stage === 2 ? "btn confirm valid" : "btn confirm"}
      ></img>
      <img
        alt=""
        src={calendar}
        className={props.stage === 1 ? "btn frequency valid" : "btn frequency"}
      ></img>
      <img
        alt=""
        src={price}
        className={props.stage === 0 ? "btn money valid" : "btn money"}
      ></img>
    </div>
  );
};

export default AddExpenseHeader;
