import { ADD_USER } from '../actions/add-user';

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
