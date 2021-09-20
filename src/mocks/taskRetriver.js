import Remote from '../services/remote';

const getTasks = () => Remote.fetchTasks();

const TaskRetriever = {
	getTasks,
};

export default TaskRetriever;
