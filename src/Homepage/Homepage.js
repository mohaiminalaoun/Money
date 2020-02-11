import React from "react";
import "./Homepage.scss";
import HomepageHeader from "./HomepageHeader";
import HomepageToolbar from "./HomepageToolbar";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="homepage">
          <HomepageHeader />
        </div>
        <HomepageToolbar />
      </>
    );
  }
}

export default Homepage;
