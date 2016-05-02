import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Radium from 'radium';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

import { getSummonerData } from '../actions/GetSummonerData';

class ProfileForm extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}
	getInitialState() {
		return {
			positionPlayPrimary: '',
			positionPlaySecondary: '',
			positionSearch: ''
		};
	}

	handleChangePlayPrimary = (event, index, value) => this.setState({positionPlayPrimary: value});
	handleChangePlaySecondary = (event, index, value) => this.setState({positionPlaySecondary: value});
	handleChangeSearch = (event, index, value) => this.setState({positionSearch: value});

	onFormSubmit(e) {
		e.preventDefault();

		this.props.getSummonerData(this.state.term);
	}

	onInputChange(e){
		this.setState({term: e.target.value});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<TextField
					onChange={this.onInputChange.bind(this)}
					value={this.state.term}
					ref="summonerName"
					hintText="From your LOL Account"
					floatingLabelText="Summoner Name"/>
				<br/>
				<SelectField
					ref="positionPlay"
					value={this.state.positionPlayPrimary}
					onChange={this.handleChangePlayPrimary.bind(this)}
					floatingLabelText="Your primary position">
	          		<MenuItem value={1} primaryText="Support"/>
					<MenuItem value={2} primaryText="Adc"/>
					<MenuItem value={3} primaryText="Mid"/>
					<MenuItem value={4} primaryText="Jungle"/>
					<MenuItem value={5} primaryText="Top"/>
	        	</SelectField>
				<br/>
				<SelectField
					ref="positionPlay"
					value={this.state.positionPlaySecondary}
					onChange={this.handleChangePlaySecondary.bind(this)}
					floatingLabelText="Your secondary position">
	          		<MenuItem value={1} primaryText="Support"/>
					<MenuItem value={2} primaryText="Adc"/>
					<MenuItem value={3} primaryText="Mid"/>
					<MenuItem value={4} primaryText="Jungle"/>
					<MenuItem value={5} primaryText="Top"/>
	        	</SelectField>
				<br/>
				<SelectField
					ref="positionSearch"
					value={this.state.positionSearch}
					onChange={this.handleChangeSearch.bind(this)}
					floatingLabelText="Select the position you search">
	          		<MenuItem value={1} primaryText="Support"/>
					<MenuItem value={2} primaryText="Adc"/>
					<MenuItem value={3} primaryText="Mid"/>
					<MenuItem value={4} primaryText="Jungle"/>
					<MenuItem value={5} primaryText="Top"/>
	        	</SelectField>
				<br/>
				<RaisedButton type="submit" label="Submit" secondary={true} />
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getSummonerData}, dispatch);
}

export default connect(null, mapDispatchToProps)(Radium(ProfileForm));
