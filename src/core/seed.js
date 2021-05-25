import config from './config';

const seed = {
	input: '',
	todos: [],
	filter: config.filters.all,
	order: config.tasks.orders.ascending,
	editing: null,
	tasks: [],
};

export default seed;
