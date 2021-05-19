import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const getTodo = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) =>
	(text === '' ? todos : todos.concat(getTodo(text)));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	: {
		...todo,
		completed: !data.completed,
	}
));

const removeTodo = (todos, todo) =>
	todos.filter((current) => current.id !== todo.id);

const toggleTodos = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getActiveCount = (todos) =>
	todos.filter(filters.active).length;

const getCompletedCount = (todos) =>
	todos.filter(filters.completed).length;

const getTodoCount = (todos) => todos.length;

const clearCompleted = (todos) =>
	todos.filter(filters.active);

const filterTodos = (todos, filter) => todos.filter(filters[filter]);

const hasNoTodos = (todos) => getTodoCount(todos) === 0;

const editTodo = (
	todos, editing, text
) =>
	todos.map((todo) => (todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		}
	));

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	getActiveCount,
	getCompletedCount,
	getTodoCount,
	clearCompleted,
	filterTodos,
	hasNoTodos,
	editTodo,
};

export default TodoManager;
