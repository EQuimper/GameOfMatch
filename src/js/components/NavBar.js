import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Radium from 'radium';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';

const NavBar = () => (
	<AppBar
		title="GameOfMatch"
		iconClassNameRight="muidocs-icon-navigation-expand-more"
		iconElementRight={
			<IconMenu
				iconButtonElement={
					<IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				>
				<MenuItem primaryText="Help" />
				<MenuItem primaryText="Sign out" />
			</IconMenu>
		}
	/>
);

let styles = {
	base: {
		backgroundColor: 'Colors.red600'
	}
};

export default Radium(NavBar);
