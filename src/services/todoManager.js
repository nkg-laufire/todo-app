import { rndString } from '@laufire/utils/random';
import config from '../core/config';
import { findKey, equals } from '@laufire/utils/collection';
import {
	remove, edit, count, isEmpty, editAll, removeAll, get,
} from '../lib/store';

const { idLength, filters } = config;

const build = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const add = (todos, text) =>
	(text === '' ? todos : todos.concat(build(text)));

const getOrderKey = (filter) =>
	findKey(filters, (item) => equals(item, filter));

const TodoManager = {
	get,
	add,
	edit,
	remove,
	count,
	isEmpty,
	editAll,
	removeAll,
	getOrderKey,
};

export default TodoManager;
