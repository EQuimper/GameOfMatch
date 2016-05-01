import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Login from './Login';
// import { lock } from '../../../server/server.js';

class App extends React.Component {

	componentWillMount = function() {
		this.lock = new Auth0Lock('iyRp4eH24dMPLsueQ6yqqbMW0uBW5qHf', 'equimper.auth0.com');
  	}
	render() {
		return (
			<div style={styles.base}>
				<Login lock={this.lock}/>
			</div>
		);
	}
}

var styles = {
	base: {
		fontFamily: 'Roboto, sans-serif'
	}
};

const mapState = (state) => ({});

export default connect(mapState)(Radium(App));
