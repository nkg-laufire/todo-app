import { rndString } from '@laufire/utils/random';
import context from '../core/context';
import config from '../core/config';

const getTask = (text) => ({
	id: rndString(config.idLength),
	text: text,
});

const init = () => {
	context.actions.addTask('Task 1');
	context.actions.addTask('Task 2');
	context.actions.addTask('Task 3');
};

const addTask = (tasks, task) => tasks.concat(getTask(task));

const removeTask = (tasks, task) =>
	tasks.filter((data) => data.id !== task.id);

const taskManager = () => ({
	init,
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
