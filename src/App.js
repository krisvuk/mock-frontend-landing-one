import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login.js';
import Header from './Header.js';
import './App.css';

var loginFormStyle = {
  marginTop: "200px"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={ loginFormStyle }>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
