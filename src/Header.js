import React, { Component } from 'react';
import { connect } from 'react-bootstrap';
import logo3 from './konusuba.jpg'




class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1><img src={logo3} alt='' width="500px" height="250px"/></h1>
            </header>
        );
    }
}

export default Header;