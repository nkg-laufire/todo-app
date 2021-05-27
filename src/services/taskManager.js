import { add, remove } from '../lib/store';

const orderFns = {
	none: () => 0,
	ascending: (left, right) => left.dueOn - right.dueOn,
	descending: (left, right) => right.dueOn - left.dueOn,
};

const get = (tasks, order) =>
	tasks.slice().sort(orderFns[order]);

const TaskManager = {
	add,
	remove,
	get,
};

export default TaskManager;
