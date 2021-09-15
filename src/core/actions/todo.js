import TodoManager from '../../services/todoManager';

const { add, edit, remove, editAll, removeAll } = TodoManager;

const todo = {

	setInput: ({ data }) => ({
		input: data,
	}),

	addFromInput: () => ({
		input: '',
	}),

	toggle: ({ state, data }) => ({
		todos: edit(state.todos,
			{ ...data, completed: !data.completed }),
	}),

	remove: ({ state, data }) => ({
		todos: remove(state.todos, data),
	}),

	toggleAll: ({ state, data }) => ({
		todos: editAll(state.todos, { completed: data }),
	}),

	clearCompleted: ({ state }) => ({
		todos: removeAll(state.todos, { completed: true }),
	}),

	setFilter: ({ data }) => ({
		filter: data,
	}),

	setEditing: ({ data }) => ({
		editing: data,
		input: data.text,
	}),

	edit: ({ state }) => ({
		input: '',
		editing: null,
		todos: edit(state.todos,
			{ ...state.editing, text: state.input }),
	}),

	addFromTask: ({ state, data }) => ({
		todos: add(state.todos, data.text),
	}),

	updateTodos: ({ data }) => ({
		todos: data,
	}),

	addTodo: ({ state, data }) => ({
		todos: add(state.todos, data),
	}),
};

export default todo;
