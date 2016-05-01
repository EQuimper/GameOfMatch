import { ADD_USER } from '../constants/action-types';

function UsersReducer (state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return {
				id: action.id,
				user: action.user
			};
		default:
			return state;
	}
};

export default UsersReducer;
