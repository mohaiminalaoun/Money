import React from "react";
import "./Homepage.scss";
import HomepageHeader from "./HomepageHeader";
import HomepageToolbar from "./HomepageToolbar";
import ExpensesGrid from "../Grids/ExpensesGrid";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="homepage">
          <HomepageHeader />
        </div>
        <HomepageToolbar />
        <ExpensesGrid />
      </>
    );
  }
}

export default Homepage;
