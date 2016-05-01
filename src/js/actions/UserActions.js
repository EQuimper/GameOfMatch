let nextUserId = 0;

import * as types from '../constants/ActionUsers';

export function addUser(user){
	return {
		type: types.ADD_USER,
		id: nextUserId++,
		user
	};
};

export function editUser(id, user) {
	return {
		type: types.EDIT_USER,
		id: id,
		user
	};
}

export function deleteUser(id){
	return {
		type: types.DELETE_USER,
		id: id
	};
}
