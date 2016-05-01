let nextUserId = 0;

import * as types from '../constants/action-types';

export function addUser(user){
	return {
		type: types.ADD_USER,
		id: nextUserId++,
		user
	};
};

console.log(addUser());
