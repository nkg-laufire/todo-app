import { rndString } from '@laufire/utils/random';
import context from '../core/context';
import config from '../core/config';
import { remove } from '../lib/store';

const build = (text) => ({
	id: rndString(config.idLength),
	text: text,
});

const init = () => {
	context.actions.addTask('Task 1');
	context.actions.addTask('Task 2');
	context.actions.addTask('Task 3');
};

const add = (tasks, task) => tasks.concat(build(task));

const TaskManager = {
	init,
	add,
	remove,
};

export default TaskManager;
