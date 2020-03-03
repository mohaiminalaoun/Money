import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import Homepage from "./Homepage/Homepage";
import HomepageHeader from "./Homepage/HomepageHeader";
import HomepageToolbar from "./Homepage/HomepageToolbar";
import ExpensesGrid from "./Grids/ExpensesGrid";
import AddExpense from "./AddExpense/AddExpense";
import StocksComponent from "./Stocks/StocksComponent";
import Calendar from "./CalendarPlanner/Calendar";
import NewsArticle from "./NewsArticle/NewsArticle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      homepage: false,
      stocks: false,
      calendar: false,
      showAllExpenses: false
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
      addExpensePage: false,
      showAllExpenses: false
    });
  };

  goToStocks = () => {
    console.log("go to stocks");
    this.setState({
      homepage: false,
      addExpensePage: false,
      stocks: true,
      calendar: false
    });
  };
  goToCalendar = () => {
    console.log("go to calendar");
    this.setState({
      homepage: false,
      addExpensePage: false,
      stocks: false,
      calendar: true
    });
  };
  showExpenses = () => {
    this.setState({
      showAllExpenses: true
    });
  };
  render() {
    if (this.state.homepage) {
      console.log(1);
      return (
        <>
          {!this.state.showAllExpenses ? (
            <div className="homepage">
              <HomepageHeader />
              <HomepageToolbar
                goToAddExpensePg={this.goToAddExpensePg}
                goToStocks={this.goToStocks}
                goToCalendar={this.goToCalendar}
              />
            </div>
          ) : null}
          <ExpensesGrid
            returnToHomePage={this.returnToHomePage}
            isMobile={window.screen.width < 800}
            showExpenses={this.showExpenses}
          />
        </>
      );
    } else if (this.state.addExpensePage) {
      return (
        <>
          {window.screen.width > 800 ? (
            <div className="homepage">
              <HomepageHeader />
              <HomepageToolbar
                goToAddExpensePg={this.goToAddExpensePg}
                goToStocks={this.goToStocks}
                goToCalendar={this.goToCalendar}
              />
            </div>
          ) : null}
          <AddExpense returnToHomePage={this.returnToHomePage} />
        </>
      );
    } else if (this.state.stocks) {
      return (
        <>
          {window.screen.width > 800 ? (
            <div className="homepage">
              <HomepageHeader />
              <HomepageToolbar
                goToAddExpensePg={this.goToAddExpensePg}
                goToStocks={this.goToStocks}
                goToCalendar={this.goToCalendar}
              />
            </div>
          ) : null}
          <StocksComponent returnToHomePage={this.returnToHomePage} />
          {window.screen.width > 800 ? <NewsArticle /> : null}
        </>
      );
    } else if (this.state.calendar) {
      return (
        <>
          {window.screen.width > 800 ? (
            <div className="homepage">
              <HomepageHeader />
              <HomepageToolbar
                goToAddExpensePg={this.goToAddExpensePg}
                goToStocks={this.goToStocks}
                goToCalendar={this.goToCalendar}
              />
            </div>
          ) : null}
          <Calendar
            width={
              window.screen.width < 800
                ? window.screen.width / 7
                : window.screen.width / 2.5
            }
            returnToHomePage={this.returnToHomePage}
          />
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
