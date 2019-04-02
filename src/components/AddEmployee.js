import React, { Component } from 'react';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: '',
      manager: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    // submit new employee
    this.props.handleAddEmployee(this.state);
  }

  handleChange = (field,e) => {
      this.setState({
        [field]: e.target.value
      });
  }

  render() {
    return(
      <div className="addEmployee">
      <form onSubmit={this.handleSubmit} >
      Add Employee: &nbsp;
        <input type="employee" placeholder="Name" value={this.state.employee} onChange={(e) => this.handleChange('employee', e)}></input> &nbsp;
        <input type="manager" placeholder="Reports To" value={this.state.manager} onChange={(e) => this.handleChange('manager', e)}></input>
      </form>
      </div>
    )
  }
}

export default AddEmployee;