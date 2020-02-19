import React, {Component} from 'react';
import MilesCounter from './milesCounter/milesCounter';

import './App.css';

class App extends Component {
  render(){

    return (
      <div >
        <h1>React Track Runner</h1>
        < MilesCounter />
      </div>
      
      
  );
 }
}

export default App;
