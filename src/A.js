import React, { Component } from 'react';

export default class A extends Component {

    constructor(props){
        super(props);
        console.log('call constructor',props)   
        this.state = {
          add:"Neemuch"
        }
    }
    static getDerivedStateFromProps(props,state){
      console.log('call getDerivedStateFromprops',props,state);
      return null;
    }

  render() {
    console.log("call render")
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
