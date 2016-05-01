import React, { Component } from 'react';
import Radium from 'radium';
import ProfileForm from './ProfileForm';
import Paper from 'material-ui/lib/paper';


class CreateProfile extends Component {
	render() {
		return (
			<div className="col-md-offset-4 col-md-4">
				<h1>Create your Profile</h1>
				<Paper style={styles.paper} zDepth={2}>
					<ProfileForm />
				</Paper>
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

export default Radium(CreateProfile);
