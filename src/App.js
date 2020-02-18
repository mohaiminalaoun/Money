import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import Homepage from "./Homepage/Homepage";
import HomepageHeader from "./Homepage/HomepageHeader";
import HomepageToolbar from "./Homepage/HomepageToolbar";
import ExpensesGrid from "./Grids/ExpensesGrid";
import AddExpense from "./AddExpense/AddExpense";
import StocksComponent from "./Stocks/StocksComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      homepage: false,
      stocks: false
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

  goToStocks = () => {
    console.log("go to stocks");
    this.setState({
      homepage: false,
      addExpensePage: false,
      stocks: true
    });
  };
  render() {
    if (this.state.homepage) {
      console.log(1);
      return (
        <>
          <div className="homepage">
            <HomepageHeader />
            <HomepageToolbar
              goToAddExpensePg={this.goToAddExpensePg}
              goToStocks={this.goToStocks}
            />
          </div>
          <ExpensesGrid />
        </>
      );
    } else if (this.state.addExpensePage) {
      return (
        <>
          <div className="homepage">
            <HomepageHeader />
            <HomepageToolbar
              goToAddExpensePg={this.goToAddExpensePg}
              goToStocks={this.goToStocks}
            />
          </div>
          <AddExpense returnToHomePage={this.returnToHomePage} />
        </>
      );
    } else if (this.state.stocks) {
      return (
        <>
          <div className="homepage">
            <HomepageHeader />
            <HomepageToolbar
              goToAddExpensePg={this.goToAddExpensePg}
              goToStocks={this.goToStocks}
            />
          </div>
          <StocksComponent />
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
