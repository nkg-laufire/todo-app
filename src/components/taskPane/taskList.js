import { React } from 'react';
import context from '../../core/context';
import TaskManager from '../../services/taskManager';
import Task from './task';

const TaskList = () => {
	const { tasks, order } = context.state;
	const filteredTasks = TaskManager.get(tasks, order);

	return <div>
		{ filteredTasks.map(Task) }
	</div>;
};

export default TaskList;
