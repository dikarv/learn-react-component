import React, { Component } from "react";
import CardContent from "./CardContent";



class Card extends Component {
  render() {
    let anak = "ikan buyur"
    return (
      <footer className="footer">
        <hr color="grey" />
        <h5>Copyright © 2022 - OtamuDesu</h5>
        
        <h3> {anak} ini anak {this.props.ikan} dan {this.props.ikan1}</h3>
        <CardContent fish={this.props.ikan} fish1={this.props.ikan1} />
        
      </footer>
    );
  }
}

export default Card;
