import React, { Component } from 'react';

var headerStyle = {
  fontFamily: "'Aguafina Script', cursive",
  width: "100%",
  height: "40px",
  color: "#fff",
  fontSize: "25px",
  paddingTop: "10px",
  textAlign: "center",
  backgroundColor: "#444444"
};

class Header extends Component {
  render() {
    return (
      <div style={ headerStyle }>
      	Sreddit
      </div>
    );
  }
}

export default Header;
