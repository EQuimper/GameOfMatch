import { ADD_USER, EDIT_USER, DELETE_USER } from '../constants/ActionUsers';

export default function UsersReducer (state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return [
				{
					id: action.id,
					user: user,
				},
				...state
			];
		case EDIT_USER:
			return state.map(
				user => user.id === action.id ?
					Object.assign({}, user, { user: action.user }) : user
			);
		case DELETE_USER:
			return state.filter(
				user => user.id !== action.id
			);
		default:
			return state;
	}
};
