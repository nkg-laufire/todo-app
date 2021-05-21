import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const updateInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state, data }) => ({
	todos: TodoManager.toggleTodo(state.todos, data),
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.removeTodo(state.todos, data),
});

const toggleTodos = ({ state, data }) => ({
	todos: TodoManager.toggleTodos(state.todos, data),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});

const setFilter = ({ data }) => ({
	filter: data,
});

const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const addTask = ({ state, data }) => ({
	tasks: TaskManager.addTask(state.tasks, data),
});

const removeTask = ({ state, data }) => ({
	tasks: TaskManager.removeTask(state.tasks, data),
});

const addTaskToTodo = ({ state, data }) => ({
	todos: TodoManager.addTodo(state.todos, data.text),
});

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	clearCompleted,
	setFilter,
	setEditing,
	editTodo,
	removeTask,
	addTaskToTodo,
	addTask,
};

export default actions;
