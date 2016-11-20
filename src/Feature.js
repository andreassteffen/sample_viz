import React, { Component } from 'react';


class Feature extends Component {
  render() {
    let y = 500 - this.props.y*1;
    let x = this.props.x*30 + 5 ;
    return (
          <rect x={x} y={y} width="28" height="1" fill={this.props.data ? 'black':'white'} /> 
    );
  }
}

export default Feature;
