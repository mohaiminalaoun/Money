import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import Homepage from "./Homepage/Homepage";
import HomepageHeader from "./Homepage/HomepageHeader";
import HomepageToolbar from "./Homepage/HomepageToolbar";
import ExpensesGrid from "./Grids/ExpensesGrid";
import AddExpense from "./AddExpense/AddExpense";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      homepage: false
    };
  }
  login = () => {
    this.setState({
      loggedin: true,
      homepage: true,
      addExpensePage: false
    });
  };
  goToAddExpensePg = () => {
    this.setState({
      homepage: false,
      addExpensePage: true
    });
  };

  returnToHomePage = () => {
    this.setState({
      homepage: true,
      addExpensePage: false
    });
  };
  render() {
    if (this.state.homepage) {
      return (
        <>
          <div className="homepage">
            <HomepageHeader />
            <HomepageToolbar goToAddExpensePg={this.goToAddExpensePg} />
          </div>
          <ExpensesGrid />
        </>
      );
    } else if (this.state.addExpensePage) {
      return (
        <>
          <div className="homepage">
            <HomepageHeader />
            <HomepageToolbar goToAddExpensePg={this.goToAddExpensePg} />
          </div>
          <AddExpense returnToHomePage={this.returnToHomePage} />
        </>
      );
    } else {
      return <LandingPage loginFn={this.login} />;
    }

    // return this.state.loggedin ? (
    //   <Homepage />
    // ) : (
    //   <LandingPage loginFn={this.login} />
    // );
  }
}

export default App;
