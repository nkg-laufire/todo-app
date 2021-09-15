/* eslint-disable no-console */
import axios from 'axios';
import context from '../core/context';

const Remote = {

	fetchTodos: async () => {
		const results = await axios.get('http://localhost:5000/todo');

		context.actions.todo
			.updateTodos(results.data);
	},

	createTodo: async (text) =>
		text !== '' && context.actions.todo
			.addTodo((await axios.post('http://localhost:5000/todo', {
				text: text,
				isCompleted: false,
			})).data),
};

export default Remote;
