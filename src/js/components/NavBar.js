import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Radium from 'radium';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';

class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render() {
		return (
			<div>
				<AppBar
					title="GameOfMatch"
					onTouchTap={this.handleToggle}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					/>
				<LeftNav
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={open => this.setState({open})}
					>
					<MenuItem onTouchTap={this.handleClose}>My Connection</MenuItem>
					<MenuItem href="/create-profile" onTouchTap={this.handleClose}>My Profile</MenuItem>
				</LeftNav>
			</div>
		);
	}
};

let styles = {
	base: {
		backgroundColor: 'Colors.red600'
	}
};

export default Radium(NavBar);
