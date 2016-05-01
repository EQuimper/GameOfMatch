import { ACCEPT_PLAYER, DECLINE_PLAYER, RECEIVE_PLAYER } from '../constants/ActionSwipes.js';

export default function SwipesItemReducer( state = {}, action ) {
	switch ( action.types ) {
		case RECEIVE_PLAYER:
			return Object.assign( {}, state, { isAccept: false });
		case ACCEPT_PLAYER:
			return state.id !== action.player.id ? state : Object.assign( {}, state, { isAccept: true });
		default:
			return state;
	}
};

export default function SwipesListReducer( state = [], action ) {
	switch ( action.types ) {
		case RECEIVE_PLAYER:
			return [
				...state,
        		...action.players.items.map(( player ) => SwipesItemReducer( player, action ))
			];
		case DECLINE_PLAYER:
			const index = state.filter(( player ) =>
			( player.id === action.player.id )).map(( player ) => state.indexOf( player ))[0];
			return [
				...state.slice( 0, index ),
				...state.slice( index + 1 )
			];
		case ACCEPT_PLAYER:
			return state.map(( player ) => {
				return SwipesItemReducer( image, action );
			});
		default:
			return state;
	}
};
