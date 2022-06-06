import React, { Component } from "react";
import GrandChild from "./Grand-child";


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <hr color="grey" />
        <h5>Copyright © 2022 - OtamuDesu</h5>
        <h1>Helllo ikan {this.props.anak}</h1>
        <GrandChild cucu={this.props.anak} />
        
      </footer>
    );
  }
}

export default Footer;
