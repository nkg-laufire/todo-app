import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const updateInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.add(state.todos, state.input),
});

const toggleTodo = ({ state, data }) => ({
	todos: TodoManager.edit(state.todos,
		{ ...data, completed: !data.completed }),
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.remove(state.todos, data),
});

const toggleTodos = ({ state, data }) => ({
	todos: TodoManager.toggleAll(state.todos, data),
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
	todos: TodoManager.edit(state.todos,
		{ ...state.editing, text: state.input }),
});

const addTask = ({ state, data }) => ({
	tasks: TaskManager.add(state.tasks, data),
});

const removeTask = ({ state, data }) => ({
	tasks: TaskManager.remove(state.tasks, data),
});

const addTaskToTodo = ({ state, data }) => ({
	todos: TodoManager.add(state.todos, data.text),
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
