import { rndString } from '@laufire/utils/random';
import context from '../core/context';
import config from '../core/config';

const taskManager = () => ({
	init: () => context.actions.setTasks([
		{
			id: rndString(config.idLength),
			text: 'Task 1',
		},
	]),
});

const TaskManager = taskManager();

export default TaskManager;
