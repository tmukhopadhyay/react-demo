import { combineReducers } from 'redux';
import * as ActionType from '../actions/action-types';

const todos = (state: Array<any> = [], action: any): Array<any> => {
	switch (action.type) {
		case ActionType.ADD_TODO:
			return [...state, { id: action.id, text: action.text }];
		case ActionType.REMOVE_TODO:
			return state.filter(item => item.id === action.id);
		case ActionType.UPDATE_TODO:
			return state.map(item =>
				item.id === action.id ? { ...item, text: action.text } : item
			);
		case 'REQUEST_DATA':
			return state;
		case 'RECIEVE_DATA':
			return [...state, { id: 100, data: action.data }];
		default:
			return state;
	}
};

export default combineReducers({
	todos
});
