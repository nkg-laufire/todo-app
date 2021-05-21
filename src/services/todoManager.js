import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import {
	remove, edit, count, isEmpty, editAll, removeAll, get,
} from '../lib/store';

const { idLength } = config;

const build = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const add = (todos, text) =>
	(text === '' ? todos : todos.concat(build(text)));

const TodoManager = {
	get,
	add,
	edit,
	remove,
	count,
	isEmpty,
	editAll,
	removeAll,
};

export default TodoManager;
