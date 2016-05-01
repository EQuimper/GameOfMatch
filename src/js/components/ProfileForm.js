import React, { Component } from 'react';
import Radium from 'radium';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class ProfileForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
	}
	handleChange = (event, index, value) => this.setState({value});
	render() {
		return (
			<form>
				<TextField
					ref="summonerName"
					hintText="From your LOL Account"
					floatingLabelText="Summoner Name"/>
				<br/>
				<SelectField
					value={this.state.value}
					onChange={this.handleChange}
					floatingLabelText="Select position you search">
	          		<MenuItem value={1} primaryText="Support"/>
					<MenuItem value={2} primaryText="Adc"/>
					<MenuItem value={3} primaryText="Mid"/>
					<MenuItem value={4} primaryText="Jungle"/>
					<MenuItem value={5} primaryText="Top"/>
	        	</SelectField>
			</form>
		);
	}
}

export default Radium(ProfileForm);
