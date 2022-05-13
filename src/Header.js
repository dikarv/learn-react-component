import React, { Component } from 'react';
import { connect } from 'react-bootstrap';
import logo3 from './logo.svg'




class Header extends Component {
    render() {
        return (
            <div>
                <h1><img src={logo3} alt='' width="500px" height="250px"/></h1>
            </div>
        );
    }
}

export default Header;