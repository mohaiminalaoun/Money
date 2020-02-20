import React from "react";
import AddExpenseHeader from "./AddExpenseHeader";
import NumericInput from "./NumericInput";
import CalendarComponent from "./CalendarComponent";
import ConfirmationPage from "./ConfirmationPage";
import "./AddExpense.scss";
import { useState } from "react";

const AddExpense = props => {
  const [stage, setStage] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selDates, setSelDates] = useState([]);
  return (
    <div className="addexpense-container">
      <AddExpenseHeader
        stage={stage}
        goBack={() => {
          if (stage === 0) {
            props.returnToHomePage();
          }
          return setStage(stage - 1);
        }}
      />
      {stage === 0 ? (
        <NumericInput
          setAmount={setAmount}
          goNext={amt => {
            if (amt) {
              // param will exist when called from order form
              setAmount(amt);
            }
            setStage(1);
          }}
        />
      ) : null}
      {stage === 1 ? (
        <CalendarComponent
          goNext={() => setStage(2)}
          setSelDates={arr => setSelDates(arr)}
          selDates={selDates}
        />
      ) : null}
      {stage === 2 ? (
        <ConfirmationPage
          returnToHomePage={props.returnToHomePage}
          selDates={selDates}
          amount={amount}
        />
      ) : null}
    </div>
  );
};

export default AddExpense;
