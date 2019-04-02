import React, { Component } from 'react';
import axios from 'axios';
import AddEmployee from './components/AddEmployee';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     employees: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api')
    .then(res => this.setState({ employees: res.data }))
    .catch(err => console.error(err));
  }

  handleAddEmployee = employee => {
    // make a call
    axios.post('http://localhost:3001/api', {
      employee: employee.employee,
      manager: employee.manager
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Invalid');
    })
    //this.setState({employees: utils.addEmployee() })
  }

  handleDeleteEmployee = data => {

  }

  render() {
    return (
      <div className="App">
        <AddEmployee handleAddEmployee={this.handleAddEmployee} />
      </div>
    );
  }
}

export default App;
