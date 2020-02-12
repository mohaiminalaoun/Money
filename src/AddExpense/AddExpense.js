import React from "react";
import AddExpenseHeader from "./AddExpenseHeader";
import NumericInput from "./NumericInput";
import { useState } from "react";

const AddExpense = () => {
  const [stage, setStage] = useState(0);
  return (
    <>
      <AddExpenseHeader
        stage={stage}
        goBack={() => {
          if (stage == 0) return;
          return setStage(stage - 1);
        }}
      />
      {stage === 0 ? <NumericInput goNext={() => setStage(1)} /> : null}
      {stage === 1 ? <NumericInput goNext={() => setStage(2)} /> : null}
    </>
  );
};

export default AddExpense;
