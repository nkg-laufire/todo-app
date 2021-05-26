import TaskManager from '../../services/taskManager';

const { add, remove } = TaskManager;

const task = {
	add: ({ state, data }) => ({
		tasks: add(state.tasks, data),
	}),

	remove: ({ state, data }) => ({
		tasks: remove(state.tasks, data),
	}),

	setOrder: ({ data }) => ({
		order: data,
	}),
};

export default task;
