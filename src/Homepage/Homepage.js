import React from "react";
import "./Homepage.scss";
import HomepageHeader from "./HomepageHeader";
import HomepageToolbar from "./HomepageToolbar";
import ExpensesGrid from "../Grids/ExpensesGrid";

const Homepage = props => {
  return (
    <>
      <div className="homepage">
        <HomepageHeader />
      </div>
      <HomepageToolbar goToAddExpensePg={props.goToAddExpensePg} />
      <ExpensesGrid />
    </>
  );
};

export default Homepage;
