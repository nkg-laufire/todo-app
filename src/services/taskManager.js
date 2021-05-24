import { remove } from '../lib/store';

const add = (tasks, task) => tasks.concat(task);

const TaskManager = {
	add,
	remove,
};

export default TaskManager;
