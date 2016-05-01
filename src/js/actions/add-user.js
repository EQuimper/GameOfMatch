let nextUserId = 0;

export const ADD_USER = 'ADD_USER';

export function addUser(){
	return {
		type: ADD_USER,
		id: nextUserId++,
		users
	};
};
