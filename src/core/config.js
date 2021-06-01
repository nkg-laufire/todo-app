const milliseconds = 1000;
const seconds = 15;

const config = {
	idLength: 16,
	tickerDelay: milliseconds * seconds,
	control: 'select',
	todos: {
		filters: {
			all: null,
			active: { completed: false },
			completed: { completed: true },
		},
	},
	tasks: {
		orders: {
			none: null,
			ascending: { dueOn: 'ascending' },
			descending: { dueOn: 'descending' },
			alphabetical: { text: 'ascending' },
		},
		orderLabels: {
			none: 'None',
			ascending: 'Oldest first',
			descending: 'Newest first',
			alphabetical: 'Alphabetical',
		},
	},
	mocks: {
		TaskRetriver: {
			initCount: 5,
			maxCount: 3,
			dueRange: {
				from: -7,
				to: 7,
			},
		},
	},
};

export default config;
