import TodoManager from '../services/todoManager';

const updateInputValue = (context, evt) => ({
	input: evt.target.value,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = (context, todo) => ({
	todos: TodoManager.removeTodo(context.state.todos, todo),
});

const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
};

export default actions;
