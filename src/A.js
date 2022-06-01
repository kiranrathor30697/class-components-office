import React, { Component } from 'react';

export default class A extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     name: "kiran"
        // }   
        console.log(this.props.name)
    }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
