import React from 'react';
import Radium from 'radium';

class App extends React.Component {
	render() {
		return (
			<div style={styles.base}>
				<h1>Wow</h1>
			</div>
		);
	}
}

var styles = {
	base: {
		fontFamily: 'Roboto, sans-serif'
	}
};

export default Radium(App);
