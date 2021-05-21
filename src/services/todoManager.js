import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { remove } from '../lib/store';

const { idLength } = config;

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const build = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const add = (todos, text) =>
	(text === '' ? todos : todos.concat(build(text)));

const toggle = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	: {
		...todo,
		completed: !data.completed,
	}
));

const toggleAll = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getActiveCount = (todos) =>
	todos.filter(filters.active).length;

const getCompletedCount = (todos) =>
	todos.filter(filters.completed).length;

const getCount = (todos) => todos.length;

const clearCompleted = (todos) =>
	todos.filter(filters.active);

const filterTodos = (todos, filter) => todos.filter(filters[filter]);

const isEmpty = (todos) => getCount(todos) === 0;

const edit = (
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
	add,
	edit,
	remove,
	toggle,
	toggleAll,
	getActiveCount,
	getCompletedCount,
	getCount,
	clearCompleted,
	filterTodos,
	isEmpty,
};

export default TodoManager;
