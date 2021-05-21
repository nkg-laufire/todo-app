import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { remove, edit } from '../lib/store';

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

const toggleAll = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getActiveCount = (todos) =>
	todos.filter(filters.active).length;

const getCount = (todos) => todos.length;

const clearCompleted = (todos) =>
	todos.filter(filters.active);

const filterTodos = (todos, filter) => todos.filter(filters[filter]);

const isEmpty = (todos) => getCount(todos) === 0;

const TodoManager = {
	add,
	edit,
	remove,
	toggleAll,
	getActiveCount,
	getCount,
	clearCompleted,
	filterTodos,
	isEmpty,
};

export default TodoManager;
