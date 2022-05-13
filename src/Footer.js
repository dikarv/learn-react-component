import React, { Component } from "react";
import { connect } from "react-bootstrap";
import logo3 from "./konusuba.jpg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <hr color="grey" />
        <h5>Copyright © 2022 - OtamuDesu</h5>
      </footer>
    );
  }
}

export default Footer;
