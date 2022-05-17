import { Component } from "react";
import { Button } from "react-bootstrap";


class Button2 extends Component{


    sendData = () =>{
        this.props.bebek(this.props.number)
        //props yang di kirim di panggil kembali dengan di tambahkan parameter data
    }

    render(){
        return(
            <div className="d-grid gap-2">
               
               <Button variant="dark   " onClick={this.sendData}>
            Add
          </Button>
            </div>
        )
    }

}


export default Button2;