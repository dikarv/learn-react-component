import { Button } from "react-bootstrap";
import React, { Component } from "react";
// import CardButton from "./CardButton";
import Button1 from "./Button1";
import Button2 from "./Button2";
// import CardButton from "./CardButton";
import CardContent from "./CardContent";

class Section extends Component {
  constructor(props) {
    super(props); //enxend component jadi manggil super()
    this.state = {
      number: 0,
      content: "Ini data parent",
      title: "judul pertama",
    };
  }

  increment = (angka) => {
    this.setState({
      number: angka + 1,
    });
    // document.getElementById("kurang").disabled = false;
  };

  decrement = (angka) => {
    if (angka <= 0) {
      alert("Abis bro");
      //   document.getElementById("kurang").disabled = true;
    } else {
      this.setState({
        number: angka - 1,
      });
    }
  };

  reset = () => {
    this.setState({
      number: 0,
    });
  };

  ubahKonten = (msg) => {
    this.setState({
      content: msg,
    });
  }

  ubahJudul =(msg) => {
      this.setState({
          title : msg
      });
  }
  

  

  render() {
    return (
      <div className="footer">
        <h2>Learn State and setState </h2>

        <h2>{this.state.number}</h2>
        <br></br>

        <div className="d-grid gap-2">
          <Button1 ayam={this.increment} number={this.state.number} />
          <Button variant="secondary" onClick={this.reset}>
            reset
          </Button>
          <Button2 bebek={this.decrement} number={this.state.number} />

          <CardContent judul={this.ubahJudul} konten={this.ubahKonten} isi={this.state.content} judul1={this.state.title} />
        </div>
      </div>
    );
  }
}

export default Section;