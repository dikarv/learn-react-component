import React, { Component } from 'react';
import { connect } from 'react-bootstrap';





class Child extends Component {
    render () {
      const { onClick } = this.props
  
      return <div onClick={onClick} />
    }
  }
  
  Child.defaultProps = {
    onClick () {
      console.warn('No handler for `onClick` prop!')
    }
  }
  
  class Parent extends Component {

    handleOnClick (data) {
      const { onClick } = this.props
      // handle logic at this component level
      // component only knows about its self
      onClick(data /* or new data derived from data */)
    }
    render () {
      return <Child onClick={this.handleOnClick} />
    }
  }
  
  Parent.defaultProps = {
    onClick () {
      console.warn('No handler for `onClick` prop!')
    }
  }
  
  class GrandParent extends Component {
    
    handleOnClick (data) {
      // handle logic at this component level
      // component only knows about its self
    }
    render () {
      return <Parent onClick={this.handleOnClick} />
    }
  }


  export default GrandParent;