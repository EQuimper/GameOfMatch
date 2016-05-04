import axios from 'axios';

export const GET_SUMMONER_DATA = 'GET_SUMMONER_DATA';

export function getSummonerData(summoner_name) {
	const endpoint = '/summoner/search/';
	const request = axios.get(endpoint, {
		params: {
			q: summoner_name
		}
	}).then(function(res) {
		console.log(res);
	})
	.catch(function(res){
		console.log(res);
	});

	return {
		type: GET_SUMMONER_DATA,
		payload: request
	};
}
