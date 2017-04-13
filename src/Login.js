import React, { Component } from 'react';

class Login extends Component {

	loginFormContainerStyle = {
		textAlign: "center"
	};

	loginInputStyle = {
		textAlign: "center",
		padding: "10px",
		borderRadius: "5px",
		border: "1px solid #eee",
		width: "300px",
		marginBottom: "10px",
		fontSize: "18px",
		color: "#999999",
		opacity: ".8"
	};

	loginButtonStyle = {
		width: "320px",
		height: "40px",
		border: "2px solid #fff",
		backgroundColor: "Transparent",
	  backgroundRepeat:"no-repeat",
		borderRadius: "5px",
		fontSize: "18px",
		cursor: "pointer",
		fontWeight: "bold",
		color: "#fff",
		opacity: "1.0",
	};


	validateEmail (email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

	emailCheck (event) {
		if ( !this.validateEmail(event.target.value) ) {
			this.loginInputStyle.border = "2px solid red";
			this.loginButtonStyle.border = "2px solid red";
		} else {
			this.loginInputStyle.border = "2px solid #ace600";
			this.loginButtonStyle.border = "2px solid #ace600";
		}
		this.setState();
	}

  render() {
    return (
      <div>
      	<div id="login-form-container" style={ this.loginFormContainerStyle }>
	      	<input 
	      		type="text" 
	      		id="username" 
	      		placeholder="Email"
	      		onChange={ this.emailCheck.bind(this) }
	      		style={ this.loginInputStyle }/>
	      	<br />
	      	<input 
	      		type="password" 
	      		id="password"
	      		placeholder="Password"
	      		style={ this.loginInputStyle }/>
	      	<br />
	      	<input
	      		type="button"
	      		value="Go"
	      		style={ this.loginButtonStyle } />
	      	<br />
	      	<a href="#" style={ {display: "inline-block", color: "#fff", textDecoration: "none", marginTop: "10px"} }>Register!</a>
	      </div>
      </div>
    );
  }
}

export default Login;
