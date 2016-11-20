import React, { Component } from 'react';
import Feature from './Feature.js';

class Sample extends Component {
  render() {
    return (
      <g>
        {this.props.data.map((feature,index)=><Feature x={index} y={this.props.y} data={feature}/>)}
      </g>
    );
  }
}

export default Sample;
