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

	deleteTodo: async (todo) => {
		const result = await axios.delete(`http://localhost:5000/todo/${ todo.id }`);

		result && context.actions.todo
			.remove(todo);
	},

	editTodo: async ({ state }) => {
		const result = await axios
			.put(`http://localhost:5000/todo/${ state.editing.id }`, {
				text: state.input,
			});

		result && context.actions.todo.edit();
	},

	toggleTodo: async (todo) => {
		const result = await axios
			.put(`http://localhost:5000/todo/${ todo.id }`, {
				isCompleted: !todo.completed,
			});

		result && context.actions.todo.toggle(todo);
	},

	fetchTasks: async () => {
		const results = await axios.get('http://localhost:5000/task');

		context.actions.task
			.add(results.data);
	},

};

export default Remote;
