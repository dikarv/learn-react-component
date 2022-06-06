import { Component } from "react";
import { Button, Card } from "react-bootstrap";


class CardButton extends Component{

    sendDataToP = () =>{
        this.props.konten(
            "Ini adalah kontent yang ada"
        )
        this.props.judul("Enigma Camps")
        //props yang di kirim di panggil kembali dengan
    }

    render(){
        return(
            <div>
               
              <Button variant="primary" onClick={this.sendDataToP}>Go somewhere</Button>
            </div>
        )
    }

}


export default CardButton;