import * as ActionType from './action-types';

let startTodoId: number = 0;

export const addTodo = (text: string) => ({
	type: ActionType.ADD_TODO,
	id: startTodoId++,
	text
});

export const removeTodo = (id: number) => ({
	type: ActionType.REMOVE_TODO,
	id
});

export const updateTodo = (id: number, text: string) => ({
	type: ActionType.UPDATE_TODO,
	id,
	text
});

export const requestData = () => ({
	type: 'REQUEST_DATA'
});

export const recieveData = (json: any) => ({
	type: 'RECIEVE_DATA',
	data: json.data
});

export const fetchData = () => {
	return (dispatch: any) => {
		dispatch(requestData());
		const headers = new Headers();
		headers.append('x-api-key', 'ybJnUA6NAl8xkhOlRPps1miAVjBsN4S5TT1tLN45');
		return fetch(
			'https://api.sygictravelapi.com/1.1/en/places/list?parents=city:1&categories=sightseeing',
			{
				method: 'GET',
				headers: headers
			}
		)
			.then(response => response.json())
			.then(json => dispatch(recieveData(json)));
	};
};
