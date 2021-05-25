import { add, remove } from '../lib/store';

const get = (tasks) => tasks.sort((left, right) => left.dueOn - right.dueOn);

const TaskManager = {
	add,
	remove,
	get,
};

export default TaskManager;
