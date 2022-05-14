import React, { Component } from "react";
import Footer from "./Footer";


class GrandChild extends Component {
  render() {
    return (
      <footer className="footer">
        <hr color="grey" />
        <h5>Copyright © 2022 - OtamuDesu</h5>
        <h1>Ini cucu  {this.props.cucu}</h1>
      </footer>
    );
  }
}

export default GrandChild;
