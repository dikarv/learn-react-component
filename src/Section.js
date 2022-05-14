import { Button } from "react-bootstrap";
import React, { Component } from "react";


class Section extends Component {
    constructor() {
        super();
        this.state ={
            number : 0

        }
    }

    incremetn(){
        this.setState({
            number : this.state.number +100
        })
    }

    render(){
        return(
            <div className="footer">
                <span>this {this.state.number}</span><br></br>
                <button onClick={() => this.incremetn()} >add number</button>
            </div>
        )
    }
    
}


export default Section;