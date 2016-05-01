import React from 'react';
import { connect } from 'react-redux';
import { Block, Flex } from 'jsxstyle';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import Login from './Login';
import LoggedIn from './LoggedIn';
import * as UserAction from '../actions/user-actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Colors from 'material-ui/lib/styles/colors';

import NavBar from './NavBar';
import CreateProfile from './CreateProfile';

injectTapEventPlugin();


const Fonts = ({ children }) =>
	<Block
		fontFamily='Roboto, sans-serif'>
		{ children }
	</Block>;

const Center = ({ children, ...rest }) =>
	<Flex
		alignItems='center'
		justifyContent='center'
		flexWrap='wrap'
		{ ...rest }>
		{ children }
	</Flex>;

class App extends React.Component {

	componentWillMount = function() {
		this.lock = new Auth0Lock('iyRp4eH24dMPLsueQ6yqqbMW0uBW5qHf', 'equimper.auth0.com');

		this.setState({idToken: this.getIdToken()});
  	}
	createLock() {
    	this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  	}
	getIdToken() {
		// First, check if there is already a JWT in local storage
		var idToken = localStorage.getItem('id_token');
		var authHash = this.lock.parseHash(window.location.hash);
		// If there is no JWT in local storage and there is one in the URL hash,
		// save it in local storage
		if (!idToken && authHash) {
			if (authHash.id_token) {
				idToken = authHash.id_token;
				localStorage.setItem('id_token', authHash.id_token);
			}
			if (authHash.error) {
				// Handle any error conditions
				console.log("Error signing in", authHash);
			}
		}
    return idToken;
	}
	render() {
		const { users, actions } = this.props;
		if (this.state.idToken) {
			return (
				<Fonts>
					<Center width='100vw' height='100vh'>
						<Center>
							{this.props.children}
							<LoggedIn lock={this.lock} idToken={this.state.idToken} />
						</Center>
					</Center>
				</Fonts>
			);
		} else {
			return (
				<Fonts>
					<Center width='100vw' height='100vh'>
						<Center>
							<NavBar/>
							{this.props.children}
							<Login lock={this.lock} addUser={actions.users}/>
							<CreateProfile />
						</Center>
					</Center>
				</Fonts>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
};
// console.log('mapStateToProps', mapStateToProps());

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(App));
