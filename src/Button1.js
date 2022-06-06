import { Component } from "react";
import { Button } from "react-bootstrap";


class Button1 extends Component{

    
    sendData = () =>{
        this.props.ayam(this.props.number)

        
       
        //props yang di kirim di panggil kembali dengan di tambahkan parameter data
    }

    render(){
        return(
            <div className="d-grid gap-2">
                {/* <span>{this.props.numbers}</span>
                <span>{this.props.Ayam}</span> */}

               
               <Button variant="primary" onClick={this.sendData}>
            Add
          </Button>
            </div>
        )
    }

}


export default Button1;