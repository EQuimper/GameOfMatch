import React from 'react';
import Radium from 'radium';

class Login extends React.Component {
	constructor(props){
		super(props);
		console.log(props);
	}
	showLock() {
		console.log('YOu click my ass');
		this.props.lock.show();
	}
	render() {

		return (
			<div>
				<hi>Im the login</hi>
				<input onClick={this.showLock.bind(this)} id="btn-login" class="btn-login" type="submit" />
			</div>
		);
	}
}

export default Radium(Login);
