import React from 'react';

class LoggedIn extends React.Component {
	getInitialState() {
		return {
			profile: null
		};
	}
	componentDidMount() {
		// The token is passed down from the App component
		// and used to retrieve the profile
		this.props.lock.getProfile(this.props.idToken, function (err, profile) {
			if (err) {
				console.log("Error loading the Profile", err);
				return;
			}
			this.setState({profile: profile});
		}.bind(this));
	}
	loggout() {
		localStorage.removeItem('userToken');
	}
	render() {
		if (this.state.profile) {
			return (
				<div>
					<img src={this.state.profile.picture} />
					<h2>Welcome {this.state.profile.nickname}</h2>
					<input type="submit" onClick={this.loggout}/>
				</div>
			);
		} else {
			return (
				<div className="loading">Loading profile</div>
			);
		}
	}
}

export default LoggedIn;
