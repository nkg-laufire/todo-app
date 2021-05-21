import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { remove, edit, count, isEmpty, editAll, removeAll } from '../lib/store';

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

const filterTodos = (todos, filter) => todos.filter(filters[filter]);

const TodoManager = {
	add,
	edit,
	remove,
	count,
	isEmpty,
	editAll,
	removeAll,
	filterTodos,
};

export default TodoManager;
