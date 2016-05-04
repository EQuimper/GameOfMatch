import React from 'react';
import Radium from 'radium';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Paper from 'material-ui/lib/paper';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';


const tilesData = [
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Aatrox.png',
		summoner_name: 'jill111',
		positions: 'Mid | Support',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Annie.png',
		summoner_name: 'Tasty burger',
		positions: 'Adc | Jungle',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Ashe.png',
		summoner_name: 'Camera',
		positions: 'Top | Mid',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Darius.png',
		summoner_name: 'Morning',
		positions: 'Adc | Support',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Draven.png',
		summoner_name: 'Hats',
		positions: 'Top | Mid',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Lucian.png',
		summoner_name: 'Honey',
		positions: 'Mid | Adc',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Vayne.png',
		summoner_name: 'Vegetables',
		positions: 'Support | Top',
	},
	{
		img: 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/Corki.png',
		summoner_name: 'Water plant',
		positions: 'Mid | Adc',
	},
];


class Connections extends React.Component {
	render() {
		return (
			<div>
				<h1>My Connection</h1>
				<div style={styles.root}>
					<GridList cellHeight={200} style={styles.gridList}>
						{tilesData.map(tile => (
							<GridTile
								key={tile.img}
								title={tile.summoner_name}
								subtitle={<span>Pos: <b>{tile.positions}</b></span>}
								actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
							>
								<img src={tile.img} />
							</GridTile>
						))}
					</GridList>
				</div>
			</div>
		);
	}
}

let styles = {
	paper: {
		width: '300px'
	},
	friends: {
		listStyle: 'none'
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 500,
		height: 400,
		overflowY: 'auto',
		marginBottom: 24,
	},
};

export default Radium(Connections);
