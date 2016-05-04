import { combineReducers } from 'redux';
import UsersReducer from './users';
import { SwipesItemReducer, SwipesListReducer } from './swipe';


const rootReducer = combineReducers({
	UsersReducer,
	SwipesItemReducer,
	SwipesListReducer
});

export default rootReducer;
