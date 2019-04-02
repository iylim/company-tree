import React, { Component } from 'react';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      manager: '',
    }
  }

  handleAddEmployeeSubmit = e => {
    e.preventDefault();
    // submit new employee

  }
  handleChange = (field,e) => {
      this.setState({
        [field]: e.target.value
      });
  }

  render() {
    return(
      <div className="addEmployee">
      <form onSumbit={this.handleAddEmployeeSubmit} >
      Add Employee: &nbsp;
        <input type="name" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)}></input> &nbsp;
        <input type="manager" placeholder="Reports To" value={this.state.manager} onChange={(e) => this.handleChange('manager', e)}></input>
      </form>
      </div>
    )
  }
}

export default AddEmployee;