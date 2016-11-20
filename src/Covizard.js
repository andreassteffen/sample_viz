import React, { Component } from 'react';
import Sample from './Sample.js';

class Covizard extends Component {
  render() {
    return (
      <svg width="800" height="800">
        {this.props.data.map((row,index)=><Sample y={index} data={row}/>)}
      </svg>
    );
  }
}

export default Covizard;
