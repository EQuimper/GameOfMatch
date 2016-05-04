import React from 'react';
import Radium from 'radium';

class Connections extends React.Component {
	render() {
		return (
			<div>
				<h1>My Connection</h1>
				<ul style={styles.friends}>
					<li>Friends</li>
					<li>Friends</li>
					<li>Friends</li>
					<li>Friends</li>
					<li>Friends</li>
				</ul>
			</div>
		);
	}
}

let styles = {
	friends: {
		listStyle: 'none'
	}
};

export default Radium(Connections);
