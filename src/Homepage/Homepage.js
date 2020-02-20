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
        <HomepageToolbar
          goToAddExpensePg={props.goToAddExpensePg}
          goToStocks={props.goToStocks}
          goToCalendar={props.goToCalendar}
        />
      </div>

      <ExpensesGrid />
    </>
  );
};

export default Homepage;
