import axios from 'axios';

export const GET_SUMMONER_DATA = 'GET_SUMMONER_DATA';

export function getSummonerData(summoner_name) {
	const url = `/summoner/search/${summoner_name}`;
	const request = axios.get(url);

	return {
		type: GET_SUMMONER_DATA,
		payload: request
	};
}

getSummonerData('UrNightmares');

console.log(getSummonerData());
