import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Radium from 'radium';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftMenu from './LeftMenu';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	}
	handleToggle = () => this.setState({open: !this.state.open});
	render() {
		return (
			<div>
				<AppBar
					title="GameOfMatch"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					iconElementRight={
						<IconMenu
							iconButtonElement={
								<IconButton onTouchTap={this.handleToggle}>
									<MoreVertIcon/>
								</IconButton>
							}
							targetOrigin={{horizontal: 'right', vertical: 'top'}}
							anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						>
							<MenuItem primaryText="Help" />
							<MenuItem primaryText="Sign out" />
						</IconMenu>
					}
				/>
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
