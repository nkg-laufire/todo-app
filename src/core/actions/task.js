import TaskManager from '../../services/taskManager';

const { remove } = TaskManager;

const task = {
	set: ({ data: tasks }) => ({
		tasks,
	}),

	remove: ({ state, data }) => ({
		tasks: remove(state.tasks, data),
	}),

	setOrder: ({ data }) => ({
		order: data,
	}),
};

export default task;
