import React, { Component } from "react";
import { Card } from "react-bootstrap";

import CardButton from "./CardButton";




class CardContent extends Component {
  render() {
    // let cucu = "ikan curut"
    return (


      <div className="d-grid gap-2">
  

          <Card>
            <Card.Body>
              <Card.Title>{this.props.judul1}</Card.Title>
              <CardButton konten={this.props.konten} judul={this.props.judul} />
              <Card.Text>{this.props.isi}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      // <footer className="footer">
      //   <hr color="grey" />
      //   <h5>Copyright © 2022 - OtamuDesu</h5>
      //   <h3>{cucu} ini cucu ikan {this.props.fish} dan {this.props.fish1}</h3>

        
      // </footer>
    )
  }
}

export default CardContent;
