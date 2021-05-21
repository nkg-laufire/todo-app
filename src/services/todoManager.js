import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import {
	remove, edit, count, isEmpty, editAll, removeAll, get,
} from '../lib/store';

const { idLength } = config;

const filters = {
	all: {},
	active: { completed: false },
	completed: { completed: true },
};

const build = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const add = (todos, text) =>
	(text === '' ? todos : todos.concat(build(text)));

const filter = (todos, filterStr) => get(todos, filters[filterStr]);

const TodoManager = {
	add,
	edit,
	remove,
	count,
	isEmpty,
	editAll,
	removeAll,
	filter,
};

export default TodoManager;
