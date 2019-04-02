import React, { Component } from 'react';
import AddEmployee from './components/AddEmployee';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <AddEmployee />
      </div>
    );
  }
}

export default App;
