import {
	remove, edit, count, isEmpty, editAll, removeAll, get,
} from '../lib/store';

const add = (todos, todo) =>
	todos.concat(todo);

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
