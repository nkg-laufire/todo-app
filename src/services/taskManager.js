import { add, remove } from '../lib/store';

const orderFns = {
	none: () => 0,
	ascending: (left, right) => left.dueOn - right.dueOn,
	descending: (left, right) => right.dueOn - left.dueOn,
	alphabetical: (a, b) =>
	// eslint-disable-next-line no-magic-numbers
		(a.text < b.text ? -1 : a.text > b.text ? 1 : 0),
};

const get = (tasks, order) =>
	tasks.slice().sort(orderFns[order]);

const TaskManager = {
	add,
	remove,
	get,
};

export default TaskManager;
