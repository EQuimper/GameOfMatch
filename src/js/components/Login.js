import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Radium from 'radium';

class Login extends React.Component {
	showLock() {
		this.props.lock.show();
	}
	render() {
		return (
			<div>
				<RaisedButton
					label="Enter"
					onClick={this.showLock.bind(this)}
					id="btn-login"
					class="btn-login"
					type="submit"/>
			</div>
		);
	}
}

let styles = {
	paper: {
		height: 500,
		textAlign: 'center'
	}
};

export default Radium(Login);
