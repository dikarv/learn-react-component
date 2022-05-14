import React, { Component } from "react";
import Card from "./Card";



class CardContent extends Component {
  render() {
    let cucu = "ikan curut"
    return (
      <footer className="footer">
        <hr color="grey" />
        <h5>Copyright © 2022 - OtamuDesu</h5>
        <h3>{cucu} ini cucu ikan {this.props.fish} dan {this.props.fish1}</h3>

        
      </footer>
    );
  }
}

export default CardContent;
