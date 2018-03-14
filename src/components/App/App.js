import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {
        name: 'name',
        city: 'city'
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.makeChange = this.makeChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({user:{...this.state.user, name: event.target.value}});
  }
  makeChange(event){
    console.log(event.target.value);
    this.setState({user:{...this.state.user, city: event.target.value}});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.handleChange} placeholder="Name" />
        <input onChange={this.makeChange} placeholder="City" />
        <p>{this.state.user.name}</p>
        <p>lives in</p>
        <p>{this.state.user.city}</p>
      </div>
    );
  }
}

export default App;
