import React, { Component } from 'react';


export default class Tenants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: [],
      name: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    console.log('submit clicked', this.state);
  }
  render() {
    return (
      <div>
        <h1>Tenants</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          className="btn btn-success"
          onClick={this.onSubmit}
        >Submit</button>
      </div>
    );
  }
}
