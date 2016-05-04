import * as types from '../constants/ActionSwipes';

import axios from 'axios';

export function acceptPlayer(player) {
	return {
		type: types.ACCEPT_PLAYER,
		player
	};
};

export function declinePlayer(player) {
	return {
		type: types.DECLINE_PLAYER,
		player
	};
}

export function receivePlayer(json) {
	return {
		type: types.RECEIVE_PLAYER,
		player: json.data
	};
}

function saveSwipe(player, isAccept) {
	axios.post();
};
