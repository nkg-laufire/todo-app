import config from './config';

const seed = {
	input: '',
	todos: [],
	filter: 'all',
	order: config.tasks.orders.none,
	editing: null,
	tasks: [],
};

export default seed;
