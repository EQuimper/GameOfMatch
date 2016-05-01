import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Radium from 'radium';

class Login extends React.Component {
	showLock() {
		this.props.lock.show();
	}
	render() {
		return (
			<div>
				<h1>Login Page</h1>
				<RaisedButton label="Login" onClick={this.showLock.bind(this)} id="btn-login" class="btn-login" type="submit"/>
			</div>
		);
	}
}

export default Radium(Login);
