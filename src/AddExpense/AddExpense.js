import React from "react";
import AddExpenseHeader from "./AddExpenseHeader";
import NumericInput from "./NumericInput";
import CalendarComponent from "./CalendarComponent";
import ConfirmationPage from "./ConfirmationPage";
import { useState } from "react";

const AddExpense = props => {
  const [stage, setStage] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selDates, setSelDates] = useState([]);
  return (
    <>
      <AddExpenseHeader
        stage={stage}
        goBack={() => {
          if (stage == 0) return;
          return setStage(stage - 1);
        }}
      />
      {stage === 0 ? (
        <NumericInput setAmount={setAmount} goNext={() => setStage(1)} />
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
    </>
  );
};

export default AddExpense;
