import React, { Component } from 'react';
import Covizard from './Covizard.js';

let data = [
 [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
 [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
 [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
 [1, 1, 0, 0, 0, 1, 1, 0, 1, 0],
 [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
 [0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
 [1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
 [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
 [0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
 [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
 [0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
 [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
 [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
 [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
 [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
 [0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
 [1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
 [1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
 [1, 0, 1, 1, 0, 0, 0, 1, 1, 0],
 [0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
 [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
 [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
 [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
 [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
 [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
 [0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
 [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
 [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
 [0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
 [1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
 [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
 [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
 [0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
 [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
 [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
 [0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
 [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
 [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
 [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
 [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
 [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
 [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
 [0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
 [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
 [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
 [1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
 [1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
 [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
 [0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
 [1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
 [1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
 [0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
 [1, 1, 0, 0, 0, 0, 1, 0, 1, 0],
 [0, 1, 0, 0, 0, 0, 1, 0, 1, 1],
 [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
 [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
 [1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
 [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
 [1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
 [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
 [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
 [0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
 [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
 [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
 [0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
 [1, 0, 0, 1, 0, 0, 0, 1, 1, 1],
 [0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
 [0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
 [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
 [1, 1, 0, 1, 0, 0, 0, 1, 1, 1],
 [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
 [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
 [0, 0, 1, 0, 1, 0, 1, 1, 0, 0],
 [0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
 [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
 [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
 [0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
 [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
 [0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
 [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
 [0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
 [0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
 [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
 [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
 [0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
 [1, 1, 0, 1, 1, 0, 0, 1, 0, 1],
 [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
 [0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
 [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
 [0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
 [1, 0, 0, 1, 1, 1, 0, 1, 1, 0],
 [1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
 [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
 [0, 1, 0, 1, 1, 0, 0, 0, 1, 1],
 [1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
 [0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
 [1, 1, 0, 0, 1, 0, 1, 0, 0, 0]
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Covizard data={data}/>
      </div>
    );
  }
}

export default App;
