import React from "react";
import "./App.scss";
import LandingPage from "./LandingPage";
import Homepage from "./Homepage/Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
  }
  login = () => {
    this.setState({
      loggedin: true
    });
  };
  render() {
    return this.state.loggedin ? (
      <Homepage />
    ) : (
      <LandingPage loginFn={this.login} />
    );
  }
}

export default App;
