import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const updateInput = (context, input) => ({
	input,
});

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = (context, todo) => ({
	todos: TodoManager.removeTodo(context.state.todos, todo),
});

const toggleTodos = (context, isComplete) => ({
	todos: TodoManager.toggleTodos(context.state.todos, isComplete),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});

const setFilter = (context, filter) => ({
	filter,
});

const setEditing = (context, todo) => ({
	editing: todo,
	input: todo.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const addTask = ({ state }, task) => ({
	tasks: TaskManager.addTask(state.tasks, task),
});

const removeTask = (context, task) => ({
	tasks: TaskManager.removeTask(context.state.tasks, task),
});

const addTaskToTodo = ({ state }, task) => ({
	todos: TodoManager.addTodo(state.todos, task.text),
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
