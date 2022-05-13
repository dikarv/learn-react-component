import React, { Component } from "react";
import logo from "./logo.svg"
import logo1 from './konusuba.jpg'
import logo2 from './megumin.jpg'
import logo3 from './title.png'

class Content extends Component {
  render() {
    //mencari
    let name = "Dika"
    return (
      <>
        <h3>{name}</h3>
        <Content1 variableProps={name} helloWord={'Hello Word'} />
        <Content1 variableProps2={'Rojul'} helloWord={'Hello Word'} />
        <Content1 variableProps3={'Fajar'} helloWord={'Hello Word'} />

      </>
    );
  }
}

class Content1 extends Component {
    render() {
      //mencari
      let P1 = this.props;
      console.log(P1);
      return (
        <>
          <h2>Welcome {this.props.variableProps}</h2>
          <h2>Welcome {this.props.helloWord}</h2>
          <h2>Welcome {this.props.variableProps2}</h2>
        {this.props.helloWord}
        </>
      );
    }
  }
export default Content;
//Navbar component bisa di import manapun
