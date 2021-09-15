import axios from 'axios';
import context from '../core/context';

const Remote = {
	fetchTodos: async () => {
		const results = await axios.get('http://localhost:5000/todo');

		context.actions.todo
			.updateTodos(results.data.todos);
	},
};

export default Remote;
